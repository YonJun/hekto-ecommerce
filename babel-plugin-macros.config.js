const path = require("path");

module.exports = {
  twin: {
    preset: "styled-components",
    // config: path.resolve(__dirname, "../../", "tailwind.config.js"),
    config: "tailwind.config.js", // Path to the tailwind config
  },
};
