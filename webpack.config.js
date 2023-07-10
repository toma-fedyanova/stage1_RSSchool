const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    host: 'localhost',
},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new FaviconsWebpackPlugin(path.join(__dirname, 'src', 'assets', 'bomb.ico')),
    new EslingPlugin({ extensions: 'ts' }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ], 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.ts$/i, 
        use: 'ts-loader'
      },
      {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
       filename: 'assets/[name][ext]'}
    },
     {
      test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
     }
   ]
  }
}