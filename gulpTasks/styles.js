import gulp from 'gulp';
import sass from 'gulp-sass';

import { pathTo } from './config';

import { browser } from './server';

const styles = _ => gulp.src(`${pathTo.src}/main.scss`)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(`${pathTo.dist}/css`))
  .pipe(browser.stream());

export  { styles };
