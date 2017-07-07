import path from 'path';
import process from 'process';

import { pathTo } from './config'

const resolve = path.resolve;
const isProduction = (process.env.NODE_ENV === 'production');

// NOTE: Config must be in a separate file
const webpackConfig = {
  entry: resolve(__dirname, '..', pathTo.src, 'main.js'),
  output: {
    filename: './js/global.js',
    path: resolve(__dirname, '..', pathTo.dist)
  },
  context: resolve(__dirname, '..', pathTo.dist),
  plugins: isProduction ? [new webpack.optimize.UglifyJsPlugin()] : []
}

export { webpackConfig }
