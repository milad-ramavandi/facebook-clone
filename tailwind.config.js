/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ldsEllipsis1: {
          '0%': { transform: "scale(0)" },
          '100%': { transform: "scale(1)" },
        },
        ldsEllipsis2:{
          "0%":{transform: "translate(0, 0)"},
          "100%":{transform: "translate(24px, 0)"}
        },
        ldsEllipsis3:{
           "0%":{transform: "scale(1)"},
           "100%":{transform: "scale(0)"}
        }
      },
      animation: {
        'ldsEllipsis1': 'ldsEllipsis1 0.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        "ldsEllipsis2":"ldsEllipsis2 0.6s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ldsEllipsis3":"ldsEllipsis3 0.6s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
    },
  },
  plugins: [nextui()],
};

export default config
