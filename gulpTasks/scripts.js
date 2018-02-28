import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import inject from 'gulp-inject';
import webpack from 'webpack';

import { pathTo }  from '../siteconfig';
import { webpackConfig } from './webpackConfig';


const scriptTemplate = (file, index, length) => {  
  const pathToFile = `../${pathTo.src}/${pathTo.components}/${file.relative}`;
  console.log(pathToFile, file, index, length );
  return (index >= (length - 1)) ? `${file.stem}: '${pathToFile}'`
                                 : `${file.stem}: '${pathToFile}',`;
}

const injectScripts = _=> {
  return gulp.src(path.resolve(__dirname, '..', 'siteconfig.js') )
    .pipe(inject(gulp.src(`${pathTo.src}/${pathTo.components}/**/*.js`), {
      transform: function (filepath, file, index, length) {
        return scriptTemplate(file, index, length);
      },
      starttag: '// js:components',
      endtag: '// endjs:components',
      addRootSlash: false
    }))
    .pipe(gulp.dest(path.resolve(__dirname, '..') ))
}
  


const scripts = _=> {
  return new Promise(resolve => webpack(webpackConfig, (err, stats) => {
    if (err) console.log('Webpack', err);
    console.log(stats.toString({ /* stats options */ }))
    resolve()
  }))
}

module.exports = { scripts, injectScripts };
