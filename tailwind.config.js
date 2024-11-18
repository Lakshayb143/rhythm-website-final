/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'website-gradient': 'linear-gradient(90deg, #F678F0 0%, #00E8FF 186.42%)',
        'text-gradient': 'linear-gradient(180deg, #23AFE1 0%, #D376E7 100%)',
        'schedule-gradient': 'linear-gradient(89.98deg, #C385F1 0.99%, #7A91D6 97.59%)',
        'line-gradient': 'linear-gradient(90deg, #EB7EF1 0%, #91BAD6 100%)',


      },
      colors: {
        'button-outline': 'rgba(235, 126, 241, 1)',
        'dots': 'rgba(141, 138, 242, 1)',
        'background-color': 'rgba(19, 19, 19, 1)',
        'customGray' : 'rgba(36, 36, 36, 1)',

      },
      cursor: {
        'custom': 'url("/home/alok/WebstormProjects/rythm/src/assets/images/cursor.png")6 6, auto',
      },

      animation: {
        pulse: 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
};
