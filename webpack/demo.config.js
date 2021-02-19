const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')
const rootPath = path.resolve(__dirname, '..')

module.exports = {
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'info',
    contentBase: path.join(rootPath, 'src'),
    allowedHosts: ['.b12.io'],
    host: '0.0.0.0',
    port: 8080 // Update this port with an available port on your machine!
  },
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
    new CleanWebpackPlugin(['dist'], {
      root: rootPath
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(rootPath, './src/index.html'),
      filename: './index.html'
    })
  ]
}

