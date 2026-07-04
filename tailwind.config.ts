import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-base": "#000000",
        "surface-1": "#0A0A0A",
        "surface-2": "#121212",
        "border-subdued": "#1F1F1F",
        "border-highlight": "#333333",
        "text-primary": "#EDEDED",
        "text-secondary": "#A1A1AA",
        "action-primary": "#FFFFFF",
        "action-text": "#000000",
        "accent-tech": "#0057FF",
        success: "#10B981",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-2": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" }],
        "heading-1": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-base": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        label: ["14px", { lineHeight: "1.0", letterSpacing: "0.01em", fontWeight: "500" }],
        caption: ["12px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        card: "12px",
        button: "6px",
      },
      spacing: {
        "section-y-mobile": "96px",
        "section-y-desktop": "128px",
      },
      boxShadow: {
        "glow-accent": "0 0 32px rgba(255, 255, 255, 0.1)",
        "glow-tech": "0 0 40px rgba(0, 87, 255, 0.15)",
      },
      transitionTimingFunction: {
        base: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        base: "200ms",
      },
      maxWidth: {
        "7xl": "1280px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "rise-fade": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "rise-fade": "rise-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
