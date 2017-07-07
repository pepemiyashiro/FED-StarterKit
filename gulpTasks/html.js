import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';

import { pathTo } from './config';

import { browser } from './server';

const html = _=> gulp.src(`${pathTo.src}/pages/**/*.njk`)
  .pipe(nunjucks({path: pathTo.src}))
  .pipe(gulp.dest(pathTo.dist))
  .pipe(browser.stream())


export { html };
