import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
        buble()
    ],
    external: [
        'path',
        ...Object.keys(pkg.dependencies)
    ]
};
