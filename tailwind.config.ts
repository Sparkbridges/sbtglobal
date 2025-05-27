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
        primary: "#2c3e50",
        secondary: "#3498db",
        accent: "#e74c3c",
        text: "#333",
        light: "#f5f6fa",
      },
    },
  },
  plugins: [],
};
export default config;
