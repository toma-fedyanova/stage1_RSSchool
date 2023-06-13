const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new FaviconsWebpackPlugin(path.join(__dirname, 'src', 'image', 'logo.ico')),
    new CleanWebpackPlugin(),
    new EslingPlugin({ extensions: 'ts' }),
  ], 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
       filename: 'images/[name][ext]'}
    },
      {
      test: /\.ts$/i, 
      use: 'ts-loader'
    }
   ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
},
}