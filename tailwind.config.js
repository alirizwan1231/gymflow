/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#08090B",
        deep: "#0B0D0F",
        panel: "#101216",
        card: "#14171C",
        raise: "#1A1E24",
        line: "rgba(255,255,255,0.08)",
        volt: "#2EF2A0",
        voltdim: "#9FCC1F",
        cream: "#F2F5EC",
        muted: "#98A29B",
        faint: "#5C665F",
        danger: "#FF5C5C",
        amber: "#FFB224",
        sky: "#4CC9F0",
        paper: "#F4F4EE",
        mist: "#E7E8DF",
        ink: "#060606",
        smoke: "#6F7268",
      },
      fontFamily: {
        poster: ["Anton", "Archivo", "sans-serif"],
        display: ["Archivo", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(46,242,160,0.25)",
        card: "0 20px 50px rgba(0,0,0,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        scan: {
          "0%": { top: "6%" },
          "50%": { top: "88%" },
          "100%": { top: "6%" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulsedot: "pulseDot 1.6s ease-in-out infinite",
        scan: "scan 3.2s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        spinslow: "spinSlow 16s linear infinite",
      },
    },
  },
  plugins: [],
};
