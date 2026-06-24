"use client";

import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Animated image: shows a shimmering skeleton while loading, then the image
 * blurs + scales + fades into focus once decoded.
 * Requires the nearest positioned ancestor (or the image's own box) to be `relative`.
 */
export default function Img({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-10 bg-[length:200%_100%] bg-[linear-gradient(110deg,rgba(201,162,75,0.05)_30%,rgba(201,162,75,0.18)_50%,rgba(201,162,75,0.05)_70%)] transition-opacity duration-700 ${
          loaded ? "opacity-0" : "animate-[shimmer_1.6s_linear_infinite] opacity-100"
        }`}
      />
      <NextImage
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-[opacity,transform,filter] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-xl"
        }`}
      />
    </>
  );
}
