"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Img from "./Img";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** vertical travel in px across the scroll range */
  amount?: number;
  /** image fit */
  fit?: "cover" | "contain";
  /** gentle scale-in zoom as it enters (never goes below 1, so no gaps) */
  zoom?: boolean;
  rounded?: string;
};

export default function Parallax({
  src,
  alt,
  className = "",
  amount = 60,
  fit = "cover",
  zoom = false,
  rounded = "rounded-[28px]",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Inner layer is taller than the frame by 2*amount, so translating ±amount always covers it.
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  const scale = useTransform(scrollYProgress, [0, 1], zoom ? [1.12, 1] : [1, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.div
        style={{ y, scale, top: -amount, height: `calc(100% + ${amount * 2}px)` }}
        className="absolute inset-x-0"
      >
        <Img
          src={src}
          alt={alt}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className={fit === "cover" ? "object-cover" : "bg-white object-contain"}
        />
      </motion.div>
    </div>
  );
}
