const path = require('path');

module.exports = {
  entry: './src/index.js', // Update this to your actual entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
        "url": require.resolve("url/"),
        "fs": false,
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        // Add more fallbacks as needed
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
