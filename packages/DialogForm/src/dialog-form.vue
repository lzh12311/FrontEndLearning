<template>
  <el-dialog
    v-bind="dialogAttrs"
    v-on="$listeners"
  >
    <!-- 上 -->
    <slot name="top" v-bind="{form, refs: $refs.fcForm}"/>
    <slot name="content">
      <el-form :key="nowKey" :model="form" v-bind="formAttrs" v-on="$listeners">
        <el-row :gutter="24">
          <template v-for="(item, index) in itemTemp">
            <el-col v-if="!item.hide" :span="item.span || 24" :key="index" >
              <!-- 控件 -->
              <fc-form-item v-if="!item.slotName" v-bind="item" v-on="item.events"></fc-form-item>
              <slot :name="item.slotName" v-bind="{form, attrs: item}" v-on="item.events"/>
            </el-col>
          </template>
        </el-row>
      </el-form>
    </slot>
    <!-- 下 -->
    <slot name="bottom" v-bind="{form, refs: $refs.fcForm}"/>
    <!-- 底部按钮 -->
    <div v-if="Object.keys(this.$scopedSlots).join(',').toLowerCase().includes('footer')">
      <div name="footer">
        <slot name="footer" v-bind="{form, refs: $refs.fcForm}"></slot>
      </div>
    </div>
    <div v-else slot="footer" class="fc-dialog-footer">
      <el-button
        type="primary"
        v-if="type !== 'text'"
        @click="getRequestSubmit"
        :loading="submitLoading"
      >
        {{dialogAttrs.buttonText || '保存'}}
      </el-button>
      <el-button @click="onClose">
        取消
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
/**
 * @description 表单弹窗组合
*/
import fcFormItem from  '../../FormItem'
import formMap from '../../TableSearch/src/mixins/formMap'
import { cloneDeep }  from 'lodash-es'

export default {
  name: 'fc-dialog-form',
  inheritAttrs: false,
  components: {
    fcFormItem
  },
  provide () {
    return {
      fcForm: this
    }
  },
  mixins: [formMap],
  props: {
    // form字段
    value: {
      type: Object,
      default: () => ({})
    },
    defaultForm: {
      type: Object,
      default: () => ({})
    },
    dialogConfig: {
      type: Object,
      default: () => ({})
    },
    formItems: {
      type: Array,
      default: () => []
    },
    formConfig: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      form: this.value,
      visible: false,
      nowKey: Date.now(),
      type: 'add', // add:新增/edit:编辑/test:文本
      submitLoading: false,
      // 恢复
      formTemp: {},
      // 表单默认布局
      formAlignConfig: {
        'label-position': 'right',
        'label-suffix': '：'
      }
    }
  },
  created() {
    // 拷贝默认重置数据
    this.formTemp = cloneDeep(this.value)
  },
  computed: {
    // dialog优先外部配置
    dialogAttrs () {
      return {
        'close-on-click-modal': false,
        'close-on-press-escape': false,
        'destroy-on-close': true,
        width: '500px',
        visible: this.visible,
        class: 'fc-dialog-form',
        'before-close': this.onClose,
        ...this.$attrs,
        ...this.dialogConfig
      }
    },
    // form优先外部配置
    formAttrs() {
      let item = {
        ref: 'fcForm',
        ...this.formAlignConfig,
        'label-width': `${this.labelMaxWidth+26}px`,
        class: this.type,
        ...this.formConfig
      }
      if (this.rules) {
        item.rules = this.rules
      }
      return item
    },
    // 处理表单展示
    itemTemp() {
      return this.formItems.reduce((d, c) => {
        const { comp, required, ...s } = c
        if (this.type === 'text') {
          d.push(s)
        } else {
          d.push(c)
        }
        return d
      }, [])
    }
  },
  methods: {
    // 弹出
    onOpenDialog({form = {}, type} = {}) {
      this.visible = true
      this.type = type
      this.formUpdate(form)
      this.nowKey = Date.now()
      // 更新适配label长度
      this.$nextTick(() => {
        if (!this.formItems.length) return
        this.getDomLabelMaxWidth()
      })
    },
    // 二次重处理
    formUpdate(form) {
      this.form = cloneDeep(form) || {}
      this.getFormModel()
    },
    // 保存
    async getRequestSubmit () {
      try {
        const res = await this.onSubmit()
        this.submitLoading = true
        this.$emit('submit', res, () => {
          this.submitLoading = false
          this.onClose()
        }, () => {
          this.submitLoading = false
        })
      } catch (e) {
      }
    },
    // 验证
    async onSubmit () {
      try {
        await this.$refs.fcForm.validate()
        return Promise.resolve({ ...this.form })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 取消
    async onClose() {
      this.submitLoading = false
      this.visible = false
      this.$emit('close', { refs: this.$refs.fcForm })
      this.$nextTick(() => {
        setTimeout(() => {
          this.formUpdate(cloneDeep(this.formTemp))
          this.$refs.fcForm.clearValidate()
          this.$refs.fcForm.resetFields()
        }, 500)
      })
    },
    // 额外字段
    setForm(key, value) {
      this.$set(this.form, key, value)
    }
  }
}
</script>

<style lang="less" scoped>
.fc-dialog-form{
  /deep/.el-input__inner,/deep/.el-input,/deep/.el-select {
      width: 100%;
  }
  /deep/.el-form.text {
    .el-form-item__label,
    .el-form-item__content {
      line-height: 22px !important;
    }
  }
  /deep/.el-form .el-row .el-col:last-child .el-form-item{
    margin-bottom: 0 !important;
  }
}
</style>
