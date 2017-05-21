import uglify from 'rollup-plugin-uglify'; /* https://github.com/TrySound/rollup-plugin-uglify */
import { minify } from 'uglify-es';

export default { 
    entry: './src/core/App.js', 
    dest: './dist/js/bundle.js', 
    format: 'umd',      /* https://github.com/rollup/rollup/wiki/JavaScript-API#format */
    moduleName: 'U4bi', /* https://github.com/rollup/rollup/wiki/JavaScript-API#modulename */
    sourceMap: 'inline',
    plugins: [
        uglify({}, minify)
    ]
};