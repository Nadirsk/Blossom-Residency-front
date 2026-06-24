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
          DEFAULT: "#111318",
          soft: "#191C24",
          mute: "#22262F",
        },
        gold: {
          DEFAULT: "#C4974A",
          light: "#DDB870",
          deep: "#9B7428",
        },
        chalk: "#F7F4EE",
        surface: "#EDE9E3",
        sand: "#E4DFD7",
        stone: "#87817A",
        beige: "#EDE9E1",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 30px 80px -20px rgba(17,19,24,0.5)",
        card: "0 8px 30px -8px rgba(17,19,24,0.12)",
        gold: "0 18px 50px -12px rgba(196,151,74,0.4)",
        soft: "0 2px 16px -4px rgba(17,19,24,0.07)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#DDB870 0%,#C4974A 45%,#9B7428 100%)",
        "ink-grad": "linear-gradient(180deg,rgba(17,19,24,0) 0%,rgba(17,19,24,0.9) 100%)",
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
