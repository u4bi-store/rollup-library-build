import uglify from 'rollup-plugin-uglify'; /* https://github.com/TrySound/rollup-plugin-uglify */
import { minify } from 'uglify-es';
import scss from 'rollup-plugin-scss'; /* https://github.com/thgh/rollup-plugin-scss */

export default { 
    entry: './src/App.js', 
    dest: './dist/js/bundle.js', 
    format: 'umd',      /* https://github.com/rollup/rollup/wiki/JavaScript-API#format */
    moduleName: 'U4bi', /* https://github.com/rollup/rollup/wiki/JavaScript-API#modulename */
    sourceMap: 'inline',
    plugins: [
        uglify({}, minify),
        scss({ output: './dist/css/bundle.css' })
    ]
};