<template>
  <el-card shadow="never" v-if="content[0].ui[0]">
    <el-form v-bind="formConfig">
      <div v-if="title" class="card-header">
        <h6>{{title}}</h6>
        <div v-if="isCanFold" class="fold-btn" @click="isFold=!isFold">
          <i v-if="!isFold" class="el-icon-arrow-up"></i>
          <i v-else class="el-icon-arrow-down"></i>
        </div>
      </div>
      <el-collapse-transition>
        <div v-show="!isFold" class="card-content">
          <el-alert
            class="content-alert"
            v-if="isShowAlet"
            :title="aletTitle"
            type="warning"
            :closable="false"
            :style="{
              margin: content[0].ui[0].render==='el-table'?'16px 0 8px': '10px 0'
            }"
            show-icon>
          </el-alert>
          <template v-for="(c, indexC) in content">
            <section
              v-if="!expOrFn(c.hide, detailData)"
              :key="indexC"
              :style="{
                marginTop: !isShowAlet ? '16px':'0px'
              }"
              :class="{
                'content-little-title-empty': !c.contentTitle && content[0].ui[0].render!=='el-table' && indexC===0
              }">
                <div class="content-little-title" v-if="c.contentTitle">{{c.contentTitle}}</div>
                <el-alert
                  class="content-alert"
                  v-if="c.isShowAlet"
                  :title="c.aletTitle"
                  type="warning"
                  :closable="false"
                  :style="{
                    margin: content[0].ui[0].render==='el-table'?'16px 0 8px': '10px 0'
                  }"
                  show-icon>
                </el-alert>
                <el-row :gutter="20">
                  <template v-for="(u, indexU) in c.ui">
                    <el-col
                      :span="u.colSpan || 8"
                      v-if="!expOrFn(u.hide, detailData)"
                      :key="indexU"
                      >
                        <el-form-item
                          v-bind="formItemConfigFormat(u)">
                          <slot :name="u.slotName || 'default'">
                            <!-- 没有传template时，默认展示 -->
                            <template v-if="!u.render">
                              {{transValueByKey(u.key, u) | emptyValue}}
                            </template>
                            <!-- 表格 -->
                            <template v-else-if="u.render==='el-table'">
                              <el-table
                                v-bind="tableConfigFomat(u.tableConfig, u)"
                                v-loading="tableConfigFomat(u.tableConfig, u)['v-loading']"
                                v-virtual="tableConfigFomat(u.tableConfig, u)['v-virtual']"
                                v-on="u.tableEvent"
                              >
                                <template v-for="(column, indexColumn) in u.columnConfig">
                                  <el-table-column
                                    v-if="!expOrFn(column.hide, detailData)"
                                    :key='indexColumn'
                                    v-bind="columnConfigFomat(column)">
                                      <template slot="header">
                                          <template v-if="!column.headerRender">{{column.label}}</template>
                                          <component
                                            v-else
                                            :is="column.headerRender"
                                          >
                                          </component>
                                      </template>
                                      <template slot-scope="{row, $index}">
                                        <template v-if="column.type==='index'">{{$index + 1}}</template>
                                        <!-- table支持 slot -->
                                        <template v-else-if="column.slotName">
                                          <slot :name='column.slotName' :detailData="detailData" :row="row" :index="$index"></slot>
                                        </template>
                                        <template v-else-if="!column.render">{{formatterColumn(column, row)}}</template>
                                        <!-- 支持外部render传入 -->
                                        <component
                                          v-else
                                          :is="column.render"
                                          :detailData="detailData"
                                          :row="row"
                                          :index="$index">
                                        </component>
                                      </template>
                                  </el-table-column>
                                </template>
                              </el-table>
                            </template>
                            <component
                              v-else
                              :is="u.render"
                              :value="transValueByKey(u.key, u)"
                              :detailData="detailData"
                              v-bind="u.renderConfig"
                              v-on="u.renderEvent">
                                <!-- select下拉及其他的，后面再加 -->
                                <template v-if="u.render==='el-alert'"></template>
                                <template v-else>{{transValueByKey(u.key, u) | emptyValue}}</template>
                            </component>
                          </slot>
                        </el-form-item>
                    </el-col>
                  </template>
                </el-row>
            </section>
          </template>
        </div>
      </el-collapse-transition>
    </el-form>
  </el-card>
</template>
<script>
import { formatDate } from 'element-ui/lib/utils/date-util'
import fcRecords from '../../Records'
import Big from 'big.js'

export default {
  name: 'fc-detail-form-panel',
  components: {
    fcRecords
  },
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    isCanFold: {
      type: Boolean,
      default: false
    },
    isShowAlet: {
      type: Boolean,
      default: false
    },
    aletTitle: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => {
        return [{
          contentTitle: '基础信息',
          hide: false,
          // isShowAlet: true,
          // aletTitle: '经过洽谈，客户承诺自签约起，合约期内销售以下商品与对应数量：',
          ui: [
            {
              label: '强调展示',
              key: 'a.aa',
              colSpan: 8, // 不传，则默认为8
              formItemConfig: {
                label: '配置里设置label'
              },
              render: 'div', // 不传，则默认展示
              // 同原生属性
              renderConfig: {
                class: 'blue'
              },
              // 可绑定事件
              renderEvent: {}
              // formatter: (value) => value + '常规formatter处理',
              // hide: false // 控制显隐
              // slotName: 'testInput1'
            },
            {
              label: '普通展示',
              labelWidth: '100',
              key: 'b',
              colSpan: 8,
              formatter: (value) => value + '常规formatter处理',
              hide: false // 控制显隐
            },
            {
              label: '时间格式化测试',
              key: 'f',
              formatter: 'dateTime'
            },
            {
              label: '金额格式化测试',
              key: 'h',
              formatter: 'money'
            },
            {
              label: 'Mock Response',
              key: 'c',
              render: 'div'
            },
            {
              label: '测试slot输入框校验',
              slotName: 'testInput',
              formItemConfig: { // 同原声属性
                prop: 'a'
              }
            },
            {
              key: 'g',
              colSpan: 24,
              render: 'el-table',
              tableConfig: {
                showSummary: true,
                stripe: true
                // data: [] // 支持外部传入data,传入时，将不受detailData数据的影响
              },
              tableEvent: {
                'row-click': (row, column, event) => {
                  console.log('row-click:', row, column, event)
                }
              },
              columnConfig: [{
                prop: 'a',
                label: '表头1',
                formatter: 'money',
                showOverflowTooltip: false // 默认为true
                // headerRender: {
                //   template: `<div>自定义表头
                //     <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                //       <i class="el-icon-info"></i>
                //     </el-tooltip></div>
                //   `
                // }
              }, {
                prop: 'b',
                label: '表头2',
                formatter: (row) => row.d + '使用formatter'
              }, {
                prop: 'e',
                label: '表头2',
                formatter: 'date'
              }, {
                prop: 'c',
                label: '表头3',
                render: {
                  props: ['row', 'index'],
                  template: `
                    <el-button @click="test(row)" type="primary">按钮{{row.c}}</el-button>
                  `,
                  methods: {
                    test(row) {
                      console.log(row)
                    }
                  }
                }
              }, {
                prop: 'd',
                label: '金额',
                align: 'right',
                width: 100,
                minWidth: 90,
                // 以下为新增属性，其余为原生自带属性
                isSummary: true,
                summaryFixed: 2,
                hide: false
              }]
            }
          ]
        }]
      }
    },
    detailData: {
      type: Object,
      default: () => {
        return {
          a: 1,
          b: 2,
          c: '常规formatter处理',
          d: 4,
          e: 5,
          f: new Date().getTime(),
          g: [{a: 0, b: 2, c: 3, d: 4, e: new Date().getTime()}],
          h: '123.124'
        }
      }
    }
  },
  data() {
    return {
      isFold: false
    }
  },
  watch: {
    detailData(val) {}
  },
  methods: {
    // 表格列配置
    columnConfigFomat(columnConfig) {
      const config = {
        align: 'left',
        'show-overflow-tooltip': true,
        ...this.humpToLine(columnConfig)
      }
      if (config.formatter) delete config.formatter
      return config
    },
    // 表格配置
    tableConfigFomat(tableConfig, u) {
      return {
        stripe: true,
        data: this.transValueByKey(u.key, u),
        'summary-method': this.getSummaries,
        ...this.humpToLine(tableConfig)
      }
    },
    formItemConfigFormat(u) {
      // 便捷设置label、labelWidth
      const fastConfig = {
        label: u.label ? `${u.label}:` : '',
        labelWidth: u.labelWidth || u['label-width']
      }
      // 如果formItemConfig里设置了某个属性，则以formItemConfig里的为主
      let targetObj = {}
      if (u.formItemConfig) {
        targetObj = {
          ...this.humpToLine(fastConfig),
          ...this.humpToLine(u.formItemConfig),
          label: u.formItemConfig.label ? `${u.formItemConfig.label}:` : fastConfig.label // 给formItemConfig.label加默认的冒号
        }
      } else {
        targetObj = this.humpToLine(fastConfig)
      }
      // 有labelWidth时，给form-item设置默认class名，同时支持外部传入class
      const hasLabelWithClass = (targetObj['label-width'] || (this.formConfig && this.humpToLine(this.formConfig)['label-width'])) ? 'has-label-width':''
      if (targetObj.class) {
        targetObj.class = `${hasLabelWithClass} ${targetObj.class}`
      } else {
        targetObj.class = hasLabelWithClass
      }
      return targetObj
    },
    // 将json的驼峰key转为为中划线写法
    humpToLine(obj) {
      let targetObj = {}
      Object.keys(obj || {}).forEach((key) => {
        targetObj[key.replace(/([A-Z])/g,"-$1").toLowerCase()] = obj[key]
      })
      return targetObj
    },
    expOrFn(expOrFn) {
      let args = Array.prototype.slice.call(arguments, 1)
      return typeof expOrFn === 'function' ? expOrFn.apply(this, args) : expOrFn
    },
    transValueByKey(key, uiItem) {
      let keyList = (key && key.split('.')) || []
      keyList = keyList.map(key => isNaN(Number(key)) ? key : Number(key))
      let value
      switch (keyList.length) {
        case 1:
          value = this.detailData[keyList[0]]
          break
        case 2:
          value = this.detailData[keyList[0]] && this.detailData[keyList[0]][keyList[1]]
          break
        case 3:
          value = this.detailData[keyList[0]] && this.detailData[keyList[0]][keyList[1]] && this.detailData[keyList[0]][keyList[1]][keyList[2]]
          break
        default:
          value = ''
          break
      }
      // 如果外部formatter传入字符串形式时，则对应进行格式化
      if (Object.is(typeof uiItem.formatter, 'string')) {
        return this.formatterQuick(uiItem.formatter, value)
      } else { // 非字符串则采用外部自定义格式
        return (uiItem.formatter && uiItem.formatter(value, this.detailData)) || value
      }
    },
    // 快捷格式化方式
    formatterQuick(formatter, value) {
      switch (formatter.toLowerCase()) {
        // 日期
        case 'date':
          return formatDate(value, 'yyyy-MM-dd')
        // 日期+时分秒
        case 'datetime':
          return formatDate(value, 'yyyy-MM-dd HH:mm:ss')
        // 时分秒
        case 'time':
          return formatDate(value, 'HH:mm:ss')
        // 金额千分位并保留两位小数
        case 'money':
          return (value || value === 0) ? Big(value).toFixed(2) : this.emptyFormatter(value)
        default :
          return value
      }
    },
    // 表格formatter统一处理
    formatterColumn(column, row) {
      let result
      // formatter不存在时
      if (!column.formatter) return this.emptyFormatter(row[column.prop])
      // 如果外部formatter传入字符串形式时，则对应进行格式化
      if (Object.is(typeof column.formatter, 'string')) {
        result = this.formatterQuick(column.formatter, row[column.prop])
      } else { // 非字符串则采用外部自定义格式
        result = column.formatter(row)
      }
      return this.emptyFormatter(result)
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
        }
        // 需要合计的列
        let countProp = []
        this.content.forEach(b => {
          b.ui.forEach(c => {
            if (c.render === 'el-table') {
              c.columnConfig.forEach(d => {
                if (d.isSummary) {
                  countProp.push({
                    prop: d.prop,
                    toFixed: d.summaryFixed
                  })
                }
              })
            }
          })
        })
        countProp.forEach(i => {
          if (column.property === i.prop) {
            const values = data.map(item => Number(item[column.property]))
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                  return prev + curr
                } else {
                  return prev
                }
              }, 0)
            }
            sums[index] = (sums[index] && Big(sums[index]).toFixed(i.toFixed)) ||
              sums[index] === 0 ? Big(sums[index]).toFixed(i.toFixed) : ''
          }
        })
      })
      return sums
    },
    emptyFormatter(val) {
      return val || (val === 0 ? 0 : '--')
    }
  },
  filters: {
    emptyValue(val) {
      return val || (val === 0 ? 0 : '--')
    }
  },
  directives: {
    // 用法可参考SAAS-DMS
    virtual: {
      bind: function(el, binding) {
        const bodyWrapper = el.querySelector('.el-table__body-wrapper')
        bodyWrapper && bodyWrapper.addEventListener('scroll', function() {
          const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
          // 触底加载下一页
          if (scrollDistance <= 10) {
            typeof binding.value === 'function' && binding.value()
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 16px;
  border-width: 0;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px 0px 0px #e4e7ed inset;
    padding: 12px 24px;
    h6 {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }
    .fold-btn {
      i {
        cursor: pointer;
        border: 2px solid #C0C4CC;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        color: #C0C4CC;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .content-little-title {
    margin: 24px 0 16px;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    height: 16px;
    color: #333;
    padding: 0 8px;
    border-left: 4px solid #1890FF;
  }
  .content-little-title-empty {
    margin-top: 16px;
  }
  .card-content {
    padding: 0 24px;
  }
  .el-row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  /deep/ .el-card__body {
    padding: 0;
  }
  /deep/ .el-alert {
    height: 40px;
    .el-alert__content {
      color: #333333;
    }
  }
  .blue {
    color: #1989FA;
  }
}
.el-card:last-of-type {
  margin-bottom: 0;
}
/deep/ .el-form {
  .el-form-item__label,
  .el-form-item__content {
    line-height: 22px !important;
  }
  .el-form-item__label {
    white-space:nowrap;
  }
  .el-form-item__content {
    word-break: break-all;
    width: 100%;
  }
  .el-form-item {
    display: flex;
    margin-bottom: 16px !important;
  }
  .el-form-item.has-label-width {
    display: inherit;
    .el-form-item__content {
      width: auto;
    }
  }
}
/deep/ .el-table {
  margin: 0 0 10px;
  .cell {
    font-size: 14px;
  }
}
/deep/ .el-pagination {
  margin-top: -10px;
}
</style>
