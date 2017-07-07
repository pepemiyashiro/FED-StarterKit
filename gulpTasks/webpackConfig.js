import path from 'path';
import process from 'process';

const isProduction = (process.env.NODE_ENV === 'production');

// NOTE: Config must be in a separate file
const webpackConfig = {
  entry: '../source/main.js',
  output: {
    filename: './js/global.js',
    path: path.resolve(__dirname, '../dist')
  },
  context: path.resolve(__dirname, '../dist'),
  plugins: isProduction ? [new webpack.optimize.UglifyJsPlugin()] : []
}


export { webpackConfig }
