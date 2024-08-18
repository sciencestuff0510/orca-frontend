/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
        playwrite: ["Playwrite US Modern", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        marquee: "marquee var(--duration, 120s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
    colors: {
      black: "hsl(0, 0%, 20%)",
      // ruby alias for red
      ruby: {
        300: "#ff4d6d",
        700: "#c1121f",
        800: "#9d0208",
      },
      // sand alieas for ochre
      sand: {
        100: "#FEFBF7",
        300: "#FDF2E4",
        400: "#FBE9D1",
        600: "#fbf6ef",
      },
      // random pastel shades
      pastel: {
        orange: "#ffd6a5",
        blue: "#9381ff",
        green: "#60d394",
        indigo: "#9cadce",
      },
    },
  },
  plugins: [],
})