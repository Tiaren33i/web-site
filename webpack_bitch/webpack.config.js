const path = require('path');

module.exports = {
  entry: './src/game.js',
  output: {
    filename: 'index.js',
    path: path.resolve(`${__dirname}/public`, 'js'),
  },
 mode: 'development',
 optimization: {
   usedExports: true,
 },
devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot:true
  },

};
