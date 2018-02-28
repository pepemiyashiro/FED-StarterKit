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

/**
 * Injected components through the script.js task
 */
const webpackInjectedComponents = ({}, {
  // js:components
  banner: '../source/components/banner/banner.js',
  header: '../source/components/header/header.js',
  bannerSmall: '../source/components/bannerSmall/bannerSmall.js',
  modal: '../source/components/modal/modal.js',
  test: '../source/components/test/test.js'
  // endjs:components
})

/**
 * Scripts manually added
 */
const webpackGlobalEntries = {
  global: '../source/main.js'
}

const webpackEntries = Object.assign({}, webpackGlobalEntries, webpackInjectedComponents);

export { webpackEntries, pathTo }
