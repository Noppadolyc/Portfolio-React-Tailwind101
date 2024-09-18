/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        primaryTitle: "#0B213D",


        primaryContent: "#1B2B2B",

        //ปุ่ม
        primarySubcontent: "#7AABD6",


        //สีhover
        primaryBase: "#ffee58",
        
        //หางาน กับ หัวข้อ ใั่งขวา
        primaryAccent: "#184E85",

        primaryBg: "#fff9c4",      
      }
    },
  },
  plugins: [],
}

