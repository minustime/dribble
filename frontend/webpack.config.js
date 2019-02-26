const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'development',
  entry: {
    vendor: ['react', 'react-dom'],
    dribble: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/dist/, /node_modules/],
      },
      {
        exclude: [/\.ts$/, /\.tsx$/, /\.scss$/, /\.js$/, /\.html$/, /\.json$/],
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
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
};
