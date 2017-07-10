import path from 'path';

/**
 * Define Source and Dist paths
 */
const pathTo = {
  src: 'source',
  dist: 'dist'
}


/**
 * Webpack Configurations
 */

/**
 * jsFile
 * Resolve the path to the js file inside the source folder.
 * @param {String} filePath 
 */
const jsFile = filePath => path.resolve(__dirname, pathTo.src, filePath);

/**
 * Define the files to be compiled by webpack.
 * ex. 
 * [nameToBeDistributed] : jsFile('filePath')
 */
const webpackEntries = {
  global: jsFile('main.js'),
  banner: jsFile('components/banner/banner.js')
}


export { webpackEntries, pathTo }
