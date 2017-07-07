import gulp from 'gulp';

import { styles } from './styles';
import { html } from './html';

function watcher() {
  gulp.watch('source/*.scss', styles);
  gulp.watch('source/**/*.njk', html);
} 

export { watcher };
