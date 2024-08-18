<template>
  <el-date-picker
    v-model="dateModel"
    v-bind="attrs"
    @change="handleChange"
    v-on="$listeners"
    v-if="!showRange"
  />
  <date-range-picker
    v-else
    v-model="dateRangeModel"
    v-bind="attrs"
    @range-change="handleRangeChange"
    v-on="$listeners"
  />
</template>

<script>
import DateRangePicker from './date-range-picker.vue'

/**
 * @description 日期默认处理
*/
export default {
  name: 'fc-date-picker',
  components: {
    DateRangePicker
  },
  inheritAttrs: false,
  inject: {
    fcForm: {
      default: ''
    }
  },
  props: {
    value: '',
    prop: {
      type: String,
      default: ''
    },
    dateRangeKeys: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      dateModel: '',
      dateRangeModel: [],
      dateTimeConfig: {
        'value-format': 'yyyy-MM-dd HH:mm:ss',
        'default-time': ['00:00:00', '23:59:59'],
        'range-separator': '至'
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        if (this.showRange && val && typeof(val) === 'object') {
          this.dateRangeModel =  val.length ? [val[0] || '', val[1] || ''] : ['', '']
          this.getDeconstructKeys(this.dateRangeModel)
        } else if (!this.showRange) {
          this.dateModel = this.value
        }
      },
      immediate: true,
      deep: true,
    }
  },
  computed: {
    attrs () {
      const { type } = this.$attrs
      const { dateConfig } = this.$FcElement || {}
      // 设置默认范围格式
      if (this.showRange) {
        const datePlaceholder = {
          monthrange: '年份',
          daterange: '日期',
          datetimerange: '时间'
        }
        return {
          'start-placeholder': `开始${datePlaceholder[type]}`,
          'end-placeholder': `结束${datePlaceholder[type]}`,
          ...this.dateTimeConfig,
          ...this.$attrs
        }
      }
      return {
        clearable: true,
        ...dateConfig,
        ...this.$attrs
      }
    },
    showRange() {
      const { type } = this.$attrs
      return type === 'daterange' || type === 'datetimerange' || type==='monthrange'
    },
 
  },
  methods: {
    handleChange () {
      this.$emit('change', this.dateModel)
      this.$emit('input', this.dateModel)
    },
    handleRangeChange(val, type) {
      this.$nextTick(() => {
        this.dateRangeModel = ['', '']
        this.dateRangeModel[0] = val[0] || ''
        this.dateRangeModel[1] = val[1] || ''
        this.$emit('change', this.dateRangeModel)
        this.$emit('input', this.dateRangeModel)
      })
    },
    // 日期范围解构别名方法-监听更新，避免重置时不生效
    getDeconstructKeys(val) {
      this.$nextTick(() => {
        if (this.fcForm && this.dateRangeKeys && this.dateRangeKeys.length) {
          const [start, end] = this.dateRangeKeys
          const [startTime, endTime] = val
          this.fcForm.setForm(start, startTime || null)
          this.fcForm.setForm(end, endTime || null)
        }
      })
    }
  },
  created() {
    this.dateRangeModel = this.value
    if (this.showRange) {
      if(this.dateRangeModel && typeof(this.dateRangeModel) === 'object' && this.dateRangeModel.length) {
        this.$set(this.dateRangeModel, '0', this.dateRangeModel ? (this.dateRangeModel[0] || '') : '')
        this.$set(this.dateRangeModel, '1', this.dateRangeModel ? (this.dateRangeModel[1] || '') : '')
      }
    }
  }
}
</script>
