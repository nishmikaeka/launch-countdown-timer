/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(345, 95%, 68%)",
        "very-dark-blue-bitlight": "hsl(235, 16%, 14%)",
        "very-dark-blue": "hsl(234, 17%, 12%)",
      },
      fontFamily: {
        redhat: ["'Red Hat Text'", "sans-serif"],
      },
      keyframes: {
        "flip-top": {
          "0%": { transform: "rotateX(0)" },
          "100%": { transform: "rotateX(-90deg)" },
        },
        "flip-bottom": {
          "0%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0)" },
        },
      },
      animation: {
        "flip-top": "flip-top 0.6s forwards",
        "flip-bottom": "flip-bottom 0.6s forwards",
      },
    },
  },
  plugins: [],
};
