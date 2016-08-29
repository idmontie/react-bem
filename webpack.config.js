module.exports = {
  entry: ['./test/react-bem.test.js', './test/react-bem-component.test.js'],
  output: {
    path: './test',
    filename: 'react-bem.test.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
