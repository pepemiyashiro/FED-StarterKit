import gulp from 'gulp';
import { styles } from './styles';

function watcher() {
  gulp.watch('source/*.scss', styles);
} 

export { watcher };
