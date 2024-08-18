<template>
  <div>
    <ul>
      <li>render 配置提供， template 的字符串拼接</li>
    </ul>
    <div>
      此方式最不推荐
      <div>原因：</div>
      <ul>
        <li>代码无法获得编辑器的语法提示纠偏</li>
        <li>
          eslint 校验, packages 中的 script 脚本 eslint --fix 将无法起作用
        </li>
        <li>可读性</li>
        <li>维护性偏差</li>
      </ul>
    </div>
    <fc-detail-form :configProp="config" :detailData="detailData">
    </fc-detail-form>
  </div>
</template>

<script>
// 引入包 - 如果全局注册，则无需单独导入
import FcDetailForm from '../packages/DetailForm'

/**
 * 金额保留几位小数
 * @param {Number | String} m 金额
 * @param {Number} digit 保留小数点位数， 默认2位
 * @returns
 */
export const moneyToFixed = (m, digit = 2) => {
  if (Number.isNaN(Number(digit))) digit = 2

  return Number(m || 0).toFixed(digit)
}


// 针对同页面， 多个 table， table外观, 设定相同配置， 唯独就是 key是不同的
// key是用来做数据关联绑定的
const baseTableConfig = (key) => {
  return {
    key,
    render: 'el-table',
    colSpan: 24,
    tableConfig: {
      stripe: true,
      maxHeight: '300px',
      'empty-text': '暂无数据'
    }
  }
}

export default {
  name: 'render-example',
  components: {
    FcDetailForm
  },
  data () {
    return {
      detailData: {},
      config: [
        {
          title: '表格案例-render 写法',
          content: [
            {
              ui: [
                {
                  ...baseTableConfig('goodsInfoList'),
                  columnConfig: [
                    {
                      label: '商品名称',
                      minWidth: 220,
                      // 这里的 render 是fc-detail-form 的配置属性，不是vue的 render方法
                      render: {
                        props: ['row', 'index'],
                        template: `
                          <div>{{row.name}}</div>
                        `
                      }
                    },
                    {
                      prop: 'businessCategoryName',
                      label: '业务分类'
                    },
                    {
                      prop: 'price',
                      label: '单价',
                      align: 'right',
                      formatter: ({ price }) => moneyToFixed(price)
                    },
                    {
                      prop: 'quantity',
                      label: '数量',
                      align: 'right'
                    },
                    {
                      prop: 'unit',
                      label: '单位'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    this.detailData = {
      goodsInfoList: [
        {
          productSource: 'jv',
          name: '孚创商品-机油',
          businessCategoryName: '洗美',
          price: 321,
          quantity: 50,
          unit: '次'
        },
        {
          productSource: 'waicai',
          name: '孚创商品-轮胎',
          businessCategoryName: '工单',
          price: 978,
          quantity: 1,
          unit: '个'
        }
      ]
    }
  }
}
</script>
