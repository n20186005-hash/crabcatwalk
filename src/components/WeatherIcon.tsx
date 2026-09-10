import type { WeatherIconKey } from "@/lib/weather";

/**
 * 轻量内联天气图标（不依赖任何图标库，避免额外网络请求）
 */
export function WeatherIcon({
  icon,
  size = 24,
  className,
  style,
}: {
  icon: WeatherIconKey;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    style,
    "aria-hidden": true,
  };

  switch (icon) {
    case "clear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.2 12H2M22 12h-2.2M6.3 6.3 4.8 4.8M19.2 19.2l-1.5-1.5M17.7 6.3l1.5-1.5M4.8 19.2l1.5-1.5" />
        </svg>
      );
    case "partly":
      return (
        <svg {...common}>
          <circle cx="8.4" cy="8.4" r="3.1" />
          <path d="M8.4 2.6v1.8M3.1 8.4H1.6M13.2 8.4h1.5M4.6 4.6 3.5 3.5M12.2 4.6l1.1-1.1" />
          <path d="M8 19.4h9.1a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 8 19.4Z" />
        </svg>
      );
    case "cloudy":
      return (
        <svg {...common}>
          <path d="M7.2 18.6h10a3.7 3.7 0 0 0 .35-7.38 5 5 0 0 0-9.53-.92 3.85 3.85 0 0 0-.82 8.3Z" />
          <path d="M3.4 14.6a3 3 0 0 1 1.2-5.5 3.6 3.6 0 0 1 3.1-2.2" />
        </svg>
      );
    case "fog":
      return (
        <svg {...common}>
          <path d="M7.5 14.4h9.6a3.4 3.4 0 0 0 .3-6.78 4.6 4.6 0 0 0-8.76-.85A3.5 3.5 0 0 0 7.5 14.4Z" />
          <path d="M4.5 17.6h15M6.8 20.6h10.4" />
        </svg>
      );
    case "drizzle":
      return (
        <svg {...common}>
          <path d="M7.5 14.6h9.3a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 7.5 14.6Z" />
          <path d="M9 17.6v1.6M12.4 17.6v2.6M15.8 17.6v1.6" />
        </svg>
      );
    case "rain":
      return (
        <svg {...common}>
          <path d="M7.5 13.8h9.3a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 7.5 13.8Z" />
          <path d="M8.6 16.6 7.4 20M12 16.6 10.8 20M15.4 16.6 14.2 20" />
        </svg>
      );
    case "showers":
      return (
        <svg {...common}>
          <path d="M7.5 13.4h9.3a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 7.5 13.4Z" />
          <path d="M8.4 16.2 7.2 20.4M12.2 16.2l-1.2 4.2M16 16.2l-1.2 4.2" />
          <path d="M4.4 16.8 3.6 19M20.4 16.8l-.8 2.2" />
        </svg>
      );
    case "thunder":
      return (
        <svg {...common}>
          <path d="M7.5 13.4h9.3a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 7.5 13.4Z" />
          <path d="M13.2 15.6 10.4 19.8h3.1l-1 3" />
        </svg>
      );
    case "snow":
      return (
        <svg {...common}>
          <path d="M7.5 13.4h9.3a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 7.5 13.4Z" />
          <path d="M9 17v3M12 16.6v3.6M15 17v3M7.6 18.5h2.8M12.6 18.4h2.8" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M7.5 14.6h9.3a3.5 3.5 0 0 0 .3-6.98 4.7 4.7 0 0 0-8.95-.86A3.6 3.6 0 0 0 7.5 14.6Z" />
        </svg>
      );
  }
}

export default WeatherIcon;
