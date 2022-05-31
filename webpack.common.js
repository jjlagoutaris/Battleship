const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  // loaders' rules go here
  module: {
    rules: [
      // { test: /\.css$/, use: ['style-loader', 'css-loader']}, just css
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']}, // sass
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.html$}/, use: ['html-loader']},
      { test: /\.(svg|png|jpeg|gif|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
};