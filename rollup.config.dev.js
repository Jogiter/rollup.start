import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [ json(), babel() ],
    dest: 'assets/bundle.dev.js' // 等价于 --output
}
