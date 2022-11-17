const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,

    historyApiFallback: true,
    compress: true,
    hot: true,
    proxy: {
      '*': 'http://localhost:3000',
      secure: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      filename: 'index.html',
    }),
  ],
};
