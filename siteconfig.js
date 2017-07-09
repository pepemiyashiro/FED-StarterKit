import path from 'path';

import { pathTo } from './gulpTasks/config';

const js = filePath => path.resolve(__dirname, pathTo.src, filePath);

const webpackEntries = {
  global: js('main.js'),
  banner: js('components/banner/banner.js')
}


export { webpackEntries }
