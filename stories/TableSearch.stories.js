import FcTableSearch from '../packages/TableSearch';
import { Button as elButton } from 'element-ui'

export default {
  title: 'Example/FcTableSearch',
  component: FcTableSearch
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FcTableSearch, elButton },
  template: `<div style="padding:20px"><fc-table-search v-bind="$props" @requestMethod="requestMethod" ref="table">
  <template #ceshi>324324</template>
    <template #handleLeft>
    <el-button @click="() => $refs.table.onRefresh()">通过ref调用onRefresh()重置刷新</el-button>
    <el-button @click="() => $refs.table.onRefresh(true)">通过ref调用onRefresh(true)当前刷新</el-button>
    </template>
    <template #formName='{form, attrs}'>
      <el-form-item v-bind="attrs">
       <el-input v-model="form.xxxx"/>
      </el-form-item>
    </template>
    <template #action="{row}">
      <el-button type="text" sytle="margin-right:10px">测试1</el-button>
      <el-button type="text" sytle="margin-right:10px">测试</el-button>
      <el-button>测试</el-button>
      <el-button type="text" disabled @click="$props.onClickButtons" sytle="margin-right:10px">点击</el-button>
      <el-button type="text" sytle="margin-right:10px">测试2</el-button>
      <el-button type="text">测试4</el-button>
    </template>
  </fc-table-search></div>`,
});
export const tableColumns = Template.bind({})

tableColumns.args = {
  requestMethod: ({ current, size, total, ...formData }, callack, options) => {
    console.log('查询结果：', { current, size, total, ...formData }, 'options', options)
    setTimeout(() => {
      callack({
        data: Array(10).fill({tagStatus: 1, date: '2020-08-10', status: '9992342.448423', desc: '业务类型描述文本，业务类型描述文本，业务类型描述文本，业务类型描述文本，'}),
        total: 100
      })
    }, 1000)
  },
  // switch: 2,
  // autoHeight: true,
  value: { resultDate:['2021-10-12 12:22:34', '2021-10-26 12:22:34'],desc: { aa: { bb: { cc: '111' } } }, result: { code: '' }, resultType: null},
  paginationConfig: {
    'page-size': 30,
    pageSizes: [10, 20, 30, 40, 50, 100]
  },
  // inline: true,
  // className: 'pageContent',
  tableConfig: {
    isPaging: false, // 是否启用静态分页
    isCrossCheck: true, // 是否启用跨页勾选
    'show-summary': true,
    'summary-method': () => {
      return ['', '合计']
    }
  },
  // isToggle: false,
  // formCol: {lg: 2},
  // formSpan: 7,
  // formLine: 2,
  onSearch:(form,callack)=>{
    form.validate(valid => {
      if(!valid) return 
      callack()
    })
    // form.model.result = 2222
    callack()
  },
  onClickButtons() {
    alert('点到了')
  },
  // formSpan: 6,
  formItems: [
    { comp: 'date', prop: 'date', label: 'MAP日期范围', isBothExistOrNot: true, type: 'monthrange', 'start-placeholder': '222', 'end-placeholder': '1111' },
    { comp: 'input', prop: 'result.code' },
    { comp: 'input', prop: 'result.code', label: '对账结果' },
    { comp: 'date', prop: 'resultDate', label: '对账日期', type: 'datetimerange', isRequired: true, itemAttrs: {labelWidth: ''}, dateRangeKeys:['starts','ends'] },
    { comp: 'input', prop: 'desc.aa.bb.cc', label: '业务描述', clearable: false },
    { comp: 'cascader', prop: 'cascader', label: '城市地区' },
    { comp: 'select', prop: 'resultType', label: '对账类型', placeholder: '自定义', options: [{label: '对账差异', value: 1}, {label: '对账1', value: 4}] }
  ],
  onReset: 'this.$refs.table.onRefresh()',
  tableColumns: [
    { type: 'selection'},
    { label: '对账结果', slotName: 'ceshi', width: 150 },
    // { prop: 'date', label: '对账日期', formatter: 'date', width: 150 },
    // { prop: 'status', label: '对账金额', formatter: 'money', width: 150 },
    { prop: 'tagStatus', label: '标签属性', options: [{code: 1, name: '标签一'}], optionsAttrs: 'name,code'},
    { prop: 'desc', label: '对账描述', minWidth: 150, formatter: () => '213213业务/类型描述文本，业务类型/描述文本，业务类型描述文本，业务类型描述文本，' },
    {
      label: '操作',
      fixed: 'right',
      width: 140,
      slotName: 'action',
      autoAction: true
      // render: (h, {row}) => {
      //   return <div>
      //     <el-button size="mini" type="text">详情</el-button>
      //   </div>
      // }
    }
  ]
}
