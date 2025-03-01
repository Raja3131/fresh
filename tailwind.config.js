/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:'#F3603F',
        lightGray: "#F2F3F2",
      },
      fontFamily: {
        gilroy: ["Gilroy-Regular"], // Now Tailwind understands "font-gilroy"
        "gilroy-bold": ["Gilroy-Bold"],
        "gilroy-light": ["Gilroy-Light"],
        "gilroy-semibold": ["Gilroy-SemiBold"],
        "gilroy-medium": ["Gilroy-Medium"],
      },
    },
  },
  plugins: [],
}