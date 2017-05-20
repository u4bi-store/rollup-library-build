export default { 
    entry: './src/core/App.js', 
    dest: './dist/js/bundle.js', 
    format: 'umd',      /* https://github.com/rollup/rollup/wiki/JavaScript-API#format */
    moduleName: 'U4bi', /* https://github.com/rollup/rollup/wiki/JavaScript-API#modulename */
    sourceMap: 'inline',
    plugins: []
};