import path from 'path';
import process from 'process';

import { pathTo } from './config';
import { webpackEntries } from '../siteconfig';

const resolve = path.resolve;
const isProduction = (process.env.NODE_ENV === 'production');

// NOTE: Config must be in a separate file
const webpackConfig = {
  entry: webpackEntries,
  output: {
    // path: resolve(__dirname, '..', pathTo.dist)
    // path : String - Target directory for output files
    path: resolve(__dirname, '..', `${pathTo.dist}/js`),

    // publicPath: String - the url to the output directory resolved relative to the HTML page
    publicPath: '/js/',

    // filename: String - the filename template for entry chunks
    filename: '[name].js'
  },
  context: resolve(__dirname, '..', pathTo.dist),
  plugins: isProduction ? [new webpack.optimize.UglifyJsPlugin()] : []
}

export { webpackConfig }
