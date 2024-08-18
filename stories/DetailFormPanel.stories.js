import FcDetailFormPanel from '../packages/DetailFormPanel';

export default {
  title: 'Example/DetailFormPanel',
  component: FcDetailFormPanel
};

export const detailPanel = () => ({
  components: { FcDetailFormPanel },
  template: `<fc-detail-form-panel v-bind="$props" :formConfig="formConfig">
    <template #testInput>
      <el-input v-model="form.a" />
    </template>
  </fc-detail-form-panel>`,
  data() {
    return {
      form: {
        a: ''
      },
      rules: {
        a: { required: true, message: '礼品名称必填', trigger: ['change'] }
      }
    }
  },
  computed: {
    formConfig() {
      return {
        model: this.form,
        rules: this.rules,
        ref: 'form'
      }
    }
  }
})
