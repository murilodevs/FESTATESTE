import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "640px",
        lg: "768px",
        xl: "768px",
        "2xl": "768px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: "hsl(var(--blue))",
        "blue-light": "hsl(var(--blue-light))",
        "blue-dark": "hsl(var(--blue-dark))",
        cyan: "hsl(var(--cyan))",
        navy: "hsl(var(--navy))",
        danger: "hsl(var(--danger))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 25px hsl(210 100% 55% / 0.4)" },
          "50%": { boxShadow: "0 0 50px hsl(210 100% 55% / 0.6)" },
        },
        "scan": {
          "0%, 100%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-25px) scale(1.15)" },
        },
        "confetti-fall": {
          "0%": { top: "-10%", opacity: "1", transform: "rotate(0deg) translateX(0) scale(1)" },
          "50%": { opacity: "1", transform: "rotate(360deg) translateX(30px) scale(1.2)" },
          "100%": { top: "110%", opacity: "0", transform: "rotate(720deg) translateX(-20px) scale(0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scan": "scan 5s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "confetti-fall": "confetti-fall 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

