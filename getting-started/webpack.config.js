// path라는 node.js 라이브러리를 가져옴
var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    // path.resolve라는 API를 사용
    path: path.resolve(__dirname, "dist"),
  },
};
