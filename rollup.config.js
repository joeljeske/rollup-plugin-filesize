import babel from 'rollup-plugin-babel';

export default {
    external: [ 'filesize', 'boxen', 'chalk', 'lodash' ],
    plugins: [
        babel({
					babelrc:false,
					presets: [ 'es2015-rollup' ]
        })
    ],
    format: 'cjs',
    entry: 'src/index.js',
    dest: 'dist/index.js'
};