import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f0e0c",
          soft: "#1a1815",
          mute: "#26231f",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e6c878",
          deep: "#a07e2e",
        },
        sand: "#f6f1e7",
        beige: "#efe7d6",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 30px 80px -20px rgba(15,14,12,0.45)",
        card: "0 18px 50px -18px rgba(15,14,12,0.28)",
        gold: "0 18px 50px -12px rgba(201,162,75,0.45)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#e6c878 0%,#c9a24b 45%,#a07e2e 100%)",
        "ink-grad": "linear-gradient(180deg,rgba(15,14,12,0) 0%,rgba(15,14,12,0.85) 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
