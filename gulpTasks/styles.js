import gulp from 'gulp';
import sass from 'gulp-sass';

import { browser } from './server';

const styles = _ => gulp.src('./source/main.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browser.stream());

export  { styles };
