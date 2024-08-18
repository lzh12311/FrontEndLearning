<template>
  <div :class="['fc-flex-page', inline ? 'inline' : '', className]">
    <!-- 搜索对齐 -->
    <div v-show="formItems.length" class="fc-flex-page-search">
      <fc-form-search
        ref="searchForm"
        @search="onSearchForm"
        @reset="onResetForm"
        @toggle="onToggle"
        v-model="form"
        v-bind="searchAttrs"
        v-on="searchAttrs"
      >
        <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </fc-form-search>
    </div>
    <div class="fc-flex-page-content" v-if="showFcTable">
      <!-- 判断是否包含左右按钮 -->
      <div v-if="hasOperateSlot(['handleLeft', 'handleRight'])">
          <div class="fc-flex-page-handle">
            <div class="handleLeft">
              <slot name="handleLeft"></slot>
            </div>
            <div class="handleRight">
              <slot name="handleRight"></slot>
            </div>
          </div>
      </div>
      <div v-else>
        <slot name="isCompHandle"></slot>
      </div>
      <div class="fc-flex-page-table">
        <fc-table ref="fcTable" v-loading="tableLoading" v-bind="{...tableAttrs, pageHide, page }" v-on="tableAttrs" :tableColumns="tableColumns">
          <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope" />
          </template>
        </fc-table>
      </div>
      <div class="fc-flex-page-pagination" v-if="!pageHide">
        <el-pagination background v-bind="paginationAttrs" v-on="paginationAttrs"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @description 表格搜索组合组件
*/
// import { debounce } from 'throttle-debounce' // element依赖的已有库
import { Message } from 'element-ui'
import fcFormSearch from  '../../FormSearch'
import fcTable from './table.vue'
import { getConditionsDesc } from './utils/format'
import pageCheck from './mixins/pageCheck'
import pageStatic from './mixins/pageStatic'
import { cloneDeep }  from 'lodash-es'
import formMap from './mixins/formMap'

export default {
  components: {
    fcTable,
    fcFormSearch
  },
  mixins: [pageStatic, pageCheck, formMap],
  name: 'fc-table-search',
  componentName: 'fc-table-search',
  inheritAttrs: false,
  props: {
    showFcTable: {
      type:Boolean,
      default: true
    },
    requestMethod: {
      type: Function,
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
    // 展示多少行
    formLine: {
      type: Number || String,
      default: 1
    },
    // 默认展开收起长度
    formSpan: {
      type: Number || String,
      default: 0
    },
    // 不同屏幕，自定义col布局排列
    formCol: {
      type: Object,
      default: () => ({})
    },
    // 是否包含展开折叠
    isToggle: {
      type: Boolean,
      default: true
    },
    // 整体页面class
    className: {
      type: String,
      default: ''
    },
    // 是否显示搜索查询框
    searchShow: {
      type: Boolean,
      default: true
    },
    // 表头数据
    tableColumns: {
      type: Array,
      default: function () {
        return []
      }
    },
    value: {
      type: Object,
      default: () => ({})
    },
    tableConfig: {
      type: Object,
      default: () => ({})
    },
    paginationConfig: {
      type: Object,
      default: () => ({})
    },
    // 自定义设置 table loading状态
    setLoading: {
      type: Boolean,
      default: true
    },
    // 自动高度
    autoHeight: {
      type: Boolean,
      default: true
    },
    // 是否隐藏分页
    pageHide: {
      type: Boolean,
      default: false
    },
    // 标识是哪个 column 的筛选条件
    columnKey: {
      type: [Number, String],
      default: 'id'
    },
    // 内嵌
    inline: Boolean,
    // 勾选列表
    selectedRows: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    const { paginationConfig: pageConfig } = this.$FcElement || {}
    const page = {...pageConfig, ...this.paginationConfig}
    return {
      form: this.value,
      // 用户操作
      use: {},
      // 恢复
      formTemp: {},
      // 当前页数据
      list: [],
      // 查询类型
      queryType: 0, // 0:首次进入，1:查询，2:重置
      // 分页
      page: {
        current: page['current-page'] || 1,
        size: page['page-size'] || 10,
        total: 0
      },
      // 加载状态
      tableLoading: false,
      // 导出状态
      exportLoading: false,
      searchLoading: false,
      resetLoading: false,
      // 获取element ref
      refsTable: {},
      refsForm: {},
      // 大数据导出枚举对象
      descForm: {},
      descFormStr: '',
      descFormFilterStr: () => {}
    }
  },
  computed: {
    // 搜索属性
    searchAttrs() {
      const { formConfig, formLine, formSpan, isToggle, formCol, formItems, searchLoading, resetLoading } = this
      let item = {}
      // 布局为inline，处理搜索布局调整
      if (this.inline) {
        item.formCol =  Object.assign({lg: 8}, formCol)
        item.formSpan = formSpan || 2
      }
      return {
        formConfig,
        formItems,
        formLine,
        formCol,
        formSpan: isToggle ? formSpan || 3 : formItems.length + 1,
        searchLoading,
        resetLoading,
        ...item,
      }
    },
    // 表格属性
    tableAttrs() {
      const { list, autoHeight, tableConfig, onChangeSelectMultiple } = this
      return {
        ref: 'fcTable',
        data: list,
        border: true,
        size: 'small', // 不生效
        stripe: true,
        style: {width: '100%'},
        autoHeight,
        'selection-change': onChangeSelectMultiple,
        ...tableConfig
      }
    },
    // 分页属性
    paginationAttrs() {
      const { handleSizeChange, handleCurrentChange, page, paginationConfig } = this
      const { paginationConfig: pageConfig } = this.$FcElement || {}
      return {
        'page-sizes': [10, 30, 50, 100],
        'page-size': page.size,
        'layout': 'total, prev, pager, next, sizes',
        'total': page.total,
        'current-page': page.current,
        'size-change': handleSizeChange,
        'current-change': handleCurrentChange,
        ...pageConfig,
        ...paginationConfig
      }
    }
  },
  watch: {
    formItems: {
      handler(val) {
        this.getBigExportDesc(val)
      },
      deep: true
    }
  },
  created() {
    // 监听收到dispatch事件，向本身加入table的refs所有属性
    this.$on('refs.table', (res) => {
      this.$set(this, 'refsTable', res)
    })
    // 监听收到dispatch事件，向本身加入form的refs所有属性
    this.$on('refs.form', (res) => {
      this.$set(this, 'refsForm', res)
    })
    this.getFormInit()
    this.GetRequestData()
  },
  methods: {
    // 获取form初始化
    getFormInit () {
      this.getFormModel()
      // 拷贝form，避免分页同步
      this.use = cloneDeep(this.form)
      this.formTemp = cloneDeep(this.form)
    },
    getBigExportDesc(formItems = this.formItems) {
      const { descForm, descFormStr, descFormFilterStr } =  getConditionsDesc(formItems, {...this.use}) // 更新搜索描述对应值
      this.$set(this, 'descForm', descForm)
      this.$set(this, 'descFormStr', descFormStr)
      this.$set(this, 'descFormFilterStr', descFormFilterStr)
    },
    // 请求方法
    GetRequestData(options = {isRollTop: true}) {
      this.tableLoading = this.setLoading
      const params = { ...this.page, ...this.use }
      this.getBigExportDesc()
      this.$emit('requestMethod', params, (res) => {
        if (typeof res !== 'object') {
          res = {}
        }
        const { data = [], total = 0, message = '', loading = false } = res
        if (message) {
          Message({
            message: `获取失败:${message}`,
            type: 'error'
          })
        }
        // 静态分页
        if (this.tableConfig.isPaging) {
          this.listAll = data || []
          this.pageFilter()
        } else {
          this.list = data || []
        }
        this.page.total = total || 0
        this.tableLoading = loading
        this.searchLoading = loading
        this.resetLoading = loading
        // 是否默认勾选
        this.tableConfig.isCrossCheck && this.isCheckStatus()
        this.$nextTick(() => {
          const domRefs = this.$refs.fcTable
          if (domRefs) {
            // 是否滚动顶部
            options.isRollTop && this.scrollTop()
            // 重渲染
            domRefs.$refs.refTable.doLayout()
            // 更新高度
            domRefs.updateHeight()
          }
        })
      }, { // 额外参数
        queryType: this.queryType // 查询类型
      })
    },
    // 分页请求
    handleCurrentChange(current) {
      this.page.current = current || this.page.current
      if (this.tableConfig.isPaging) {
        this.pageFilter()
        return
      }
      this.GetRequestData()
    },
    // 条数请求
    handleSizeChange(size) {
      this.page.current = 1
      this.page.size = size || this.page.size
      if (this.tableConfig.isPaging) {
        this.pageFilter()
        return
      }
      this.GetRequestData({isRollTop: false})
    },
    onToggle(visible) {
      // 解决重新计算高度自适应
      this.$nextTick(() => {
        this.$refs.fcTable.updateHeight()
      })
    },
    // 查询
    onSearchForm() {
      const search = () => {
        const use = cloneDeep(this.form)
        // 筛选包含日期必填范围-如选择开始日期时，结束日期不能为空或者两边都不能为空
        // isRequired：都不能为空，两者都必填
        // isBothExistOrNot：都可以为空，填之后两者都必填
        const dateRange = this.formItems.filter(d => {
          if(d.comp === 'date' && (d.isRequired || d.isBothExistOrNot) && (d.type === "daterange" || d.type === "datetimerange" || d.type === "monthrange") && !d.hide) {
            const dateVal = use[d.prop] || []
            const [start, end] = dateVal
            if((!start && end) || (start && !end)) {
              return d
            }
            if(d.isRequired && !start && !end) {
              return d
            }
          }
        })
        const datePlaceholder = {
          monthrange: '年份',
          daterange: '日期',
          datetimerange: '时间'
        }
        if(dateRange.length > 0) {
          // 依次校验，避免同时多个提示
          const item = dateRange[0] || {}
          const [start, end] = use[item.prop] || []
          let time = datePlaceholder[item.type]
          let startMessage = `${item.label}的${item['start-placeholder'] || '开始' + time}不能为空`
          let endMessage = `${item.label}的${item['end-placeholder'] || '结束' + time}不能为空`
          let message = ''
          if(!start) message = startMessage
          if(!end) message = endMessage
          // 都为空时提示
          if(item.isRequired && !start && !end) {
            Message({message: item.message || `${item.label}的开始${time}和结束${time}不能为空`, type: 'warning'})
          } else if (message) {
            // 有一个为空时提示
            Message({message, type: 'warning'})
          }
        } else {
          this.queryType = 1
          this.use = use
          this.searchLoading = true
          this.page.current = 1
          this.GetRequestData()
        }
      }
      // 向外暴露自定义事件
      if(typeof this.$listeners.onSearch === 'function'){
        this.$emit('onSearch', this.$refs.searchForm.$refs.fcForm, () => {
          search()
        })
      } else {
        search()
      }
    },
    // 重置
    onResetForm() {
      // 向外暴露自定义事件
      if (typeof this.$listeners.onReset === 'function') {
        this.$emit('onReset', this.$refs.searchForm.$refs.fcForm, (model) => {
          this.setResetForm(model)
        })
      } else {
        this.setResetForm()
      }
    },
    // 自定义重置默认值
    setResetForm(model){
      this.queryType = 2
      this.resetLoading = true
      if(this.formItems.length) {
        if(model && typeof model === 'object') {
          // 部分重置-手动处理优先处理拷贝的form默认值保留
          this.formTemp = {...this.formTemp, ...model}
          // 监听form更新
          Object.entries(this.formTemp).map(d => {
            this.$set(this.form, d[0], d[1])
          })
        } else {
          // 使用element重置所有
          this.$refs.searchForm.$refs.fcForm.resetFields()
        }
      }
      this.use = cloneDeep(this.formTemp)
      this.page.current = 1
      this.GetRequestData()
    },
    // 手动触发刷新-当前、恢复
    onRefresh(current) {
      if (current) {
        this.GetRequestData({isRollTop: false})
      } else {
        this.onResetForm()
      }
    },
    // 滚至顶部
    scrollTop() {
      this.$refs.fcTable.$refs.refTable.bodyWrapper.scrollTop = 0
    },
    // 判断插槽名是否存在
    hasOperateSlot(ars) {
      const item = Object.keys(this.$scopedSlots)
      if (Array.isArray(ars)) {
        return item.some(d => ars.includes(d))
      } else {
        return item.includes(ars)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.fc-flex-page {
  box-sizing: border-box;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  & .fc-flex-page-search{
    height: auto;
    background-color: #fff;
    padding:16px 24px;
    padding-bottom: 0;
    margin-bottom: 16px;
  }
  & .fc-flex-page-content{
    background-color: #fff;
    padding:0 24px;
    & .fc-flex-page-handle{
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      & .handleLeft{
        width:100%;
      }
       & .handleRight{
        width:100%;
        text-align:right
      }
    }
    & .fc-flex-page-table {
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      overflow-y: auto;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    & .fc-flex-page-pagination {
      height: auto;
      margin-bottom: 16px;
      text-align: right;
      .el-pagination {
        height: auto !important;
      }
    }
  }

  &.inline {
    & .fc-flex-page-search{
      padding: 0;
      margin: 0
    }
    & .fc-flex-page-content{
      padding: 0
    }
    & .fc-flex-page-handle{
      margin-top: 0
    }
    & .fc-flex-page-table {
      margin-top: 0
    }
    & .fc-flex-page-pagination {
       margin-bottom: 0
    }
  }
}
</style>
