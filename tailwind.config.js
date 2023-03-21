/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crowdyColor: "#00705b",
        section01: "#faf6f3",
        section02: "#ffffff",
        button: "#f2f3f5",
      },
      translate: {
        50: "-50%",
      },
      inset: {
        30: "25%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
      width: {
        "18vh": "18vh",
      },
      height: {
        "6vh": "6vh",
      },
    },
    fontSize: {
      44: "44px",
      16: "16px",
    },
    lineHeight: {
      53: "53px",
      19: "19px",
    },
    margin: {
      36: "36px",
    },
  },
  plugins: [],
};
