import path from 'path';
import webpack from 'webpack';
import process from 'process';

const isProduction = (process.env.NODE_ENV === 'production');

// NOTE: Config must be in a separate file
let config = {
  entry: '../source/main.js',
  output: {
    filename: './js/global.js',
    path: path.resolve(__dirname, '../dist')
  },
  context: path.resolve(__dirname, '../dist'),
  plugins: isProduction ? [new webpack.optimize.UglifyJsPlugin()] : []
}


function scripts() {
  return new Promise(resolve => webpack(config, (err, stats) => {
    if (err) console.log('Webpack', err)
    console.log(stats.toString({ /* stats options */ }))
    resolve()
  }))
}

module.exports = { config, scripts };
