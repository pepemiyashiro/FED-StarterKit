import path from 'path';
import gulp from 'gulp';
import sass from 'gulp-sass';
import inject from 'gulp-inject';

import { pathTo } from '../siteconfig';
import { browser } from './server';


const styles = _ => gulp.src(pathTo.srcSass)
  .pipe(inject(gulp.src(`${pathTo.src}/components/**/*.scss`), {
    transform: function (filePath) {
      filePath = filePath.replace(pathTo.src, '');
      return '@import ".' + filePath + '";';
    },
    starttag: '// scss:components',
    endtag: '// endscss:components',
    addRootSlash: false
  }))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(pathTo.distCss))
  .pipe(browser.stream());

export  { styles };
