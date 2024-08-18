export default {
  data() {
    return {
      // label默认宽度
      labelMaxWidth: 0
    }
  },
  methods: {
    // 遍历生成form表单字段
    getFormModel () {
      this.formItems.forEach((row) => {
        // 判断是否定义字段
        if (row.prop && row.prop.indexOf('.') > -1) {
          const arr = row.prop.split('.')
          let form = this.form
          for(let i = 0; i < arr.length; i++) {
            if (i < arr.length -1) {
              if (!form[arr[i]]) {
                this.$set(form, arr[i], {})
              }
            } else {
              if (!form[arr[i]]) {
                this.$set(form, arr[i], '')
              }
            }
            form = form[arr[i]]
          }
        } else if (row.prop && typeof this.form[row.prop] === 'undefined') {
          if (row.type === 'daterange' || row.type === 'datetimerange' || row.type === 'monthrange' || row.multiple) {
            this.$set(this.form, row.prop, [])
          } else {
            this.$set(this.form, row.prop, '')
          }
        }
        // 默认处理日期解构别名
        if (row.dateRangeKeys && row.dateRangeKeys.length) {
          const [start, end] = row.dateRangeKeys
          const [startTime, endTime] = this.form[row.prop] || []
          this.$set(this.form, start, startTime || null)
          this.$set(this.form, end, endTime || null)
        }
        if (row.type === 'datetimerange' && !row.hide) {
          this.dataTimeSpan = this.dataTimeSpan + 1
        }
      })
    },
    // 获取字体宽度
    getCanvasFontWidth(text, font) {
      const canvas = document.createElement("canvas")
      let context = canvas.getContext("2d")
      if (font) context.font = font
      var metrics = context.measureText(text)
      return metrics.width || 0
    },
    // 获取label实际宽度
    getDomLabelMaxWidth () {
      const item = this.formItems.map(d => {
        d.labelLength = d.label && !d.hide ? d.label.length : 0
        return d
      })
      const labelFindMax = item.reduce((p, v) => p.labelLength < v.labelLength ? v : p)
      this.$nextTick(() => {
        const dom = this.$refs.fcForm.$el
        const labelList = dom.querySelectorAll('.el-form-item__label')
        if (!labelList.length) return
        const style = document.body.currentStyle || document.defaultView.getComputedStyle(labelList[0], '')
        const { fontWeight, fontSize, fontFamily, paddingRight }  = style || {}
        const labelPaddingRight = paddingRight ? Number(paddingRight.replace('px','')) : 0
        const labelStyleWidth = this.getCanvasFontWidth(labelFindMax.label || '', `${fontWeight} ${fontSize} ${fontFamily}`) + labelPaddingRight
        this.labelMaxWidth = labelFindMax.label ?  labelStyleWidth : 0
      })
    },
  }
}