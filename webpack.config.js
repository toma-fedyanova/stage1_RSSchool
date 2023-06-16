const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    new FaviconsWebpackPlugin(path.join(__dirname, './src/image/nature-plant-tree-svgrepo-com.svg')),
    new CleanWebpackPlugin(),
    new EslingPlugin({ extensions: 'ts' }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ], 
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, './src'),
        use: [
          {loader: 'style-loader'}, 
          {loader:'css-loader', 
          options: {
          modules: true,
          sourceMap: true
          }},
          {loader: 'typings-for-css-modules-loader'}
       ],
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
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    }
   ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
},
}
module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config.js') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};