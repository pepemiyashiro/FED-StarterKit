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

let webpackInjectedEntries = {
  // js:components
  banner: '../source/components/banner/banner.js',
  header: '../source/components/header/header.js',
  bannerSmall: '../source/components/bannerSmall/bannerSmall.js',
  modal: '../source/components/modal/modal.js'
  // endjs:components
}

let webpackGlobalEntries = {
  global: '../source/main.js'
}

let webpackEntries = Object.assign(webpackGlobalEntries, webpackInjectedEntries);

export { webpackEntries, pathTo }
