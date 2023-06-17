/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grayish-cyan": "hsl(180, 52%, 96%)", // Background
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
      },
      fontFamily: {
        "league-spartan": ["'League Spartan'", "sans-serif"],
      },
      backgroundImage: {
        "mobile-pattern": "url('./assets/images/bg-header-mobile.svg')",
        "desktop-pattern": "url('./assets/images/bg-header-desktop.svg')",
      },
      screens: {
        1110: "1110px",
      },
    },
  },
  plugins: [],
};
