var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var envFile = require('node-env-file');

const VENDOR_LIBS = [
    'react', 'redux', 'react-redux', 'react-dom', 'redux-thunk'
];

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    modules: [
      "node_modules",
      "app/components"
    ],
    alias: {
      app: path.resolve(__dirname, 'app/'),
      actions: path.resolve(__dirname, 'app/actions/actions.js'),
      reducers: path.resolve(__dirname,'app/reducers/reducers.js'),
      configureStore: path.resolve(__dirname, 'app/store/configureStore.js')
    },
    extensions: [' ','.js']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  externals: {
    bodymovin: 'bodymovin'
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
};
