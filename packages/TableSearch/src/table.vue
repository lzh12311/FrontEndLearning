<template>
  <el-table
    :data="data"
    v-loading="loading"
    class="fc-table"
    style="width:100%"
    ref="refTable"
    v-bind="attrs"
    v-on="$listeners"
  >
    <!-- 序号 -->
    <el-table-column v-if="isNumber" label="序号" width="70px">
        <template slot-scope="scope">
            {{Number(scope.$index) + 1 + (page.current - 1) * page.size}}
        </template>
    </el-table-column>
    <!--region 选择框-->
    <el-table-column type="selection" width="55" v-if="isSelection"></el-table-column>
    <template v-for="(item, key) in tableColumns">
      <el-table-column v-if="!item.hide" :key="key" v-bind="{ showOverflowTooltip: isShowTip(item), ...item }" :prop="item.prop" :formatter="(row, column, cellValue, index) => formatCell(row, column, cellValue, index, item)">
        <!-- 自定义表头标题 -->
        <template v-if="item.slotHeader">
          <template slot="header" >
            <slot :name="item.slotHeader"></slot>
          </template>
        </template>
        <!-- 自定义component定义 -->
        <template v-if="Object.prototype.toString.call(item.render) === '[object Object]'" v-slot="scope">
          <component :key="key" :is="item.render" :scope="scope"></component>
        </template>
        <template v-else-if="Object.prototype.toString.call(item.render) === '[object Function]'" v-slot="scope">
          <!-- 自定义render -->
          <ex-slot :render="item.render" :row="scope.row" :index="scope.$index" :column="item" />
        </template>
        <!-- 自定义操作栏 -->
        <template v-else-if="item.autoAction && item.slotName == 'action'" v-slot="scope">
          <fc-table-column-action :key="actionKey" :column="item">
            <slot name="action" v-bind="scope"></slot>
          </fc-table-column-action>
        </template>
        <!-- 自定义slot -->
        <template v-else-if="item.slotName"  v-slot="scope">
          <slot :name="item.slotName" v-bind="scope"></slot>
        </template>
         <!-- 使用prop作为slot名 -->
        <template v-else-if="item.slotFlag && item.prop"  v-slot="scope">
          <slot :name="item.prop" v-bind="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <!-- 强制覆盖表头自定义，支持多级表头 -->
    <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </el-table>
</template>

<script type="jsx">
/**
 * @description 基础表格组件
*/
import { formatDate } from 'element-ui/lib/utils/date-util'
import { throttle } from 'throttle-debounce';
import Big from 'big.js'
import { currency } from './utils/format'
import emitter from 'element-ui/src/mixins/emitter'
import fcTableColumnAction from './table-column-action.vue'

export default {
  name: 'fc-table',
  mixins: [emitter],
  components: {
    fcTableColumnAction,
    // 自定义columnns内容的组件
    exSlot: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, data) => {
        const params = {
          row: data.props.row,
          index: data.props.index
        }
        if (data.props.column) params.column = data.props.column
        return data.props.render(h, params)
      }
    }
  },
  props: {
    // 表格数据
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表头数据
    tableColumns: {
      type: Array,
      default: () => {
        return []
      }
    },
    // loading效果
    loading: {
      type: Boolean,
      default: false
    },
    // 是否显示序号
    isNumber: {
      type: Boolean,
      default: false
    },
    // 是否显示选择框
    isSelection: {
      type: Boolean,
      default: false
    },
    // 自动高度
    autoHeight: Boolean,
    bottomOffset: {
      type: Number,
      default: 77
    }
  },
  data() {
    return {
      // 是否开启虚拟列表
      visibleDom: false,
      startIndex: 0,
      endIndex: 21,
      startOffset: 20, // 偏移量-行数
      paddingTop: 0,
      page: {},
      maxHeight: 200, //最大高度
      actionKey: Date.now()
    }
  },
  computed: {
    attrs() {
      const attrs = this.$attrs
      if (this.autoHeight) {
        attrs['max-height'] = this.maxHeight
      }
      const { tableConfig } = this.$FcElement || {}
      return {
        ...tableConfig,
        ...attrs
      }
    }
  },
  created() { },
  mounted() {
    // 找到组件fc-table-search组件，调用其$emit事件【指哪打哪，任意通信】，参考emitter方法
    this.dispatch('fc-table-search', 'refs.table', [this.$refs.refTable])
    this.updateHeight()
    this.page = this.$attrs.page || {}
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setHeight)
  },
  methods: {
    updateHeight () {
      this.$nextTick(() => {
        if (this.autoHeight) {
          window.addEventListener('resize', this.setHeight)
          this.setHeight()
        }
        // 更新操作栏
        this.actionKey = Date.now()
      })
    },
    // 是否展示tips
    isShowTip(item) {
      return Boolean(item.prop)
    },
    // 格式化
    formatCell (row, column, cellValue, index, item) {
      const { formatter, enumeration, enumerationTag, options, optionsAttrs } = item || {}
      if (formatter || enumeration || enumerationTag || options) {
        // 定义格式类型
        if (Object.is(typeof formatter, 'string')) {
          switch (formatter.toLowerCase()) {
            // 日期
            case 'date':
              return formatDate(cellValue, 'yyyy-MM-dd')
            // 日期+时分秒
            case 'datetime':
              return formatDate(cellValue, 'yyyy-MM-dd HH:mm:ss')
            // 时分秒
            case 'time':
              return formatDate(cellValue, 'HH:mm:ss')
            // 金额千分位并保留两位小数
            case 'money':
              return currency(Big(cellValue || 0).toFixed(2))
            default :
              return cellValue
          }
        }
        // 定义日期文字，如yyyy年MM月dd日--2020年12月12日
        // formatter:{type:'date', content: 'yyyy年MM月dd日'}
        if (Object.is(typeof formatter, 'object') && formatter.type && formatter.type === 'date') {
          return formatDate(cellValue, formatter.content)
        }
        // 枚举对象，如enumeration：{ 1:xxx, 2:xxxx }
        if (enumeration && enumeration[cellValue]) {
          // 枚举标签颜色
          if (enumerationTag) {
            return <el-tag type={enumerationTag[cellValue]} effect="plain" size="mini">{enumeration[cellValue]}</el-tag>
          }
          return enumeration[cellValue]
        }
        // 枚举数组转换
        if (options && Array.isArray(options)) {
          let optionsMap = options
          // 声明属性名
          if (optionsAttrs) {
            const [label, value] = optionsAttrs.split(',')
            optionsMap.map((item) => {
              item.label = item[label]
              item.value = item[value]
            })
          }
          const obj = optionsMap.find(d => String(d.value) === String(cellValue)) || {}
          return obj.label || cellValue
        }
        // 自定义格式
        if (Object.is(typeof formatter, 'function')) {
          return formatter({ row, column, cellValue, index })
        }
      }
      return cellValue
    },
    // 自动高度
    setHeight: throttle(300, function(){
      const { pageHide } = this.$attrs || {}
      const $table = this.$refs.refTable
      const bottomOffset = !pageHide ? this.bottomOffset : 32
      if (!$table) return
      // 计算得出列表高度
      const height = window.innerHeight - $table.$el.getBoundingClientRect().top - bottomOffset
      this.maxHeight = height
    })
  }
}
</script>

<style lang="less" scoped>
.fc-table {
  /deep/.el-table__body-wrapper .el-table__row td .cell:empty:before{
    content: "--";
    user-select: none;
  }
}
</style>
