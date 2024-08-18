<template>
  <div>
    <h3>fc-detail-form 中 table 支持 slot</h3>
    <fc-detail-form :configProp="config" :detailData="detailData">
      <!-- 商品名称 - slot实现 -->
      <template #goodsName="{ row }">
        <div>
          <span class="base-icon" :class="tagClass(row.productSource)">
            {{ returnNormalTags('goods', row.productSource) }}
          </span>
          <span>{{ row.name }}</span>
        </div>
      </template>
    </fc-detail-form>
  </div>
</template>

<script>
import FcDetailForm from '../packages/DetailForm'

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
                      slotName: 'goodsName'
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
  },
  methods: {
    tagClass (productSource) {
      return productSource === 'jv' ? 'fuchuang-icon' : 'waicai-icon'
    },
    returnNormalTags (type, params) {
      if (type === 'goods') {
        return params === 'jv' ? '孚创' : '外采'
      } else {
        return params === 1 ? '已上线' : '未上线'
      }
    }
  }
}
</script>
