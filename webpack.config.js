/* eslint-disable no-undef */
const webpack = require( 'webpack' );
const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlPlugin = require( 'html-webpack-plugin' );

module.exports = {
  devServer: {
    inline: true,
    contentBase: './build',
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  context: path.resolve( __dirname, './src' ),
  entry: path.resolve( __dirname, './src/Root.jsx' ),
  output: {
    path: path.resolve( __dirname, './build' ),
    filename: 'bundle.[hash].min.js',
  },
  devtool: 'eval',
  resolve: {
    alias: {
      views: path.resolve( __dirname, 'src/views' ),
      utils: path.resolve( __dirname, 'src/utils' ),
      styles: path.resolve( __dirname, 'src/styles' ),
      config: path.resolve( __dirname, 'src/config' ),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks( module ) {
        // This prevents stylesheet resources with the .css or .scss extension
        // from being moved from their original chunk to the vendor chunk
        if ( module.resource && ( /^.*\.(css|scss)$/ ).test( module.resource )) {
          return false;
        }
        return module.context && module.context.indexOf( 'node_modules' ) !== -1;
      },
    }),
    new ExtractTextPlugin( 'styles.[hash].css' ),
    new HtmlPlugin({ template: 'index.html' }),
  ],
};
