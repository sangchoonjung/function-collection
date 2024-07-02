const path = require("path"); // 경로처리를 위한 path 모듈 import
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const prod = argv.mode === "production";
  console.log(argv);
  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/Index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      clean: true,
    },
    devServer: {
      static: "./dist", // devServer에서 실행할 html이 있는 경로
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    module: {
      rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] }, // CSS 파일 처리
        { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Function Collection",
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              }
            : false,
      }),

      // 환경 변수 로드를 위한 플러그인
      new Dotenv({
        systemvars: true, // 시스템 환경 변수 사용 여부 설정
      }),
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        React: "react",
      }),
    ],
  };
};
