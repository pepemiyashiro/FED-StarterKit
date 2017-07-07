import webpack from 'webpack';

import { webpackConfig } from './webpackConfig';

const scripts = _=> {
  return new Promise(resolve => webpack(webpackConfig, (err, stats) => {
    if (err) console.log('Webpack', err)
    console.log(stats.toString({ /* stats options */ }))
    resolve()
  }))
}

module.exports = { scripts };
