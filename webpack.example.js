module.exports = {
  entry: ['./example/jsx/test.jsx'],
  output: {
    path: './example/components',
    filename: 'test.js'
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
