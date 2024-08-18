<template>
  <el-form-item :label="label" :prop="prop" v-bind="itemAttrs">
    <template v-if="comp">
      <component
      :is="isComp"
      :ref="prop"
      v-model="form[lastProp]"
      :placeholder="placeholder"
      v-on="$listeners"
      v-bind="compAttrs"
    >
     <slot/>
    </component>
    </template>
    <template v-else>
      <span>{{form[lastProp] || '--'}}</span>
    </template>
  </el-form-item>
</template>

<script>
/**
 * @description 策略控件
*/
import fcSelect from '../../Select'
import fcDatePicker from '../../DatePicker'
import fcTimePicker from '../../TimePicker'
import fcSelectCascader from '../../SelectCascader'

export default {
  name: 'fc-form-item',
  components: {
    fcSelect,
    fcSelectCascader,
    fcDatePicker,
    fcTimePicker
  },
  inject: ['fcForm'],
  props: {
    comp: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: null
    },
    rules: {
      type: [Array, Object],
      default: null
    }
  },
  computed: {
    isComp () {
      const typeComp = this.comp
      if (!typeComp && Object.is(typeof typeComp, 'string')) return
      return {
        input: 'elInput',
        select: 'fcSelect',
        radio: 'elRadio',
        checkbox: 'elCheckbox',
        date: 'fcDatePicker',
        time: 'fcTimePicker',
        switch: 'elSwitch',
        cascader: 'fcSelectCascader'
      }[typeComp] || typeComp
    },
    compAttrs() {
      const typeComp = this.comp
      let item = {}
      // 对input输入框默认带清除属性
      if (typeComp === 'input') {
        item.clearable = true
      }
      return {
        ...item,
        ...this.$attrs
      }
    },
    lastProp() {
      if (this.prop.indexOf('.') > -1) {
        const arr = this.prop.split('.')
        return arr[arr.length - 1]
      } else {
        return this.prop
      }
    },
    // 跨级访问祖先form
    form () {
      let fcForm = this.fcForm.form
      if (this.prop.indexOf('.') > -1) {
        const arr = this.prop.split('.')
        for(let i = 0; i < arr.length; i++) {
          if (i < arr.length -1) {
            fcForm = fcForm[arr[i]]
          } else {
            return fcForm
          }
        }
      } else {
        return fcForm
      }
    },
    itemAttrs() {
      let item = {
        ...this.$attrs.itemAttrs
      }
      if (this.required) {
        item.rules = this.calRules
      }
      return item
    },
    // 描述
    placeholder () {
      let text = ''
      const { comp, label } = this
      const { type, placeholder } = this.$attrs || {}
      
      if (comp === 'input') {
        if (type === 'textarea') {
          text = '请填写'
        } else {
          text = '请输入'
        }
      } else {
        text = '请选择'
      }
      return placeholder || `${text}${label}`
    },
    // 默认校验
    calRules () {
      let message = ''
      const { comp, required = false, label, rules } = this
      const { type } = this.$attrs
      if (comp === 'input') {
        if (type === 'textarea') {
          message = '请填写'
        } else {
          message = '请输入'
        }
      } else {
        message = '请选择'
      }
      return [
        {required, message: `${message}${label}`},
        ...rules || []
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
