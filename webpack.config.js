const path = require('path');

module.exports = {
  entry: './gestures.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
};
