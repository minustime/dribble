const path = require('path');

module.exports = {
  mode: 'development',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
};
