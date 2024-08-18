import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babelPlugin from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import VuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import builtins from 'rollup-plugin-node-builtins'
import image from '@rollup/plugin-image'
import { uglify } from 'rollup-plugin-uglify'

const path = require('path')
const resolveFile = filePath => {
  return path.join(__dirname, '../../', filePath)
}

const isDev = process.env.NODE_ENV !== 'production'
console.log('----------dev:', process.env.NODE_ENV, isDev)

export default opts => {
  const options = Object.assign(
    {
      css: true,
    },
    opts
  )
  return {
    input: options.input,
    output: options.output ?
    options.output :
    [
      { format: 'umd', name: options.name || 'bundle', file: resolveFile(`dist/${options.name}/index.umd.js`), 
      globals: {
        'vue': 'vue',
        'element-ui': 'elementUi',
        'js-cookie': 'Cookie',
        'dayjs': 'DAYJS'
      }, sourcemap: false },
      // { format: 'cjs', file: './dist/index.cjs.js', sourcemap: false },
      { format: 'es', file: resolveFile(`dist/${options.name}/index.es.js`), sourcemap: false },
    ],
    plugins: [
      peerDepsExternal(),
      commonjs({
        include: options.commonjsInclude || '../../node_modules/**',
      }),
      postcss({
        sourceMap: false,
        plugins: [autoprefixer()],
      }),
      babelPlugin({
        exclude: 'node_modules/**', // 只编译我们的源代码
        runtimeHelpers: true,
        plugins: [
          '@vue/babel-plugin-jsx'
        ]
      }),
      // 作用：处理json格式文件
      json(),
      // 作用：告诉 Rollup 如何查找外部模块
      resolve({
        // 将自定义选项传递给解析插件
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      image(),
      builtins(),
      ...(
        isDev ? [
          eslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['packages/**'],
            exclude: ['node_modules/**']
          })
        ] : [ uglify() ]
      ),
      VuePlugin()
    ],
    // 作用：指出应将哪些模块视为外部模块，否则会被打包进最终的代码里
    external: [ 'element-ui', 'vue', 'js-cookie', 'dayjs' ]
  }
}


