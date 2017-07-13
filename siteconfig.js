import path from 'path';

/**
 * Define Source and Dist paths
 */
const pathTo = {
  components: 'components',
  dist: 'dist',
  distCss: `dist/css`,
  distJs: `dist/js`,
  src: 'source',
  srcSass: 'source/main.scss',
  srcJs: 'source/main.js'
}


/**
 * Webpack Configurations
 */
const webpackEntries = {
  // js:components
  banner: '../source/components/banner/banner.js',
  modal: '../source/components/modal/modal.js'
  // endjs:components
}

/**
 * Define the files to be compiled by webpack.
 * ex. 
 * nameToBeDistributed: 'filePath'
 */

webpackEntries.global = '../source/main.js';

export { webpackEntries, pathTo }
