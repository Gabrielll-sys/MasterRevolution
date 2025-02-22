import type { Config } from 'tailwindcss'

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",

    "node_modules/flowbite-react/lib/esm/**/*.js",
    "/src/.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        light: "#FBFEF9",
        dark: "#100C08",
        green: "#3d9970",
        grey: "#3b4849",
        master_black:"#2A2E48",
        master_yellow:"#FCDD74",
        light_yellow:"#FBEED1",
        cardbg_color:"#404040",
        grayLine: '#dfe3e8',
      },
      fontFamily: {
        sans: ['Roboto', 'Sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
    nextui(),

  ],
};

export default config
