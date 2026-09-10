"use client";

import { useEffect } from "react";

/**
 * 注册 PWA Service Worker。
 * 仅在 HTTPS（或本地开发）环境下注册，避免非安全上下文报错。
 */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const isSecure =
      window.location.protocol === "https:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (!isSecure) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* 静默失败，不影响正常浏览 */
      });
    };

    if (document.readyState === "complete") {
      register();
      return;
    }

    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
