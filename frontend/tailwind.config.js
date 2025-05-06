module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          indigo: {
            900: '#1a1a4a',
          },
        },
        transitionDuration: {
          'slow': '500ms',
        }
      },
    },
    plugins: [],
  }