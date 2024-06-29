module.exports = {
  content: [
    "./src/**/*.{vue,html,js}", // Existing content
    "./node_modules/flowbite/**/*.js", // New content path
  ],
  theme: {
    extend: {
      spacing: {
        "calc-100-minus-65": "calc(100% - 65px)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
