import webpack from 'webpack';
import path from 'path';
import process from 'process';

import { webpackEntries, pathTo } from '../siteconfig';

const resolve = path.resolve;
const isProduction = (process.env.NODE_ENV === 'production');

// NOTE: Config must be in a separate file
const webpackConfig = {
  devtool: isProduction ? false : 'source-maps',
  entry: webpackEntries,
  output: {
    // path: resolve(__dirname, '..', pathTo.dist)
    // path : String - Target directory for output files
    path: resolve(__dirname, '..', `${pathTo.distJs}`),

    // publicPath: String - the url to the output directory resolved relative to the HTML page
    publicPath: '/js/',

    // filename: String - the filename template for entry chunks
    filename: '[name].js'
  },
  context: resolve(__dirname, '..', pathTo.dist)
}

export { webpackConfig }
