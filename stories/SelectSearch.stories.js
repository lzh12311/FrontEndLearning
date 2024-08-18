import FcSelect from '../packages/Select';

export default {
  title: 'Example/FcSelectSearch',
  component: FcSelect
};
let listData =  []

Array(10000).fill({label: '门店名称', value: '0'}).map((d, i) => {
  listData.push({
    label:`门店名称${i}`,
    value: i + ''
  })
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      listData
    }
  },
  components: { FcSelect },
  template: `<div>
  <p>该控件支持limt分页加载【一次全部数据】</p>
  <p>场景：解决页面切换，弹窗卡顿【原因几千条条数据渲染卡顿问题】</p>
  <br/>
  <fc-select v-bind="$props" :options="listData" ref="fcSelect">
  </fc-select>
  <br/><br/>
  <p>该控件支持异步加载【和接口配合】，后期正在实现</p>

  </div>`,
});
export const formConfig = Template.bind({})


formConfig.args = {
  label: '异步搜索/静态搜索',
  value: '',
  includeAll: false,
  filterable: true,
  clearable: true,
  //   options: listData,
  limit: 100
}
