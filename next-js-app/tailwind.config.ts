import type { Config } from "tailwindcss";
const { tokens } = require("@adaptavant/eds-brands/setmore-black");
const { createPreset } = require("@adaptavant/eds-core/tailwind");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@adaptavant/eds-core/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [createPreset(tokens)],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
