import { SITE } from "@/i18n/site";

/**
 * 天气数据模块
 * ------------------------------------------------------------------
 * 负责向气象数据服务请求阿拉卡茹的实时观测与未来 7 日预报，
 * 并把 WMO 天气代码转换为可读的图标 + 三语文案。
 * 页面只消费这里的结构化结果，不感知数据来源细节。
 */

export type WeatherIconKey =
  | "clear"
  | "partly"
  | "cloudy"
  | "fog"
  | "drizzle"
  | "rain"
  | "showers"
  | "thunder"
  | "snow";

export type WeatherCurrent = {
  temperature: number;
  apparent: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  uvIndex: number;
  code: number;
  isDay: boolean;
};

export type WeatherHour = {
  time: string;
  temperature: number;
  precipProbability: number;
  code: number;
};

export type WeatherDay = {
  date: string;
  code: number;
  max: number;
  min: number;
  precipProbability: number;
  uvMax: number;
  sunrise: string;
  sunset: string;
};

/**
 * 近岸海况。景点是海滨 + 红树林滩涂，浪高与水温直接决定
 * 「能不能下水、赶海安不安全」，所以作为天气之外的补充数据一起取回。
 */
export type MarineCurrent = {
  waveHeight: number | null;
  seaTemperature: number | null;
  wavePeriod: number | null;
};

export type WeatherData = {
  current: WeatherCurrent;
  hourly: WeatherHour[];
  daily: WeatherDay[];
  /** 海况数据获取失败时为 null，天气本身仍可正常展示 */
  marine: MarineCurrent | null;
  fetchedAt: number;
};

/** 观测点：与景点坐标保持一致 */
export const WEATHER_COORDS = {
  latitude: SITE.latitude,
  longitude: SITE.longitude,
  timezone: "America/Maceio",
};

const ENDPOINT = "https://api.open-meteo.com/v1/forecast";
const MARINE_ENDPOINT = "https://marine-api.open-meteo.com/v1/marine";

/**
 * 蒲福风级上限表（km/h）。游客对「几级风」的直觉远强于「多少 km/h」，
 * 建议文案与指标都按风级表达。
 */
const BEAUFORT_MAX_KMH = [0.9, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];

export function beaufortForce(kmh: number): number {
  const i = BEAUFORT_MAX_KMH.findIndex((max) => kmh <= max);
  return i === -1 ? 12 : i;
}

export function formatWindForce(force: number, locale: string): string {
  if (locale === "zh") return `${force} 级`;
  if (locale === "pt") return `Força ${force}`;
  return `Force ${force}`;
}

/* ───────────────────────── WMO 天气代码映射 ───────────────────────── */

type WeatherMeta = { icon: WeatherIconKey; zh: string; en: string; pt: string };

const WMO: Record<number, WeatherMeta> = {
  0: { icon: "clear", zh: "晴朗", en: "Clear sky", pt: "Céu limpo" },
  1: { icon: "clear", zh: "大致晴朗", en: "Mainly clear", pt: "Predomínio de sol" },
  2: { icon: "partly", zh: "局部多云", en: "Partly cloudy", pt: "Parcialmente nublado" },
  3: { icon: "cloudy", zh: "阴天", en: "Overcast", pt: "Encoberto" },
  45: { icon: "fog", zh: "有雾", en: "Fog", pt: "Nevoeiro" },
  48: { icon: "fog", zh: "冻雾", en: "Depositing rime fog", pt: "Nevoeiro com geada" },
  51: { icon: "drizzle", zh: "小毛毛雨", en: "Light drizzle", pt: "Garoa fraca" },
  53: { icon: "drizzle", zh: "毛毛雨", en: "Moderate drizzle", pt: "Garoa moderada" },
  55: { icon: "drizzle", zh: "密集毛毛雨", en: "Dense drizzle", pt: "Garoa densa" },
  56: { icon: "drizzle", zh: "轻微冻雨", en: "Light freezing drizzle", pt: "Garoa congelante fraca" },
  57: { icon: "drizzle", zh: "强冻雨", en: "Dense freezing drizzle", pt: "Garoa congelante densa" },
  61: { icon: "rain", zh: "小雨", en: "Slight rain", pt: "Chuva fraca" },
  63: { icon: "rain", zh: "中雨", en: "Moderate rain", pt: "Chuva moderada" },
  65: { icon: "rain", zh: "大雨", en: "Heavy rain", pt: "Chuva forte" },
  66: { icon: "rain", zh: "轻微冻雨", en: "Light freezing rain", pt: "Chuva congelante fraca" },
  67: { icon: "rain", zh: "强冻雨", en: "Heavy freezing rain", pt: "Chuva congelante forte" },
  71: { icon: "snow", zh: "小雪", en: "Slight snowfall", pt: "Neve fraca" },
  73: { icon: "snow", zh: "中雪", en: "Moderate snowfall", pt: "Neve moderada" },
  75: { icon: "snow", zh: "大雪", en: "Heavy snowfall", pt: "Neve forte" },
  77: { icon: "snow", zh: "雪粒", en: "Snow grains", pt: "Grãos de neve" },
  80: { icon: "showers", zh: "阵雨", en: "Slight rain showers", pt: "Pancadas de chuva fracas" },
  81: { icon: "showers", zh: "中等阵雨", en: "Moderate rain showers", pt: "Pancadas de chuva moderadas" },
  82: { icon: "showers", zh: "强阵雨", en: "Violent rain showers", pt: "Pancadas de chuva fortes" },
  85: { icon: "snow", zh: "阵雪", en: "Slight snow showers", pt: "Pancadas de neve fracas" },
  86: { icon: "snow", zh: "强阵雪", en: "Heavy snow showers", pt: "Pancadas de neve fortes" },
  95: { icon: "thunder", zh: "雷暴", en: "Thunderstorm", pt: "Tempestade" },
  96: { icon: "thunder", zh: "雷暴伴小冰雹", en: "Thunderstorm with slight hail", pt: "Tempestade com granizo fraco" },
  99: { icon: "thunder", zh: "雷暴伴强冰雹", en: "Thunderstorm with heavy hail", pt: "Tempestade com granizo forte" },
};

export function describeWeather(code: number, locale: string): { icon: WeatherIconKey; label: string } {
  const meta = WMO[code] || WMO[3];
  const label = locale === "zh" ? meta.zh : locale === "pt" ? meta.pt : meta.en;
  return { icon: meta.icon, label };
}

/** 紫外线指数分级（WHO 标准） */
export function uvLevel(uv: number, locale: string): { label: string; color: string } {
  const table =
    locale === "zh"
      ? ["低", "中等", "高", "极高", "危险"]
      : locale === "pt"
      ? ["Baixo", "Moderado", "Alto", "Muito alto", "Extremo"]
      : ["Low", "Moderate", "High", "Very high", "Extreme"];
  const colors = ["#2e7d32", "#f9a825", "#ef6c00", "#d84315", "#6a1b9a"];

  let i = 0;
  if (uv >= 11) i = 4;
  else if (uv >= 8) i = 3;
  else if (uv >= 6) i = 2;
  else if (uv >= 3) i = 1;

  return { label: table[i], color: colors[i] };
}

/* ───────────────────────── 数据请求 ───────────────────────── */

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** 本地缓存 TTL：20 分钟内复用同一份数据，避免重复请求 */
export const WEATHER_CACHE_TTL = 20 * 60 * 1000;

/**
 * 取近岸浪高与海表温度。
 * 海况属于「锦上添花」的数据，失败时不应连累整个天气面板，
 * 因此这里吞掉错误并返回 null。
 */
async function fetchMarine(signal?: AbortSignal): Promise<MarineCurrent | null> {
  try {
    const params = new URLSearchParams({
      latitude: String(WEATHER_COORDS.latitude),
      longitude: String(WEATHER_COORDS.longitude),
      current: "wave_height,sea_surface_temperature,wave_period",
      timezone: WEATHER_COORDS.timezone,
      forecast_days: "1",
    });

    const res = await fetch(`${MARINE_ENDPOINT}?${params.toString()}`, {
      signal,
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return null;

    const json = await res.json();
    const c = json?.current;
    if (!c) return null;

    const round1 = (v: unknown) => (typeof v === "number" ? Math.round(v * 10) / 10 : null);

    return {
      waveHeight: round1(c.wave_height),
      seaTemperature: typeof c.sea_surface_temperature === "number" ? Math.round(c.sea_surface_temperature) : null,
      wavePeriod: round1(c.wave_period),
    };
  } catch {
    return null;
  }
}

export async function fetchWeather(signal?: AbortSignal): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: String(WEATHER_COORDS.latitude),
    longitude: String(WEATHER_COORDS.longitude),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,uv_index",
    hourly: "temperature_2m,precipitation_probability,weather_code",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset",
    timezone: WEATHER_COORDS.timezone,
    forecast_days: "7",
    wind_speed_unit: "kmh",
  });

  // 天气与海况并行请求，海况失败不影响主流程
  const [res, marine] = await Promise.all([
    fetch(`${ENDPOINT}?${params.toString()}`, {
      signal,
      cache: "no-store",
      headers: { Accept: "application/json" },
    }),
    fetchMarine(signal),
  ]);

  if (!res.ok) throw new Error(`weather request failed: ${res.status}`);

  const json = await res.json();

  const current: WeatherCurrent = {
    temperature: Math.round(json.current.temperature_2m),
    apparent: Math.round(json.current.apparent_temperature),
    humidity: Math.round(json.current.relative_humidity_2m),
    precipitation: json.current.precipitation ?? 0,
    windSpeed: Math.round(json.current.wind_speed_10m),
    uvIndex: Math.round(json.current.uv_index ?? 0),
    code: json.current.weather_code,
    isDay: json.current.is_day === 1,
  };

  // 从当前整点开始取未来 12 小时
  const nowIso: string = json.current.time;
  const hourIndex = Math.max(
    0,
    (json.hourly.time as string[]).findIndex((t) => t.slice(0, 13) >= nowIso.slice(0, 13))
  );

  const hourly: WeatherHour[] = (json.hourly.time as string[])
    .slice(hourIndex, hourIndex + 12)
    .map((time, i) => ({
      time,
      temperature: Math.round(json.hourly.temperature_2m[hourIndex + i]),
      precipProbability: Math.round(json.hourly.precipitation_probability?.[hourIndex + i] ?? 0),
      code: json.hourly.weather_code[hourIndex + i],
    }));

  const daily: WeatherDay[] = (json.daily.time as string[]).map((date, i) => ({
    date,
    code: json.daily.weather_code[i],
    max: Math.round(json.daily.temperature_2m_max[i]),
    min: Math.round(json.daily.temperature_2m_min[i]),
    precipProbability: Math.round(json.daily.precipitation_probability_max?.[i] ?? 0),
    uvMax: Math.round(json.daily.uv_index_max?.[i] ?? 0),
    sunrise: json.daily.sunrise?.[i] || "",
    sunset: json.daily.sunset?.[i] || "",
  }));

  return { current, hourly, daily, marine, fetchedAt: Date.now() };
}

/* ───────────────────────── 展示辅助 ───────────────────────── */

/** 把 ISO 时间转成 HH:MM */
export function formatHour(iso: string) {
  return iso.slice(11, 16);
}

/** 星期几 / 日期标签 */
export function formatDayLabel(dateIso: string, locale: string, index: number) {
  if (index === 0) return locale === "zh" ? "今天" : locale === "pt" ? "Hoje" : "Today";
  if (index === 1) return locale === "zh" ? "明天" : locale === "pt" ? "Amanhã" : "Tomorrow";

  const d = new Date(`${dateIso}T12:00:00`);
  const weekdays: Record<string, string[]> = {
    zh: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    pt: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };
  const key = locale === "zh" ? "zh" : locale === "pt" ? "pt" : "en";
  return `${weekdays[key][d.getDay()]} ${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
}

export function formatUpdatedAt(ts: number, locale: string) {
  const d = new Date(ts);
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  return locale === "zh" ? `更新于 ${time}` : locale === "pt" ? `Atualizado às ${time}` : `Updated at ${time}`;
}

/* 建议文案由 src/lib/weather-advice.ts 的规则引擎生成 */
