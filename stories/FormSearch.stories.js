import FcFormSearch from '../packages/FormSearch';
import { Button as elButton } from 'element-ui'

export default {
  title: 'Example/FcFormSearch',
  component: FcFormSearch
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FcFormSearch, elButton },
  template: `<fc-form-search v-bind="$props" v-model="formData" @search="search" @reset="reset" ref="fcForm"></fc-form-search>`,
});
export const formConfig = Template.bind({})

formConfig.args = {
  formData: {
    result: 11
  },
  formConfig: {
    // labelWidth: '200px'
  },
  searchLoading: false,
  resetLoading: false,
  formItems: [
    { comp: 'date', prop: 'date', label: '对账日期', type: 'daterange' },
    { comp: 'input', prop: 'result', label: '对账结果' },
    { comp: 'input', prop: 'desc', label: '业务描述' },
    { comp: 'select', prop: 'resultType', label: '对账类型', options: [{label: '对账差异', value: 1}] }
  ],
  search: (val, refs) => {
    console.log('查询结果：', val, refs)
  },
  reset: (val, refs) => {
    refs.resetFields()
    console.log('重置结果：', val, refs)
  }
}
