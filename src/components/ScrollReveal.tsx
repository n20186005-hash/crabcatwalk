"use client";

import React, { useEffect, useRef } from "react";

/** 进入视口时淡入，降低长页面的视觉突兀感 */
export function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 尊重用户的「减少动效」偏好
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default ScrollReveal;
