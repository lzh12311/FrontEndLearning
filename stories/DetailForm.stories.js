import FcDetailFormBasic from '../example/FcDetailFormBasic';
import FcDetailFormRender from '../example/FcDetailFormRender'
import FcDetailFormComponent from '../example/FcDetailFormComponent'
import FcDetailFormTemplate from '../example/FcDetailFormTemplate'
import DynamicFcDetailForm from '../example/DynamicFcDetailForm'
import FcDetailFormTableSlot from '../example/FcDetailFormTableSlot'

export default {
  title: 'Example/DetailForm-详情',
  components: {
    FcDetailFormBasic,
    FcDetailFormRender,
    FcDetailFormComponent,
    FcDetailFormTemplate,
    DynamicFcDetailForm,
    FcDetailFormTableSlot
  }
};

export const detailData = () => ({
  components: { FcDetailFormBasic },
  template: `<FcDetailFormBasic />`
})

export const FcDetailFormRenderExample = () => (
  {
    components: { FcDetailFormRender },
    template: `
      <FcDetailFormRender></FcDetailFormRender>
    `
  }
)

export const FcDetailFormTemplateExample = () => (
  {
    components: { FcDetailFormTemplate },
    template: `
      <FcDetailFormTemplate></FcDetailFormTemplate>
    `
  }
)


export const FcDetailFormComponentExample = () => (
  {
    components: { FcDetailFormComponent },
    template: `
      <FcDetailFormComponent></FcDetailFormComponent>
    `
  }
)

// 动态字段展示
export const DynamicFcDetailFormExample = () => (
  {
    components: { DynamicFcDetailForm },
    template: `
      <DynamicFcDetailForm></DynamicFcDetailForm>
    `
  }
)

// 详情的表格 支持 slot
export const FcDetailFormTableSlotExample = () => (
  {
    components: { FcDetailFormTableSlot },
    template: `
      <FcDetailFormTableSlot></FcDetailFormTableSlot>
    `
  }
)

