import gulp from 'gulp';

import { scripts } from './webpack';
import { styles } from './styles';
import { server } from './server';
import { watcher } from './watch';
import { html } from './html';

export const dev = gulp.series(styles, html, gulp.parallel(server, watcher));
export const build = gulp.series(scripts);

export default dev;
