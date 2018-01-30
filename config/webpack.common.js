const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const basePath = __dirname
const targetPath = '../'

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      hoc: path.resolve(__dirname, '../src/hoc'),
      layouts: path.resolve(__dirname, '../src/layouts'),
      routes: path.resolve(__dirname, '../src/routes'),
      utils: path.resolve(__dirname, '../src/utils')
    }
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: basePath + '/' + targetPath
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
}
