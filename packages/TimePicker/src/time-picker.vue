<template>
    <el-time-picker
      v-if="attrs.isRange"
      is-range
      v-model="date"
      v-bind="attrs"
      @change="handleChange"
      v-on="$listeners"
    />
    <el-time-select
      v-else
      v-model="date"
      v-bind="attrs"
      @change="handleChange"
      v-on="$listeners"
    />
</template>

<script>
/**
 * @description 日期默认处理
*/
export default {
  name: 'fc-time-picker',
  inheritAttrs: false,
  inject: ['fcForm'],
  props: {
    value: { default: '', type: [Array, Object, String, Number] },
    label: {
      type: String,
      default: ''
    },
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
      date: '',
      dateTimeConfig: {
        'value-format': 'HH:mm:ss',
        'default-time': ['00:00:00', '23:59:59'],
        'range-separator': '至',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  },
  computed: {
    attrs () {
      const { isRange } = this.$attrs
      // 设置默认范围格式
      if (isRange) {
        return {
          ...this.dateTimeConfig,
          ...this.$attrs
        }
      }
      return {
        'value-format': 'HH:mm:ss',
        clearable: true,
        ...this.$attrs
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler (val) {
        this.date = val || this.value
        this.handleChange(val)
      }
    }
  },
  methods: {
    handleChange (val) {
      const { isRange } = this.$attrs
      // 范围格式处理-避免clear清除出现null问题，因element没有内置清除清除按钮的回调函数
      if (isRange) {
        if(!val) val = []
        // 拆分字段别名
        if (this.$attrs.isRange && this.dateRangeKeys && this.dateRangeKeys.length) {
          const [start, end] = this.dateRangeKeys
          let [startTime, endTime] = val || []
          this.fcForm.setForm(start, startTime || null)
          this.fcForm.setForm(end, endTime || null)
        }
      }
      this.$emit('change', val)
      this.$emit('input', val)
    }
  }
}
</script>
