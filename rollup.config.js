import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
    entry : './lib/index.js',
    plugins : [
        babel(babelrc({
            addModuleOptions: false
        })),
        istanbul({
            exclude: ['test/**/*', 'node_modules/**/*']
        })
    ],
    external : external,
    targets : [
        {
            dest: "./navi.js",
            format: 'umd',
            moduleName: 'Navi',
            sourceMap: true
        }
    ]
};
