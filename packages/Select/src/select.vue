<template>
  <el-select
    v-model="selectedValue"
    v-fc-load-more:rangeLimit="loadMoreFun(rangeLimit)"
    v-bind="attrs"
    v-on="listeners"
  >
    <el-option v-if="includeAll" label='全部' :value="null"></el-option>
    <el-option
      v-for="({label, value, ...attr}) in limitList"
      :key="value"
      :label="label"
      :value="value"
      v-bind="attr"
    >
      <slot name="option-slot" v-bind="{label, value, ...attr}" />
    </el-option>
  </el-select>
</template>

<script>
/**
 * @description 下拉 options数据处理
*/
import { Message } from 'element-ui'
export default {
  name: 'fc-select',
  props: {
    value: { default: '', type: [Array, Object, String, Number] },
    // options数据
    options: {
      type: [Array, Object],
      default: () => []
    },
    // 声明options属性名
    optionsAttrs: {
      type: String,
      default: 'label,value'
    },
    // 单一定义获取value对象
    valueKey: {
      type: [String, Number],
      default: ''
    },
    // 单一定义获取label名
    valueLabel: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    // 是否包含全部
    includeAll: {
      type: Boolean,
      default: true
    },
    // 是否需请求数据
    actionKey: {
      type: String,
      default: ''
    },
    limit: Number
  },
  data () {
    return {
      selectedValue: '',
      optionsDynamicList: [], // 所有数据：内部获取
      currentList: [], // 展示当前下拉数据
      rangeLimit: this.limit, // 累计叠加的条数
      addLimit: this.limit // 每次增加的条数
    }
  },
  created() {
    const { actionKey } = this
    // 调用某个key对应的请求数据
    if (typeof actionKey === 'string' && actionKey) {
      this.$store.dispatch('options/getOptions', {key: actionKey}).then((res) => {
        // 读取，因computed不支持异步数据更新，采用then方式，使$set渲染
        const { options } = this.$store.state
        this.$set(this, 'optionsDynamicList', options[actionKey])
        this.$set(this, 'currentList', options[actionKey])
      }).catch((message) => {
        Message({
          message: `获取下拉列表失败:${message}`,
          type: 'error'
        })
      })
    }
  },
  computed: {
    attrs () {
      const { selectConfig } = this.$FcElement || {}
      let item = {
        'value-key': 'id',
        'ref': 'selectRefs'
      }
      if (typeof this.limit === 'number') {
        item['filter-method'] = this.fileterGlobal
      }
      return {
        ...item,
        ...selectConfig,
        ...this.$attrs
      }
    },
    listeners () {
      const { selectConfig } = this.$FcElement || {}
      let item = {}
      if (typeof this.limit === 'number') {
        item['focus'] = this.onBlur
      }
      return {
        ...item,
        ...selectConfig,
        ...this.$listeners
      }
    },
    limitList() {
      if (typeof this.limit === 'number') {
        return this.currentList.slice(0, this.rangeLimit)
      }
      return this.currentList
    }
  },
  watch: {
    // 监听是否包含有值
    value: {
      immediate: true,
      handler () {
        this.selectedValue = this.value
        // 清空输入框后重新给下拉内容赋值
        if (!this.selectedValue) {
          this.rangeLimit = this.addLimit
          this.currentList = [...this.optionsDynamicList, ...this.optionsStaticList()]
        }
      }
    },
    // 获取props>options数据
    options: {
      immediate: true,
      handler () {
        this.$set(this, 'currentList', this.optionsStaticList())
      }
    }
  },
  // 注册一个自定义指令 `v-fc-load-more`
  directives: {
    'fc-load-more': {
      bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
        const WARP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
        WARP_DOM.addEventListener('scroll', function () {
          // 因小屏幕高度兼容问题，不满足滚动触发加载，预留32px保证提前触发加载
          const condition = (this.scrollHeight - this.scrollTop) - 32 < this.clientHeight
          if (condition) binding.value()
        })
      }
    }
  },
  methods: {
    // 搜索过滤全局匹配
    fileterGlobal(val) {
      const options = [...this.optionsDynamicList, ...this.optionsStaticList()]
      if (val) {
        this.currentList = options
        // 恢复默认当前limit
        this.rangeLimit = this.addLimit
        // 符合匹配
        this.currentList = this.currentList.filter(item => {
          if (item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
            return true
          }
        })
      } else {
        this.currentList = options
      }
    },
    // 每次滚动到底部新增条数
    loadMoreFun(n) {
      return () => {
        this.rangeLimit += this.addLimit
        return this.rangeLimit
      }
    },
    // 匹配若不存在时，恢复数据
    onBlur(val) {
      const options = [...this.optionsDynamicList, ...this.optionsStaticList()]
      // 多选模式
      if (this.$attrs.multiple && this.selectedValue.length) {
        // 弹出消失时，保留之前选择的数据靠前
        if (val.sourceCapabilities && !val.sourceCapabilities.firesTouchEvents) {
          let itemAtrrs = []
          for (const item of options) {
            if (this.selectedValue.includes(item.value) && this.$attrs.multiple) {
              itemAtrrs.splice(0, 0, item)
            } else {
              itemAtrrs.push(item)
            }
          }
          // 将选中符合的放到最前面
          this.currentList = itemAtrrs
        }
      } else {
        const str = val.target.value.toLowerCase()
        const empty = this.currentList.filter(item => item.label.toLowerCase().indexOf(str) !== -1)
        // 单选模式
        if (!empty.length) {
          let itemAtrrs = []
          for (const item of options) {
            if (item.label.toLowerCase().indexOf(str) !== -1) {
              itemAtrrs.splice(0, 0, item)
            } else {
              itemAtrrs.push(item)
            }
          }
          // 将选中符合的放到最前面
          this.currentList = itemAtrrs
        }
      }
      // 重新定位选中位置
      this.$refs.selectRefs.setSelected()
    },
    // 获取props数据，按配置格式化
    optionsStaticList () {
      // 静态数据
      if (Array.isArray(this.options)) {
        // 默认
        if (this.valueKey) {
          return this.options.map((item) => {
            return {
              ...item,
              label: item[this.valueLabel],
              value: { ...item }
            }
          })
        }
        // 声明属性名
        if (this.optionsAttrs) {
          const [label, value] = this.optionsAttrs.split(',')
          this.options.forEach((item) => {
            item.label = item[label]
            item.value = item[value]
          })
        }
        return this.options
      }
      return this.options
    }
  }
}
</script>
