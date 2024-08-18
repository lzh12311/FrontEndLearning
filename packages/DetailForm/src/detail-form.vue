<template>
  <div class="fc-detail-form">
    <template v-for="(item, index) in configProp">
      <fc-detail-form-panel
        v-if="!expOrFn(item.hide, detailData)"
        :key="index"
        v-bind="item"
        :detailData="detailData">
          <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
          <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
      </fc-detail-form-panel>
      <slot name="bottom-content"></slot>
    </template>

    <!-- 请勿动此处默认按钮 -->
    <footer class="fc-footer">
      <slot name="footer">
        <el-button @click="onClose">关闭</el-button>
      </slot>
    </footer>
  </div>
</template>
<script>
import FcDetailFormPanel from '../../DetailFormPanel'

export default {
  name: 'fc-detail-form',
  components: {
    FcDetailFormPanel
  },
  props: {
    detailData: {
      type: Object,
      default: () => {
        return {
          a: 1,
          b: 2,
          c: 0,
          d: 4,
          e: 5,
          g: [{a: 1, b: 2, c: 3, d: null}]
        }
      }
    },
    configProp: {
      type: Array,
      default: () => {
        return [
          {
            title: '资源申请信息1',
            isCanFold: true,
            isShowAlet: false,
            hide: false,
            // formConfig: {
            //   labelWidth: '90px'
            // }, // form配置
            content: [
              {
                contentTitle: '基础信息',
                hide: false,
                isShowAlet: true,
                aletTitle: '经过洽谈，客户承诺自签约起，合约期内销售以下商品与对应数量：',
                ui: [
                  {
                    label: '强调展示',
                    // formItemConfig: { // 同原声属性
                    //   label: '配置里设置label'
                    // },
                    key: 'a.aa',
                    colSpan: 8, // 不传，则默认为8
                    render: 'div', // 不传，则默认展示
                    // 同原生属性
                    renderConfig: {
                      class: 'blue'
                    },
                    // 可绑定事件
                    renderEvent: {}
                  },
                  {
                    label: '普通展示',
                    key: 'b',
                    colSpan: 8,
                    formatter: (value) => value + '常规formatter处理',
                    hide: false // 控制显隐
                  },
                  {
                    label: '插槽展示',
                    key: 'c',
                    colSpan: 8,
                    render: 'div'
                  },
                  {
                    label: 'slot派发',
                    slotName: 'slotTest'
                  }
                ]
              }
            ]
          },
          {
            title: '资源申请信息2',
            isCanFold: false,
            isShowAlet: true,
            aletTitle: '经过洽谈，客户承诺自签约起，合约期内销售以下商品与对应数量：',
            content: [
              {
                contentTitle: '',
                ui: [
                  {
                    key: 'g',
                    colSpan: 24,
                    render: 'el-table',
                    tableConfig: {
                      showSummary: true,
                      stripe: true
                      // data: [] // 支持外部传入data,传入时，将不受detailData数据的影响
                    },
                    columnConfig: [{
                      prop: 'a',
                      label: '表头1',
                      showOverflowTooltip: false, // 默认为true
                      headerRender: {
                        template: `<div>自定义表头
                          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <i class="el-icon-info"></i>
                          </el-tooltip></div>
                        `
                      }
                    }, {
                      prop: 'b',
                      label: '表头2',
                      formatter: (row) => row.b + '使用formatter'
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
              },
              {
                ui: [{
                  colSpan: 24,
                  render: 'fcRecords'
                }]
              }
            ]
          }
        ]
      }
    }
  },
  watch: {
    detailData(val) {},
    configProp(val) {}
  },
  methods: {
    expOrFn(expOrFn) {
      let args = Array.prototype.slice.call(arguments, 1)
      return typeof expOrFn === 'function' ? expOrFn.apply(this, args) : expOrFn
    },
    onClose() {
      window.close()
    }
  }
}
</script>

<style scoped lang="less">
.fc-detail-form {
  padding-bottom: 124px;
  .fc-footer {
    position: fixed;
    z-index: 20;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background: #ffffff;
    padding: 10px 10px 10px 200px;
    border-top: 1px solid #DCDEE2;
  }
}
</style>
