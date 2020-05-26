const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
    mainSearch: "./src/mainSearch.js",
    search: "./src/search.js",
    video: "./src/video.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/js"),
  },
};
