var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production", // webpack version 4에서 설정이 간소화되었다
  entry: "./src/main.js", // 웹팩 변환 대상파일
  output: {
    // 변환한 결과파일의 정보가 담기는 속성명
    path: path.resolve(__dirname, "./dist"), // resolve API이용해 dist폴더 밑
    publicPath: "/dist/", // 나중에 CDN 배포시 CDN 주소에 포함될 수 있게끔 속성 정의
    filename: "build.js", // 변환한 결과 파일
  },
  module: {
    // 로더의 속성 정의
    rules: [
      {
        test: /\.css$/, // css파일에 대한 로더
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader", // 자바스크립트 호환을 위해서 바벨 로더 돌림
        exclude: /node_modules/, // 라이브러리이므로 변환할 필요 없음, 배제
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // 이미지 속성을 파일로더로 변환
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]", // 웹팩에서 인식 할수 있게 옵션주기
        },
      },
    ],
  },
  resolve: {
    // 웹팩에서 파일의 연관 관계들을 해석해 나갈때, 파일의 해석방식 정의
    alias: {
      vue$: "vue/dist/vue.esm.js", // vue$ 는 vue/dist/vue.esm.js 로 해석하겠다~
    },
    extensions: ["*", ".js", ".vue", ".json"], // e.g. import {} from './math.js' 이면 .js 안써도 내가 해석 해주겠다. 저기 있는 확장자는 내가 해석 해주겠다
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: "#eval-source-map",
};

// webpack ver.3에서는 mode: 'production'이 아닌 추가로 아래의 정의를 해주어야 했음

// if (process.env.NODE_ENV === 'production') {          // node.js 실행 환경변수를 production 이라고 놨을때,
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({   // js 용량 줄이기 위해서 씀
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
