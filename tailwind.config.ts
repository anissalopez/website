import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors:{
        primaryPink: '#FD9090',
        secondaryPink:"#F4DECB",
        green2:'#094f31',
        green:"#cdffcd",
        background:'#262626',
        brown:'#3a2317',
        white:'#fafafa',
        white2:'#f5f5f5',
        black:'#000000'
      },
    },   
  },
  variants:{
    extend:{}
  },
  plugins: [],
};
export default config;

// extend: {
//   backgroundImage: {
//     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//     "gradient-conic":
//       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//   },
// },
