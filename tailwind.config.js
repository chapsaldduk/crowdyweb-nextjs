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
        ffffff: "#ffffff",
        button: "#f2f3f5",
      },
      translate: {
        50: "-50%",
      },
      inset: {
        //px
        "20px": "20px",

        // %
        5: "5%",
        8: "8%",
        10: "10%",
        13: "13%",
        15: "15%",
        20: "20%",
        25: "25%",
        32: "32%",
        40: "40%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
      width: {
        "30px": "30px",
        "150px": "150px",
        "18vh": "18vh",
      },
      height: {
        "30px": "30px",
        "4vh": "4vh",
        "6vh": "6vh",
        "8vh": "8vh",
      },
    },
    fontSize: {
      44: "44px",
      16: "16px",
      "2vh": "2vh",
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
