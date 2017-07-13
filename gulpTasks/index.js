import gulp from 'gulp';

import { scripts, injectScripts } from './scripts';
import { styles } from './styles';
import { server } from './server';
import { watcher } from './watch';
import { html } from './html';

export const dev = gulp.series(styles, html, injectScripts, scripts, gulp.parallel(watcher, server));
export const build = gulp.series(scripts);

export default dev;
