<template>
  <el-cascader
      v-model="selectedValue"
      v-bind="attrs"
      v-on="$listeners"
      :options="actionKey ? optionsDynamicList : optionsStaticList"
      @change="handleChange"
  >
    <template slot-scope="scope">
      <slot name="cascader-slot" v-bind="scope" />
    </template>
  </el-cascader>
</template>

<script>
/**
 * @description 级联数据处理
*/
import { Message } from 'element-ui'

export default {
  name: 'fc-select-cascader',
  props: {
    value: { default: '', type: [Array, Object, String, Number] },
    // options数据
    options: {
      type: [Array, Object],
      default: () => []
    },
    // 声明options属性名
    optionsAttr: {
      type: String,
      default: 'label,value'
    },
    label: {
      type: String,
      default: ''
    },
    // 是否需请求数据
    actionKey: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedValue: '',
      optionsDynamicList: []
    }
  },
  created() {
    const { actionKey } = this
    // 调用某个key对应的请求数据
    if (typeof actionKey === 'string' && actionKey && !this.$attrs.lazy) {
      this.GetRequestData(actionKey)
    }
  },
  computed: {
    attrs () {
      const { selectConfig } = this.$FcElement || {}
      const attrsDefault = {
        ...selectConfig,
        ...this.$attrs
      }
      // 异步加载
      if (attrsDefault.lazy) {
        attrsDefault.props = {
          lazy: true,
          lazyLoad: (node, resolve) => {
            this.GetRequestData(this.actionKey, node, resolve)
          }
        }
      }
      return attrsDefault
    },
    // 获取数据
    optionsStaticList () {
      // 静态数据
      if (Array.isArray(this.options)) {
        // 声明属性名
        if (this.optionsAttr) {
          const [label, value] = this.optionsAttr.split(',')
          this.options.forEach((item) => {
            item.label = item[label]
            item.value = item[value]
          })
        }
        return this.options
      }
      return this.options
    }
  },
  watch: {
    value: {
      immediate: true,
      handler () {
        this.selectedValue = this.value
      }
    }
  },
  methods: {
    // 请求方法
    GetRequestData(actionKey, node, resolve) {
      return this.$store.dispatch('options/getOptions', {key: actionKey, clearCache: true}).then((res) => {
        // 读取，因computed不支持异步数据更新，采用then方式，使$set渲染
        const { options } = this.$store.state
        if (node) {
          resolve(options[actionKey])
        } else {
          this.$set(this, 'optionsDynamicList', options[actionKey])
        }
      }).catch((message) => {
        Message({
          message: `获取下拉级联列表失败:${message}`,
          type: 'error'
        })
      })
    },
    handleChange (val) {
      this.$emit('change', val)
      this.$emit('input', val)
    }
  }
}
</script>
