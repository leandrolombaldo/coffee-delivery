import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Baloo 2", "serif"],
    },
    extend: {
      gridTemplateColumns: {
        "auto-min-max": "repeat(auto-fit, minmax(256px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
