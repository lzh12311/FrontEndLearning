import FcDialogForm from '../packages/DialogForm';

export default {
  title: 'Example/FcDialogForm',
  component: FcDialogForm
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FcDialogForm },
  data() {
    return {
      title: '新建',
      formData: { date: [] },
      userHide: false
    }
  },
  template: `<div>
    <el-button @click="onAdd" type="primary">新建</el-button>
    <el-button type="success" @click="onEdit">编辑</el-button>
    <el-button @click="onView">查看</el-button>
    <fc-dialog-form v-bind="$props" v-model="formData" @close="onClose" :title="title" @submit="submit" ref="dialog">
      <template #textContent="{form}">
       <div style="margin-bottom:16px">我是文本，链接，自定义位置，我是文本，链接，自定义位置</div>
      </template>
    </fc-dialog-form>
  </div>`,
  methods: {
    onAdd() {
      this.title = '新建'
      this.$refs.dialog.onOpenDialog({type: 'add', form: {name1: 111}})
    },
    onEdit() {
      this.title = '编辑'
      this.$refs.dialog.onOpenDialog({form: {name1: 333}, type: 'edit'})
    },
    onView() {
      this.title = '查看'
      this.$refs.dialog.onOpenDialog({form: {name1: '文本1', name2: '文本2', name3: '文本3'}, type: 'text'})
    },
    onClose() {
      this.visible = false
    }
  },
})

export const dialogForm = Template.bind({})

dialogForm.args = {
  submit: (value) => {
    console.log('获取表单数据：', value)
  },
  formConfig: {
    // 'label-width': '160px',
    // rules: {
    //   name1: [{required: true}]
    // },
  },
  dialogConfig: {
    width: '700px'
  },
  defaultForm: {
    name2: '222'
  },
  formItems: [
    { comp: 'input', label: '账户账号', prop: 'name1' },
    { comp: 'input', prop: 'desc.aa.bb.cc', label: '业务描述' },
    { comp: 'input', label: '账户名称', prop: 'name2' },
    { comp: 'input', label: '账户银行', prop: 'name3', span: 12, required: true },
    { comp: 'input', label: '账户账号', prop: 'name4', span: 12, required: true },
    { slotName: 'textContent' },
    { comp: 'input', type: 'textarea', label: '备注', prop: 'name5', required: true }
  ]
}