<template>
  <div class="fc-flex-page-search-aline">
    <el-form v-if="formItemAttrs && formItemAttrs.length > 0" :model="form"  v-bind="formAttrs" v-on="formAttrs">
      <el-row :gutter="24">
        <template v-for="({slotName, slotFlag, hide, ...attrs}, index) in formItemAttrs">
          <el-col v-if="!hide" v-show="!formVisibleLength ? true: index + 1 <= formVisibleLength" :key="index" v-bind="attrs.col">
            <fc-form-item v-if="!slotName" :key="index" v-bind="{size: 'small', ...attrs}" v-on="attrs.events" @keyup.enter.native="attrs.comp === 'input' ? onSearch(): null"></fc-form-item>
            <slot v-if="slotName" :name="slotName" v-bind="{form, attrs}"/>
            <slot v-if="slotFlag && attrs.prop" :name="attrs.prop" v-bind="{form, attrs}"/>
          </el-col>
        </template>
        <el-form-item class="toggle-item" label-width="0">
          <slot name="isCompSearch"></slot>
          <el-button :loading="resetLoading" @click="onReset">重置</el-button>
          <el-button type="primary" :loading="searchLoading" @click="onSearch">查询</el-button>
          <template v-if="formVisibleLength">
            <el-button type="text" @click="onToggle" class="toggle-btn">
              {{ visible ? '展开' : '收起' }}
              <i class="el-icon-arrow-up" :class="{ visible }"/>
            </el-button>
          </template>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'
import fcFormItem from  '../../FormItem'
import emitter from 'element-ui/src/mixins/emitter'
import formMap from '../../TableSearch/src/mixins/formMap'

// 基本搜索
export default {
  name: 'fc-form-search',
  components: {
    fcFormItem
  },
  mixins: [emitter, formMap],
  provide () {
    return {
      fcForm: this
    }
  },
  props: {
    // form控件表
    formItems: {
      type: Array,
      default: () => []
    },
    // 默认展示个数设置，其余隐藏
    formSpan: {
      type: Number || String,
      default: 3
    },
    // 展示多少行
    formLine: {
      type: Number || String,
      default: 1
    },
    // form字段
    value: {
      type: Object,
      default: () => ({})
    },
    formConfig: {
      type: Object,
      default: () => ({})
    },
    searchLoading: {
      type: Boolean,
      default: false
    },
    resetLoading: {
      type: Boolean,
      default: false
    },
    formCol: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      // 读取form字段
      form: this.value || {},
      // 默认长度
      formVisibleLength: 0,
      // 记录原长度
      formAutoLength: 0,
      visible: true,
      // 动态span
      lgSpan: 6,
      // 读取form-描述
      conditionsDescList: [],
      conditionsDesc: {},
      // 日期时间占两格
      dataTimeSpan: 0
    }
  },
  created() {
    if (!this.formItems.length) return
    this.getFormModel()
    this.onResizeLayoutFold()
    // 若外部包含label宽度，则不启用以下适配方法
    const formConfig = this.humpToLine(this.formConfig)
    if (formConfig.hasOwnProperty('label-width')) return
    this.getDomLabelMaxWidth()
  },
  mounted() {
    // 找到组件fc-table-search组件，调用其$emit事件【指哪打哪，任意通信】，参考emitter方法
    this.dispatch('fc-table-search', 'refs.form', [this.conditionsDesc])
  },
  computed: {
    formAttrs () {
      const { formConfig } = this
      return {
        ref: 'fcForm',
        'label-position': 'right',
        'label-width': `${this.labelMaxWidth}px`,
        ...this.humpToLine(formConfig)
      }
    },
    formItemAttrs () {
      const { formItems, lgSpan, formCol, humpToLine } = this
      formItems.map(d => {
        d.col = {lg: lgSpan, md: 12, sm: 24, xs: 24 ,...formCol, ...d.col}
        //若标题不存在时，控件左对齐
        if (!d.label && !d.hide) {
          d.itemAttrs = {
            'label-width': '0px',
            ...humpToLine(d.itemAttrs)
          }
        }
        // 若控件带有时分秒，横占两格
        if (d.type === 'datetimerange' && !d.hide) {
           d.col.lg = lgSpan * 2
           d.col.md = 24 
        }
      })
      return formItems
    }
  },
  methods: {
    // 展开收起
    onToggle() {
      this.visible = !this.visible
      this.formVisibleLength = !this.visible ? this.formItems.length : this.formAutoLength
      this.$emit('toggle', this.visible, this.$refs.fcForm)
    },
    // 收起展开响应布局
    onResizeLayoutFold() {
      let spanLength = this.formItems.length
      const size = (span) => {
        // 范围占两格
        const updateSpan = () => {
          this.formItems.map((d, i) => {
            if(i < span && d.type === 'datetimerange') {
              span = span - 1
            }
          })
        }
        // 因减去了搜索格，需+1，
        if (this.formLine > 1) {
          span = span + 1
          updateSpan()
        } else if(this.dataTimeSpan >= 1) {
          // 日期范围个数
          updateSpan()
        }
        this.formVisibleLength = spanLength > span ? span : 0
      }
      const onResizeLayoutFold = () => {
        this.visible = true
        let width = document.querySelector('html').offsetWidth
        let span = this.formSpan
        if (typeof span === 'number') {
          if (width <= 1680) {
            this.lgSpan = 8
            size((span-1) * this.formLine)
          } else {
            this.lgSpan = 6
            size((span) * this.formLine)
          }
        }
        // 记录原收起长度
        this.formAutoLength = this.formVisibleLength
      }
      onResizeLayoutFold()
    },
    // 查询
    onSearch: debounce(800, true, function () {
      this.$emit('search', this.form, this.$refs.fcForm)
    }),
    // 重置
    onReset: debounce(800, true, function () {
      this.$emit('reset', this.form, this.$refs.fcForm)
    }),
    // 额外字段
    setForm(key, value) {
      this.$set(this.form, key, value)
    },
    // 将json的驼峰key转为为中划线写法
    humpToLine(obj) {
      let targetObj = {}
      Object.keys(obj || {}).forEach((key) => {
        targetObj[key.replace(/([A-Z])/g,"-$1").toLowerCase()] = obj[key]
      })
      return targetObj
    },
  }
}
</script>

<style lang="less" scoped>
.fc-flex-page-search-aline{
  /deep/.el-input__inner,/deep/.el-input,/deep/.el-select,/deep/.el-cascader {
      width: 100%;
  }
  // 统一高度，避免pizaa覆盖
  /deep/.el-form-item__content{
    height: 32px;
  }
  // 左右图标调整 - 优化小屏幕或者label过长导致日期数字文本显示不全
  /deep/.el-date-editor .el-input__inner{
    padding-right: 0;
    padding-left: 24px;
  }
  // 左边日期图标
  /deep/.el-date-editor .el-input__prefix{
    left: 0px;
  }
  /deep/.el-date-editor .el-input__prefix .el-input__icon{
    margin-left:8px;
    width:12px
  }
  // 右边清除图标
  /deep/.el-date-editor .el-input__suffix{
    right: 0px;
  }
  /deep/.el-date-editor .el-input__suffix .el-input__icon{
    margin-right:8px;
    width:12px
  }
  .toggle-item {
    float:right;
    margin-bottom:18px !important;
    margin-right:12px
  }
  .toggle-btn {
    &:hover{
      color: #66b1ff;
    }
    i {
      font-size: 16px;
      transition: all 0.3s ease 0s;
      transform: rotate(0turn);
      &.visible {
        transform: rotate(0.5turn)
      }
    }
  }
}
</style>
