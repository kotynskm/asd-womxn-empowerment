const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
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
      directory: path.join(__dirname, 'src'),
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
        test:  /\.jsx?$/,
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
    //clean build folder
    new CleanWebpackPlugin(),
    //copy static assets from 'public' to 'build' folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: 'public',
          filter: (resourcePath) => {
            if (
              resourcePath.slice(resourcePath.lastIndexOf('.html')) === '.html'
            )
            return false;
            return true;
          }
        }
      ]
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
};
