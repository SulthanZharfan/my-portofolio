import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: {
          DEFAULT: "#A855F7",
          soft: "#C084FC",
        },
        neon: {
          purple: "#A855F7",
          "purple-hover": "#C084FC",
          blue: "#3B82F6",
          ice: "#6593f5", // Cornflower blue
        },
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        "neon-gradient": "linear-gradient(to right, #A855F7, #6593f5)",
      },
      boxShadow: {
        "neon-glow": "0 0 15px rgba(168, 85, 247, 0.4)",
        "neon-glow-strong": "0 0 25px rgba(168, 85, 247, 0.6)",
        "ice-glow": "0 0 15px rgba(101, 147, 245, 0.4)",
        "ice-glow-strong": "0 0 25px rgba(101, 147, 245, 0.6)",
        "cyber-inner": "inset 0 0 10px rgba(168, 85, 247, 0.2)",
      },
      borderRadius: {
        'cyber': '0.5rem 2rem 0.5rem 2rem',
      }
    },
  },
  plugins: [],
};
export default config;
