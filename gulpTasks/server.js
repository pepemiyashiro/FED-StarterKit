import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { config as webpackConfig } from './webpack';
import { styles } from './styles';

const bundler = webpack(webpackConfig);
const browser = browserSync.create();

const server = _=> {
  let config = {
    server: 'dist',
    open: false,
    middleware: [
      webpackDevMiddleware(bundler, { 
        /* options */ 
      })
    ]
  }
  browser.init(config);
  gulp.watch('source/*.js').on('change', () => browser.reload())
}

export { server, browser }
