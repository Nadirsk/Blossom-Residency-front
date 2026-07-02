"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  display,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // Start at the final value so the server-rendered DOM (crawlers, no-JS) always
  // shows the real number; the count-up-from-zero effect only kicks in once the
  // counter scrolls into view for a visiting browser.
  const [n, setN] = useState(to);

  useEffect(() => {
    if (!inView) return;
    if (display) return;
    setN(0);
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, display]);

  return (
    <span ref={ref}>
      {prefix}
      {display ?? n}
      {suffix}
    </span>
  );
}
