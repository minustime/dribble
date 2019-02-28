const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'development',
  entry: {
    vendor: ['react', 'react-dom'],
    dribble: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/dist/, /node_modules/],
        loader: 'babel-loader',
      },
      {
        test: [/\.scss$/],
        exclude: [/dist/, /node_modules/],
        use: [
          { loader: require.resolve('style-loader') },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('sass-loader'),
          },
        ],
      },
      {
        exclude: [/\.js$/, /\.jsx$/, /\.scss$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          name: 'vendor',
          test: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: ['dev'],
  },
};
