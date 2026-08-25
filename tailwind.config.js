/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        foreground: "#F5F5F7",
        card: "#121216",
        "card-hover": "#1a1a22",
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(124, 58, 237, 0.4)",
        kova: {
          violet: "#7C3AED",
          "violet-glow": "#8B5CF6",
          red: "#EF233C",
          dark: "#050507",
          card: "#121216",
          white: "#F5F5F7"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        brand: ["Orbitron", "Satoshi", "sans-serif"]
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
