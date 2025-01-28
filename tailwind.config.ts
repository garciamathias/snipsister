import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        textColor: "var(--text-color)",
        lightSage: "var(--light-sage)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        highlightIn: 'highlightIn 0.5s ease forwards',
      },
      boxShadow: {
        'custom': '0 4px 15px rgba(122, 158, 126, 0.2)',
        'custom-hover': '0 6px 20px rgba(122, 158, 126, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('/floral-pattern.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
