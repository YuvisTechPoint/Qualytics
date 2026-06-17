import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#09090F",
          surface: "#0F0F1A",
          elevated: "#141426",
          border: "#1E1E35",
          borderHi: "#2A2A4A",
        },
        brand: {
          50: "#FFF5F0",
          100: "#FFE4D6",
          200: "#FFB899",
          300: "#FF8A5C",
          400: "#FF6B35",
          500: "#E85520",
          600: "#C43E0F",
          700: "#9E2F08",
          800: "#7A2205",
          900: "#5C1803",
          highlight: "#FF8C42",
        },
        electric: {
          50: "#EFF8FF",
          100: "#DBEFFE",
          200: "#BAE0FD",
          300: "#7CC9FA",
          400: "#38ABEF",
          500: "#0E8DD6",
          600: "#0571B3",
          700: "#045A91",
          800: "#074B78",
          900: "#0B3E64",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
          950: "#121416",
        },
        success: "#22C55E",
        warning: "#EAB308",
        error: "#EF4444",
        info: "#38ABF0",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        display: ["var(--font-manrope)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.018em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-xl": ["1.25rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "body-xs": ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }],
        label: ["0.6875rem", { lineHeight: "1.3", fontWeight: "600", letterSpacing: "0.08em" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,53,0.15)",
        "glow-orange": "0 0 60px rgba(255,107,53,0.2)",
        "glow-blue": "0 0 60px rgba(14,141,214,0.2)",
        "inset-top": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      maxWidth: {
        content: "1200px",
        narrow: "780px",
        wide: "1400px",
      },
      animation: {
        marquee: "marqueeLeft 25s linear infinite",
        orbPulse: "orbPulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbPulse: {
          "0%, 100%": { opacity: "0.12", transform: "scale(1)" },
          "50%": { opacity: "0.2", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(0.5deg)" },
          "66%": { transform: "translateY(4px) rotate(-0.3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
