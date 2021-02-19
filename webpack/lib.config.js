const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')
const rootPath = path.resolve(__dirname, '..')

module.exports = {
  entry: path.resolve(rootPath, './lib.js'),
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'metronome.js',
    library: 'metronome',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    })
  ]
}


