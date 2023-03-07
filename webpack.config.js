const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  // devtool: "inline-source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./src/scripts"),
  },
};
