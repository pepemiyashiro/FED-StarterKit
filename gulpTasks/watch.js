import gulp from 'gulp';

import { pathTo } from '../siteconfig';
import { styles } from './styles';
import { scripts } from './scripts';
import { html } from './html';
import { browser } from './server';

function watcher() {
  gulp.watch(`${pathTo.src}/**/*.njk`, html);
  gulp.watch(`${pathTo.src}/**/*.scss`, styles);
  gulp.watch(`${pathTo.src}/**/*.js`, gulp.series(scripts) ).on('change', () => browser.reload());
  gulp.watch(`${pathTo.src}/**/*.scss`, styles);
} 

export { watcher };
