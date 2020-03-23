const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FlowWebpackPlugin = require('flow-webpack-plugin')

const path = require('path')

module.exports = {
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'info',
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/images/',
              outputPath: '/images/'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff2|woff)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/fonts/',
              outputPath: '/fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new FlowWebpackPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
