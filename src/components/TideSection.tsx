"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useLang } from "@/components/LangProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { renderText } from "@/lib/text";
import { formatUpdatedAt } from "@/lib/weather";
import {
  fetchTide,
  formatClock,
  formatTideDay,
  groupExtremesByDay,
  nextExtreme,
  TIDE_CACHE_TTL,
  type TideData,
  type TideExtreme,
} from "@/lib/tide";

const CACHE_KEY = "crabcatwalk:tide:v1";
/** 页面停留期间的后台刷新间隔 */
const REFRESH_INTERVAL = 30 * 60 * 1000;

function readCache(): TideData | null {
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TideData;
    if (!parsed?.fetchedAt || Date.now() - parsed.fetchedAt > TIDE_CACHE_TTL) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(data: TideData) {
  try {
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* 隐私模式下写入失败可忽略 */
  }
}

/** 潮位高度：相对平均海平面，带正负号 */
function formatHeight(h: number) {
  return `${h >= 0 ? "+" : "−"}${Math.abs(h).toFixed(2)} m`;
}

export function TideSection() {
  const { t, locale } = useLang();
  const [data, setData] = useState<TideData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const load = useCallback(async (useCache: boolean, signal?: AbortSignal) => {
    if (useCache) {
      const cached = readCache();
      if (cached) {
        setData(cached);
        setStatus("ready");
        return;
      }
    }
    try {
      const fresh = await fetchTide(signal);
      setData(fresh);
      setStatus("ready");
      writeCache(fresh);
    } catch (err) {
      if ((err as Error)?.name === "AbortError") return;
      setStatus((prev) => (prev === "ready" ? "ready" : "error"));
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(true, controller.signal);

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") load(false);
    }, REFRESH_INTERVAL);

    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [load]);

  const td = t.tide;

  return (
    <section id="tide" className="section" style={{ background: "rgba(0,0,0,0.02)" }}>
      <ScrollReveal>
        <p className="section-label">08</p>
        <h2 className="section-title">{td.title}</h2>
        <p className="section-subtitle">{td.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>

      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "2.5rem" }}>
          {renderText(td.intro)}
        </p>
      </ScrollReveal>

      <ScrollReveal>
        {status === "loading" && (
          <div className="weather-panel weather-skeleton" aria-busy="true">
            <div className="weather-skeleton-line weather-skeleton-lg" />
            <div className="weather-skeleton-line" />
            <div className="weather-skeleton-row">
              <div className="weather-skeleton-chip" />
              <div className="weather-skeleton-chip" />
              <div className="weather-skeleton-chip" />
            </div>
            <p className="weather-skeleton-text">{td.loading}</p>
          </div>
        )}

        {status === "error" && (
          <div className="weather-panel weather-error">
            <p>{td.error}</p>
            <button
              type="button"
              className="weather-retry"
              onClick={() => {
                setStatus("loading");
                load(false);
              }}
            >
              {td.retry}
            </button>
          </div>
        )}

        {status === "ready" && data && (
          <TidePanel data={data} locale={locale} t={td} onRefresh={() => load(false)} />
        )}
      </ScrollReveal>

      <ScrollReveal>
        <div className="highlight-box" style={{ marginTop: "2.5rem" }}>
          <h3 className="highlight-title">{td.noteTitle}</h3>
          <p className="highlight-text" style={{ whiteSpace: "pre-line" }}>
            {renderText(td.note)}
          </p>
          <h3 className="highlight-title" style={{ marginTop: "1.5rem" }}>
            {td.safetyTitle}
          </h3>
          <p className="highlight-text">{td.safety}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function TidePanel({
  data,
  locale,
  t,
  onRefresh,
}: {
  data: TideData;
  locale: string;
  t: Record<string, string>;
  onRefresh: () => void;
}) {
  const high = nextExtreme(data.extremes, "high", data.current.time);
  const low = nextExtreme(data.extremes, "low", data.current.time);
  const groups = groupExtremesByDay(data.extremes);

  return (
    <div className="weather-panel">
      <div className="weather-panel-head">
        <span className="weather-updated">{formatUpdatedAt(data.fetchedAt, locale)}</span>
        <button type="button" className="weather-refresh" onClick={onRefresh} aria-label={t.refresh}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-3.2-6.9" />
            <path d="M21 4v5h-5" />
          </svg>
          {t.refresh}
        </button>
      </div>

      <div className="tide-now">
        <div className="tide-now-main">
          <span className="tide-now-label">{t.currentLabel}</span>
          <div className="tide-now-value">
            {formatHeight(data.current.height)}
            <span className={`tide-trend tide-trend-${data.current.trend}`}>
              {data.current.trend === "rising" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              )}
              {data.current.trend === "rising" ? t.rising : t.falling}
            </span>
          </div>
          <span className="tide-now-time">{formatClock(data.current.time)}</span>
        </div>

        <div className="tide-next">
          <div className="tide-next-card tide-next-high">
            <span className="tide-next-type">{t.nextHigh}</span>
            <strong className="tide-next-time">{high ? formatClock(high.time) : "—"}</strong>
            <span className="tide-next-height">{high ? formatHeight(high.height) : "—"}</span>
          </div>
          <div className="tide-next-card tide-next-low">
            <span className="tide-next-type">{t.nextLow}</span>
            <strong className="tide-next-time">{low ? formatClock(low.time) : "—"}</strong>
            <span className="tide-next-height">{low ? formatHeight(low.height) : "—"}</span>
          </div>
        </div>
      </div>

      <div className="weather-hourly">
        <h3 className="weather-block-title">{t.chartTitle}</h3>
        <TideChart data={data} highLabel={t.high} lowLabel={t.low} />
        <p className="tide-chart-hint">{t.chartHint}</p>
      </div>

      <div className="weather-daily">
        <h3 className="weather-block-title">{t.weekTitle}</h3>
        <ul className="tide-day-list">
          {groups.map((g, i) => (
            <li className="tide-day" key={g.date}>
              <span className="tide-day-name">{formatTideDay(g.date, locale, i)}</span>
              <span className="tide-day-items">
                {g.items.map((e) => (
                  <span className={`tide-chip tide-chip-${e.type}`} key={e.time}>
                    <span className="tide-chip-dot" aria-hidden="true" />
                    <span className="tide-chip-type">{e.type === "high" ? t.high : t.low}</span>
                    <strong className="tide-chip-time">{formatClock(e.time)}</strong>
                    <span className="tide-chip-height">{formatHeight(e.height)}</span>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CHART_W = 720;
const CHART_H = 210;
const PAD_X = 14;
const PAD_TOP = 26;
const PAD_BOTTOM = 26;

function TideChart({
  data,
  highLabel,
  lowLabel,
}: {
  data: TideData;
  highLabel: string;
  lowLabel: string;
}) {
  const points = data.series;
  if (points.length < 2) return null;

  const span = Math.max(0.2, data.max - data.min);
  const innerH = CHART_H - PAD_TOP - PAD_BOTTOM;
  const innerW = CHART_W - PAD_X * 2;

  const x = (i: number) => PAD_X + (i / (points.length - 1)) * innerW;
  const y = (h: number) => PAD_TOP + (1 - (h - data.min) / span) * innerH;

  const line = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.height).toFixed(1)}`)
    .join(" ");

  const area = `${line} L${x(points.length - 1).toFixed(1)},${(CHART_H - PAD_BOTTOM).toFixed(
    1
  )} L${x(0).toFixed(1)},${(CHART_H - PAD_BOTTOM).toFixed(1)} Z`;

  // 图表范围内的极值标记
  const first = points[0].time;
  const last = points[points.length - 1].time;
  const markers = data.extremes.filter((e) => e.time >= first && e.time <= last);

  const markerX = (iso: string) => {
    const ms = Date.parse(`${iso}:00Z`);
    const start = Date.parse(`${first}:00Z`);
    const end = Date.parse(`${last}:00Z`);
    if (!Number.isFinite(ms) || end === start) return PAD_X;
    const ratio = (ms - start) / (end - start);
    return PAD_X + Math.max(0, Math.min(1, ratio)) * innerW;
  };

  // 参考刻度线（上限 / 中位 / 下限）
  const gridValues = [data.max, data.min + span / 2, data.min];

  return (
    <svg
      className="tide-chart"
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      role="img"
      aria-label={`${highLabel} / ${lowLabel}`}
    >
      <defs>
        <linearGradient id="tideFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {gridValues.map((v, i) => (
        <line
          key={i}
          x1={PAD_X}
          x2={CHART_W - PAD_X}
          y1={y(v)}
          y2={y(v)}
          className="tide-grid-line"
        />
      ))}

      <path d={area} fill="url(#tideFill)" />
      <path d={line} className="tide-line" fill="none" />

      {/* 当前时刻参考线 */}
      <line x1={x(0)} x2={x(0)} y1={PAD_TOP - 8} y2={CHART_H - PAD_BOTTOM} className="tide-now-line" />
      <circle cx={x(0)} cy={y(points[0].height)} r="4" className="tide-now-dot" />

      {markers.map((m: TideExtreme) => {
        const cx = markerX(m.time);
        const cy = y(m.height);
        return (
          <g key={m.time} className={`tide-marker tide-marker-${m.type}`}>
            <circle cx={cx} cy={cy} r="4.5" />
            <text
              x={cx}
              y={m.type === "high" ? cy - 12 : cy + 20}
              textAnchor="middle"
              className="tide-marker-text"
            >
              {m.type === "high" ? highLabel : lowLabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default TideSection;
