"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useLang } from "@/components/LangProvider";
import ScrollReveal from "@/components/ScrollReveal";
import WeatherIcon from "@/components/WeatherIcon";
import {
  beaufortForce,
  describeWeather,
  fetchWeather,
  formatDayLabel,
  formatHour,
  formatUpdatedAt,
  formatWindForce,
  uvLevel,
  WEATHER_CACHE_TTL,
  type WeatherData,
} from "@/lib/weather";
import { buildWeatherAdvice } from "@/lib/weather-advice";

const CACHE_KEY = "crabcatwalk:weather:v3";
/** 页面停留期间的后台刷新间隔 */
const REFRESH_INTERVAL = 15 * 60 * 1000;

function readCache(): WeatherData | null {
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as WeatherData;
    if (!parsed?.fetchedAt || Date.now() - parsed.fetchedAt > WEATHER_CACHE_TTL) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(data: WeatherData) {
  try {
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* 隐私模式下写入失败可忽略 */
  }
}

export function WeatherSection() {
  const { t, locale } = useLang();
  const [data, setData] = useState<WeatherData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const load = useCallback(
    async (useCache: boolean, signal?: AbortSignal) => {
      if (useCache) {
        const cached = readCache();
        if (cached) {
          setData(cached);
          setStatus("ready");
          return;
        }
      }
      try {
        const fresh = await fetchWeather(signal);
        setData(fresh);
        setStatus("ready");
        writeCache(fresh);
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
        setStatus((prev) => (prev === "ready" ? "ready" : "error"));
      }
    },
    []
  );

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

  const w = t.weather;

  return (
    <section id="weather" className="section">
      <ScrollReveal>
        <p className="section-label">07</p>
        <h2 className="section-title">{w.title}</h2>
        <p className="section-subtitle">{w.subtitle}</p>
        <div className="section-divider" />
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
              <div className="weather-skeleton-chip" />
            </div>
            <p className="weather-skeleton-text">{w.loading}</p>
          </div>
        )}

        {status === "error" && (
          <div className="weather-panel weather-error">
            <p>{w.error}</p>
            <button type="button" className="weather-retry" onClick={() => { setStatus("loading"); load(false); }}>
              {w.retry}
            </button>
          </div>
        )}

        {status === "ready" && data && (
          <WeatherPanel data={data} locale={locale} t={w} onRefresh={() => load(false)} />
        )}
      </ScrollReveal>
    </section>
  );
}

function WeatherPanel({
  data,
  locale,
  t,
  onRefresh,
}: {
  data: WeatherData;
  locale: string;
  t: Record<string, string>;
  onRefresh: () => void;
}) {
  const { current, hourly, daily, marine } = data;
  const now = describeWeather(current.code, locale);
  const advice = buildWeatherAdvice(data, locale);
  const uv = uvLevel(current.uvIndex, locale);
  const force = beaufortForce(current.windSpeed);

  const next12 = hourly.slice(0, 12);
  const maxPop = next12.length ? Math.max(...next12.map((h) => h.precipProbability)) : 0;

  const metrics: { label: string; value: string; color?: string }[] = [
    { label: t.feelsLike, value: `${current.apparent}°C` },
    { label: t.humidity, value: `${current.humidity}%` },
    { label: t.wind, value: `${current.windSpeed} km/h` },
    { label: t.windForce, value: formatWindForce(force, locale) },
    { label: t.uv, value: `${current.uvIndex} · ${uv.label}`, color: uv.color },
    { label: t.precipChance, value: `${maxPop}%` },
  ];

  // 海况属于海边景点专属指标，取不到就不显示
  if (marine?.waveHeight != null) {
    metrics.push({ label: t.waveHeight, value: `${marine.waveHeight} m` });
  }
  if (marine?.seaTemperature != null) {
    metrics.push({ label: t.seaTemp, value: `${marine.seaTemperature}°C` });
  }

  return (
    <div className="weather-panel">
      <div className="weather-panel-head">
        <span className="weather-updated">{formatUpdatedAt(data.fetchedAt, locale)}</span>
        <button type="button" className="weather-refresh" onClick={onRefresh} aria-label={t.refresh}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-3.2-6.9" />
            <path d="M21 4v5h-5" />
          </svg>
          {t.refresh}
        </button>
      </div>

      {/* 风险提醒优先级最高，置顶展示；没有风险时给一句安心的确认 */}
      {advice.risks.length > 0 ? (
        <div className="weather-alerts" role="alert">
          <h3 className="weather-alerts-title">
            <span aria-hidden="true">⚠️</span>
            {t.riskTitle}
          </h3>
          <ul className="weather-alert-list">
            {advice.risks.map((r) => (
              <li className={`weather-alert weather-alert-${r.level}`} key={r.id}>
                <span className="weather-alert-icon" aria-hidden="true">
                  {r.icon}
                </span>
                <span>{r.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="weather-alerts weather-alerts-clear">
          <span className="weather-alert-icon" aria-hidden="true">
            ✅
          </span>
          {t.noRisk}
        </p>
      )}

      <div className="weather-now">
        <div className="weather-now-main">
          <WeatherIcon icon={now.icon} size={64} className="weather-now-icon" />
          <div>
            <div className="weather-temp">
              {current.temperature}
              <span>°C</span>
            </div>
            <div className="weather-desc">{now.label}</div>
            <div className="weather-now-sub">{t.now}</div>
          </div>
        </div>

        <div className="weather-metrics">
          {metrics.map((m) => (
            <div className="weather-metric" key={m.label}>
              <span className="weather-metric-label">{m.label}</span>
              <strong className="weather-metric-value" style={m.color ? { color: m.color } : undefined}>
                {m.value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* 出行建议：三栏动态渲染，空栏整体隐藏 */}
      <div className="weather-guidance">
        <h3 className="weather-block-title">{t.adviceTitle}</h3>
        <div className="weather-guide-grid">
          {advice.outfit.length > 0 && (
            <section className="weather-guide">
              <h4 className="weather-guide-title">
                <span aria-hidden="true">👕</span>
                {t.outfitTitle}
              </h4>
              <ul className="weather-guide-list">
                {advice.outfit.map((item) => (
                  <li key={item.id}>
                    <span className="weather-guide-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {advice.activity.length > 0 && (
            <section className="weather-guide">
              <h4 className="weather-guide-title">
                <span aria-hidden="true">🗺️</span>
                {t.activityTitle}
              </h4>
              <ul className="weather-guide-list">
                {advice.activity.map((item) => (
                  <li key={item.id}>
                    <span className="weather-guide-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {advice.pack.length > 0 && (
            <section className="weather-guide">
              <h4 className="weather-guide-title">
                <span aria-hidden="true">🎒</span>
                {t.packTitle}
              </h4>
              <ul className="weather-pack">
                {advice.pack.map((item) => (
                  <li className="weather-pack-chip" key={item.id}>
                    <span aria-hidden="true">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <div className="weather-hourly">
        <h3 className="weather-block-title">{t.hourlyTitle}</h3>
        <div className="weather-hourly-strip">
          {hourly.map((h) => {
            const hd = describeWeather(h.code, locale);
            return (
              <div className="weather-hour" key={h.time}>
                <span className="weather-hour-time">{formatHour(h.time)}</span>
                <WeatherIcon icon={hd.icon} size={22} />
                <span className="weather-hour-temp">{h.temperature}°</span>
                <span className="weather-hour-pop" title={t.precipChance}>
                  {h.precipProbability}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="weather-daily">
        <h3 className="weather-block-title">{t.dailyTitle}</h3>
        <ul className="weather-day-list">
          {daily.map((d, i) => {
            const dd = describeWeather(d.code, locale);
            return (
              <li className="weather-day" key={d.date}>
                <span className="weather-day-name">{formatDayLabel(d.date, locale, i)}</span>
                <span className="weather-day-icon">
                  <WeatherIcon icon={dd.icon} size={22} />
                  <span className="weather-day-label">{dd.label}</span>
                </span>
                <span className="weather-day-pop" title={t.precipChance}>
                  💧 {d.precipProbability}%
                </span>
                <span className="weather-day-temp">
                  <strong>{d.max}°</strong>
                  <span>{d.min}°</span>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="weather-sun-times">
          <span>
            🌅 {t.sunrise} {formatHour(daily[0]?.sunrise || "")}
          </span>
          <span>
            🌇 {t.sunset} {formatHour(daily[0]?.sunset || "")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherSection;
