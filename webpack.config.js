const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }, 
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ], 
    
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, "public/")
    },
    port: 3000,
    // publicPath
    devMiddleware:{
       publicPath: "https://localhost:3000/dist/",
    },
    // hotOnly
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};