import process from 'process';
import path from 'path';
import gulp from 'gulp';
import sass from 'gulp-sass';
import inject from 'gulp-inject';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';

import { pathTo } from '../siteconfig';
import { browser } from './server';

const isDev = (process.env.NODE_ENV !== 'production');
const sassOptions = {
  outputStyle: 'compressed',
}

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
  .pipe( gulpif( isDev, sourcemaps.init() ) )
  .pipe( sass.sync(sassOptions).on('error', sass.logError) )
  .pipe( gulpif( isDev, sourcemaps.write() ) )
  .pipe( gulp.dest(pathTo.distCss) )
  .pipe( browser.stream() );

export  { styles };
