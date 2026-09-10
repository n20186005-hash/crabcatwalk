import { SITE } from "@/i18n/site";

/**
 * 潮汐数据模块
 * ------------------------------------------------------------------
 * 负责获取阿拉卡茹近岸的潮位序列，并从中推导出高低潮极值时刻。
 * 页面只消费这里的结构化结果（当前潮位 / 涨落趋势 / 逐日高低潮）。
 */

export type TideTrend = "rising" | "falling";
export type TideExtremeType = "high" | "low";

export type TidePoint = { time: string; height: number };
export type TideExtreme = { type: TideExtremeType; time: string; height: number };

export type TideData = {
  /** 未来 24 小时逐小时潮位（相对平均海平面，单位 m） */
  series: TidePoint[];
  /** 未来数日的高低潮极值，按时间升序 */
  extremes: TideExtreme[];
  /** 当前潮位与涨落趋势 */
  current: { time: string; height: number; trend: TideTrend };
  /** 图表归一化用的潮位上下限 */
  min: number;
  max: number;
  fetchedAt: number;
};

/** 观测点：与景点坐标保持一致 */
export const TIDE_COORDS = {
  latitude: SITE.latitude,
  longitude: SITE.longitude,
  timezone: "America/Maceio",
};

const ENDPOINT = "https://marine-api.open-meteo.com/v1/marine";

/** 本地缓存 TTL：30 分钟内复用同一份数据 */
export const TIDE_CACHE_TTL = 30 * 60 * 1000;

/** 曲线展示时长（小时） */
const SERIES_HOURS = 24;

/* ───────────────────────── 极值求解 ───────────────────────── */

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** 把本地时间字符串平移若干小时（可为小数），结果仍为本地时间字符串 */
function shiftIso(iso: string, hours: number) {
  const ms = Date.parse(`${iso}:00Z`) + hours * 3600 * 1000;
  const d = new Date(ms);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(
    d.getUTCHours()
  )}:${pad(d.getUTCMinutes())}`;
}

/**
 * 三点抛物线插值：相邻三个整点间隔 1 小时，
 * 求出极值相对中间点的偏移小时数与更精确的峰值高度。
 */
function refineExtreme(h1: number, h2: number, h3: number) {
  const denom = h1 - 2 * h2 + h3;
  if (!denom) return { offset: 0, value: h2 };
  const raw = (0.5 * (h1 - h3)) / denom;
  const offset = Math.max(-0.5, Math.min(0.5, raw));
  const value = h2 - 0.25 * (h1 - h3) * offset;
  return { offset, value };
}

/** 从逐小时序列中提取高低潮极值 */
function findExtremes(times: string[], heights: number[]): TideExtreme[] {
  const out: TideExtreme[] = [];

  for (let i = 1; i < heights.length - 1; i++) {
    const prev = heights[i - 1];
    const cur = heights[i];
    const next = heights[i + 1];

    let type: TideExtremeType | null = null;
    if (cur >= prev && cur > next) type = "high";
    else if (cur <= prev && cur < next) type = "low";
    if (!type) continue;

    const { offset, value } = refineExtreme(prev, cur, next);
    out.push({
      type,
      time: shiftIso(times[i], offset),
      height: Math.round(value * 100) / 100,
    });
  }

  return out;
}

/* ───────────────────────── 数据请求 ───────────────────────── */

export async function fetchTide(signal?: AbortSignal): Promise<TideData> {
  const params = new URLSearchParams({
    latitude: String(TIDE_COORDS.latitude),
    longitude: String(TIDE_COORDS.longitude),
    current: "sea_level_height_msl",
    hourly: "sea_level_height_msl",
    timezone: TIDE_COORDS.timezone,
    forecast_days: "7",
  });

  const res = await fetch(`${ENDPOINT}?${params.toString()}`, {
    signal,
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) throw new Error(`tide request failed: ${res.status}`);

  const json = await res.json();

  const times = (json.hourly?.time ?? []) as string[];
  const rawHeights = (json.hourly?.sea_level_height_msl ?? []) as (number | null)[];

  if (!times.length) throw new Error("tide response missing hourly series");

  // 过滤缺测值，保证序列连续
  const validTimes: string[] = [];
  const validHeights: number[] = [];
  for (let i = 0; i < times.length; i++) {
    const h = rawHeights[i];
    if (typeof h === "number" && Number.isFinite(h)) {
      validTimes.push(times[i]);
      validHeights.push(h);
    }
  }

  if (!validTimes.length) throw new Error("tide series is empty");

  const extremes = findExtremes(validTimes, validHeights);

  // 定位当前小时
  const offsetSec = json.utc_offset_seconds ?? 0;
  const localNowIso = new Date(Date.now() + offsetSec * 1000).toISOString().slice(0, 13);
  let hourIndex = validTimes.findIndex((t) => t.slice(0, 13) >= localNowIso);
  if (hourIndex < 0) hourIndex = 0;

  const apiCurrent = json.current?.sea_level_height_msl;
  const currentHeight =
    typeof apiCurrent === "number" && Number.isFinite(apiCurrent)
      ? apiCurrent
      : validHeights[hourIndex];

  // 涨落趋势：比较当前小时与前一小时（无前一小时时与后一小时比较）
  const refIndex = hourIndex > 0 ? hourIndex - 1 : Math.min(1, validHeights.length - 1);
  const trend: TideTrend = currentHeight >= validHeights[refIndex] ? "rising" : "falling";

  const series: TidePoint[] = validTimes
    .slice(hourIndex, hourIndex + SERIES_HOURS + 1)
    .map((time, i) => ({ time, height: Math.round(validHeights[hourIndex + i] * 100) / 100 }));

  const window = series.length ? series : validTimes.map((time, i) => ({ time, height: validHeights[i] }));
  const heights = window.map((p) => p.height);

  return {
    series,
    extremes,
    current: {
      time: json.current?.time ?? validTimes[hourIndex],
      height: Math.round(currentHeight * 100) / 100,
      trend,
    },
    min: Math.min(...heights),
    max: Math.max(...heights),
    fetchedAt: Date.now(),
  };
}

/* ───────────────────────── 展示辅助 ───────────────────────── */

/** 本地时间字符串 → HH:MM */
export function formatClock(iso: string) {
  return iso.slice(11, 16);
}

/** 日期标签：今天 / 明天 / 周几 日/月 */
export function formatTideDay(iso: string, locale: string, index: number) {
  const key = locale === "zh" ? "zh" : locale === "pt" ? "pt" : "en";
  const today = key === "zh" ? "今天" : key === "pt" ? "Hoje" : "Today";
  const tomorrow = key === "zh" ? "明天" : key === "pt" ? "Amanhã" : "Tomorrow";

  if (index === 0) return today;
  if (index === 1) return tomorrow;

  const d = new Date(`${iso.slice(0, 10)}T12:00:00Z`);
  const weekdays: Record<string, string[]> = {
    zh: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    pt: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };
  return `${weekdays[key][d.getUTCDay()]} ${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}`;
}

/** 把极值列表按自然日分组，便于逐日展示 */
export function groupExtremesByDay(extremes: TideExtreme[]) {
  const groups: { date: string; items: TideExtreme[] }[] = [];
  for (const item of extremes) {
    const date = item.time.slice(0, 10);
    const last = groups[groups.length - 1];
    if (last && last.date === date) last.items.push(item);
    else groups.push({ date, items: [item] });
  }
  return groups;
}

/** 找到「下一次」高潮 / 低潮（相对于当前时刻） */
export function nextExtreme(extremes: TideExtreme[], type: TideExtremeType, nowIso: string) {
  const now = nowIso.slice(0, 16);
  return extremes.find((e) => e.type === type && e.time >= now) ?? null;
}
