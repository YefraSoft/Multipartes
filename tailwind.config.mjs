/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "fire-bush": {
          50: "#fefaec",
          100: "#fbf0ca",
          200: "#f7e190",
          300: "#f3cb56",
          400: "#f0b72f",
          500: "#ea9a1c",
          600: "#cf7310",
          700: "#ac5111",
          800: "#8c4014",
          900: "#733414",
          950: "#421a06",
        },
        desert: {
          50: "#fcf7ee",
          100: "#f6e9cf",
          200: "#ecd29b",
          300: "#e2b667",
          400: "#db9f44",
          500: "#d2812e",
          600: "#af5d23",
          700: "#9b4722",
          800: "#7f3a21",
          900: "#68301f",
          950: "#3b170d",
        },
        allports: {
          50: "#f3f8fc",
          100: "#e6f1f8",
          200: "#c7e2f0",
          300: "#96c9e3",
          400: "#5eadd2",
          500: "#3994be",
          600: "#256c92",
          700: "#225f82",
          800: "#20516c",
          900: "#1f445b",
          950: "#152c3c",
        },
        "hippie-blue": {
          50: "#f1f7fa",
          100: "#dcebf1",
          200: "#bed8e3",
          300: "#90bdd0",
          400: "#649eb8",
          500: "#407d9a",
          600: "#386782",
          700: "#33556b",
          800: "#30495a",
          900: "#2c3e4d",
          950: "#192733",
        },
        fiord: {
          50: "#f6f7f9",
          100: "#ebeef3",
          200: "#d3dbe4",
          300: "#acbccd",
          400: "#7f98b1",
          500: "#5f7b98",
          600: "#4b637e",
          700: "#41556d",
          800: "#354557",
          900: "#303b4a",
          950: "#202731",
        },

        eucalyptus: {
          50: "#eefbf4",
          100: "#d6f5e2",
          200: "#b0eaca",
          300: "#7cd9ac",
          400: "#47c08a",
          500: "#24a570",
          600: "#189061",
          700: "#126a4a",
          800: "#11543c",
          900: "#0f4533",
          950: "#07271c",
        },
        alabaster: {
          50: "#fbfbfb",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
      },
      fontFamily: {
        title: ["Dosis", "Roboto", "sans-serif"],
        content: ["Oxygen", "Roboto", "sans-serif"],
        subtitle: ["Poiret One", "Roboto", "sans-serif"],
        special: ["Ballet", "Roboto", "sans-serif"],
        specialVariant: ["Great Vibes", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
