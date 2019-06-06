const path = require("path");
var WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = {
  entry: "./src/app.ts",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "Audio Orders"
      //,suppressSuccess: true
    })
  ]
};
