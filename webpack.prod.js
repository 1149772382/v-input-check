const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/directive/inputCheck.js",  // 入口为 Vue 指令
  output: {
    filename: "input-check.umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "InputCheck",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
