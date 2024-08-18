import FcTabs from '../packages/Tabs';
import FcTable from '../packages/TableSearch'
export default {
  title: 'Example/FcTabs',
  component: {FcTabs, FcTable}
};
export const Template = () => ({
  components: { FcTabs },
  template: `<fc-tabs v-bind="$props" :tabsItems="[{
    label: '选项一2',
    name: 'a'
  }, {
    label: '选项二',
    name: 'b'
  }]">
  <template #a>
  <FcTable/>
  </template>
  <template #b>
  <div>b</div>
  </template>
  </fc-tabs>`,
});
export const tabs = Template.bind({})

tabs.args = {}