"use client";

import { useTheme } from "next-themes";
import type { MouseEvent } from "react";

const RAYS = [
  [12, 2.5, 12, 4.5],
  [12, 19.5, 12, 21.5],
  [2.5, 12, 4.5, 12],
  [19.5, 12, 21.5, 12],
  [5.05, 5.05, 6.46, 6.46],
  [17.54, 17.54, 18.95, 18.95],
  [5.05, 18.95, 6.46, 17.54],
  [17.54, 6.46, 18.95, 5.05],
] as const;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark";
    const doc = document as Document & {
      startViewTransition?: (update: () => void) => unknown;
    };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!doc.startViewTransition || reducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.documentElement.style.setProperty("--vt-r", `${radius}px`);
    doc.startViewTransition(() => setTheme(nextTheme));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
      className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-chip text-body transition-colors duration-300 hover:border-brand hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="theme-toggle-icon h-5 w-5 overflow-visible"
      >
        <mask id="theme-toggle-mask">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <circle
            className="theme-toggle-mask-dot"
            cx="18"
            cy="7"
            r="5.5"
            fill="black"
          />
        </mask>
        <circle
          className="theme-toggle-core"
          cx="12"
          cy="12"
          r="5"
          fill="currentColor"
          mask="url(#theme-toggle-mask)"
        />
        <g
          className="theme-toggle-rays"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {RAYS.map(([x1, y1, x2, y2]) => (
            <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
      </svg>
    </button>
  );
}
