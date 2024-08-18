/**
 * @param {String}} val 金额千分位并保留两位小数
 * @returns {String}
 */
export function currency(val) {
  let result = Math.round(val * 100) / 100
  if (!isNaN(result)) return result.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return val
}

/**
 * @param {String}} val 金额千分位并保留五位小数
 * @returns {String}
 */
export const currencyToFixed5 = (val) => {
  if (val) {
    return currency(val, 5)
  } else {
    return 0
  }
}

/**
 * @param {String}} val 税率单位显示
 * @returns {String}
 */
export const unitTaxRateCode = val => {
  if (
    typeof val === 'undefined' ||
    typeof val === 'function' ||
    typeof val === 'object' ||
    typeof val === 'boolean'
  ) {
    return '—'
  }
  if (isNaN(Number(val))) return '—'
  return `${val}%`
}

/**大数据导出-获取搜索描述转换方法——获取级联单选的value=>label值
 * @param {Object} row 配置项，同item的子集
 * @param {Array} options 级联下拉选项
 * @return {String} 中文值
*/
const getCascaderSingleValue = (row, options, value) => {
  let valueKey = (row.props && row.props.value) || 'value'
  let labelKey = (row.props && row.props.label) || 'label'
  let childrenKey = (row.props && row.props.children) || 'children'
  let valueCopy = JSON.parse(JSON.stringify(value))
  if (!valueCopy.length) return
  let target = (options || []).find(i => i[valueKey] === valueCopy[0])
  if (!target) return
  valueCopy.shift()
  let labelStr = getCascaderSingleValue(row, target[childrenKey], valueCopy)
  return target[labelKey].concat(labelStr ? `/${labelStr}` : '')
}

export function treeToMap(map,tree,childrenKey,valueKey) {
  if (!map) {
    map = new Map()
  }
  tree.forEach(e => {
    map.set(e[valueKey],e)
    if (e[childrenKey] && e[childrenKey].length > 0) {
      treeToMap(map,e[childrenKey],childrenKey,valueKey)
    }
  })
  return map
}

/**大数据导出-获取搜索描述转换方法——获取级联多选的value=>label值
 * @param {Object} row 配置项，同item的子集
 * @param {Array} options 级联下拉选项
 * @return {String} 中文值
*/
const getCascaderMultipleValue = (row, options, value) => {
  let valueKey = (row.props && row.props.value) || 'value'
  let labelKey = (row.props && row.props.label) || 'label'
  let childrenKey = (row.props && row.props.children) || 'children'
  let valueMap = treeToMap(null,options,childrenKey,valueKey)
  let labelArr = []
  let copyValue = deepClone(value) || []
  copyValue.forEach(v => {
    let name = ''
    v.forEach(i => {
      if (name !== '') {
        name += '/'
      }
      name += valueMap.get(i)[labelKey]
    })
    labelArr.push(name)
  })
  return labelArr.join('、') || '全部'
}

/**
 * 大数据导出-获取搜索描述转换方法
 * @param {Array} item form数组，包含label，prop
 * @param {Object} v 读取对象值
 * @returns {Object} descForm 一一对应枚举中文值
 * @returns {String} descFormStr 拼接&&&字符串
 * @returns {Function} descFormFilterStr 转化字符串方法
 */
export const getConditionsDesc = (item, v) => {
  let descForm = {}
  item.forEach((row) => {
    // 判断是否定义字段
    if (!row.prop) return
    // 时间范围
    if (row.type === 'daterange' || row.type === 'datetimerange' || row.type === 'monthrange') {
      const [start = '', end = ''] = v[row.prop]
      descForm[row.prop] = [row.label, start || end ? `${start} 至 ${end}` : '']
      // 下拉选择
    } else if (row.comp === 'select' && Array.isArray(row.options)) {
      const item = [...row.options]
      let val = ''
      if (!row.multiple) {
        let isValue = v[row.prop] === undefined || v[row.prop] === null || v[row.prop] === ''
        // 单选枚举中文
        val = !isValue ? (item.find(d => d.value === v[row.prop]) || {}).label : '全部'
      } else {
        let isValue = item.length === 0 || (Array.isArray(v[row.prop]) && v[row.prop].length === 0)
        // 多选枚举中文
        val = !isValue ? (v[row.prop] || []).reduce((d, c) => {
          const k = item.find(s => s.value === c) || {}
          return k.label ? d.concat(k.label) : d
        }, []).join('、') : '全部'
      }
      descForm[row.prop] = [row.label, val]
    }
    else if (row.comp === 'cascader'){
      if (row.props && row.props.multiple) {
        // 级联多选
        descForm[row.prop] = [row.label, getCascaderMultipleValue(row, row.options, v[row.prop])]
      } else {
        // 级联单选
        descForm[row.prop] = [row.label, getCascaderSingleValue(row, row.options, v[row.prop])]
      }
    } else if (row.comp === 'switch') {
      if (row.hide) return
      const prop = 'active-value' || 'activeValue'
      const isHasProActiveValue = row.hasOwnProperty(prop)
      const isOpen = isHasProActiveValue ? row[prop] === v[row.prop] : v[row.prop]
      const desc = isOpen ? '是' : '否'
      descForm[row.prop] = [row.label, desc]
    } else {
      descForm[row.prop] = [row.label || row.placeholder, v[row.prop]]
    }
  })
  const descFormFilterStr = (descForm) => {
    return Object.values(descForm).reduce((d, c) => c[1] ? d.concat(c.join(': ')) : d, []).join('&&&')
  }
  return {
    descForm,
    descFormStr: descFormFilterStr(descForm),
    descFormFilterStr
  }
}

/**深拷贝
 * @param {Object} target 需要拷贝的值
 * @return {Object} 拷贝后的值
 */
export const deepClone = (target) => {
  let result
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = []
      for (let i in target) {
        result.push(deepClone(target[i]))
      }
    } else if(target === null) {
      result = null
    } else if(target.constructor === RegExp){
      result = target
    }else {
      result = {}
      for (let i in target) {
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return result
}
