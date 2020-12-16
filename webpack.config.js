const path = require('path');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

const development = process.env.NODE_ENV === 'development';

// Constant with our paths
const paths = {
  OUTPUT: path.resolve(__dirname, 'build'),
};

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    PORT: process.env.PORT || 3009,
  },
});

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    path: paths.OUTPUT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Middlwares': path.resolve(__dirname, './src/application/middlewares'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Models': path.resolve(__dirname, './src/models'),
    }
  },
  externals: [webpackNodeExternals()],
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
  plugins: [processEnvPlugin],
};