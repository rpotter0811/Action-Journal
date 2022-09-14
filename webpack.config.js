const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename : 'index.bundle.js',
    publicPath: '/dist'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    port: 5050,
    static: {
      directory: path.resolve(__dirname, '/dist'),
      publicPath: '/dist'
    },
    proxy: {
      "/**" : {
        target: 'http://localhost:3000/', 
        secure: false
      }
    }
  },
  module: {
    rules: [
        {
            test: /\.jsx?/, 
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  "presets": ["@babel/preset-env", "@babel/preset-react"]
              }
            }
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
      inject: false
    })
  ],
};