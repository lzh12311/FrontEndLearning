import configure from '../config/rollup.config'

const path = require('path')
const resolveFile = filePath => {
  return path.join(__dirname, '../', filePath)
}

export default configure({
  input: resolveFile('src/index.js'),
  commonjsInclude: resolveFile('node_modules/**'),
  output: [
    { format: 'umd', name: 'mobiliCoffee', file: resolveFile('dist/mobili-coffee.common.umd.js'),
    globals: {
      'vue': 'vue',
      'element-ui': 'elementUi',
      'js-cookie': 'Cookie',
      'dayjs': 'DAYJS'
    }, },
    { format: 'es', file: resolveFile('dist/mobili-coffee.common.es.js') },
  ]
})
