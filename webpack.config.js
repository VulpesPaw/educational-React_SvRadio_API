const path = require("path")

module.exports = {
  entry: "./application/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "application"),
    filename: "bundle.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3030,
    static: path.join(__dirname, "application"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}