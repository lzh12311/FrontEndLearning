import FcRecords from '../packages/Records';

export default {
  title: 'Example/FcRecords',
  component: FcRecords
};

export const records = () => ({
  components: { FcRecords },
  template: '<fc-records v-bind="$props" />'
})
