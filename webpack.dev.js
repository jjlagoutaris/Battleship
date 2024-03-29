const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", // production minifies code
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'img/[name][ext]'
  },
});