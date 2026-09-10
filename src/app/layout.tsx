import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { SITE, SITE_BASE_URL } from "@/i18n/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  applicationName: `${SITE.fullName} Guide`,
  manifest: "/manifest.webmanifest",
  // Google Search Console 站点所有权验证：
  // 配置环境变量 NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION 后会自动输出 <meta name="google-site-verification" .../>
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  appleWebApp: {
    capable: true,
    title: SITE.fullName,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.ga4Id}');
          `}
        </Script>

        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        {/* PWA：注册 Service Worker */}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
