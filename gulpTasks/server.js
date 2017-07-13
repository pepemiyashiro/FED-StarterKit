import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { webpackConfig } from './webpackConfig';
import { pathTo } from '../siteconfig';


const bundler = webpack(webpackConfig);

const browser = browserSync.create();

const server = _=> {
  let browserSyncConfig = {
    server: 'dist',
    open: false,
    middleware: [
      webpackDevMiddleware(bundler, { 
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
      })
    ]
  }
  browser.init(browserSyncConfig);
}


export { server, browser }
