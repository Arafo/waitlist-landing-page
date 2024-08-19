import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#F5F5F7",
        grayBackground: "#0A0A0C", // Dark background like Lap Times
        black: "#1D1D1F",
        activeButton: "#1D1D1F", // Dark button like Lap Times
        primary: "#E450F7", // Pink gradient color
        secondary: "#5073F7", // Blue gradient color
        white: "white",
        appleGray: "#86868B",
        appleLightGray: "#E8E8ED",
        darkInput: "rgba(255, 255, 255, 0.1)" // Transparent input background
      },
      borderRadius: {
        DEFAULT: "12px",
        sm: "6px"
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'gradient-pink-blue': 'linear-gradient(90deg, #E450F7 0%, #5073F7 100%)',
      },
    },
  },
  plugins: [],
}
export default config
