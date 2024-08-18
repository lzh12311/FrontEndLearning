import Uploader from '../packages/Uploader';
export default {
  title: 'Example/Uploader',
  component: Uploader,
  argTypes: {
    multiple: { control: { type: 'select', options: [true, false] } },
    listType: { control: { type: 'select', options: ['text', 'picture', 'picture-card'] } },
    fileList: { control: []},
    handleError: { action: 'handleError' },
    disabled: { control: { type: 'select', options: [true, false] } }

  },
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Uploader },
  template: `<uploader v-bind="$props" @onError="handleError" @onRemove="() => console.log('remove')">
  <div slot="tip">图片格式为jpg, png ,jpeg</div>
  </uploader>`,
});

export const fileUploader = Template.bind({});
fileUploader.args = {
  action: "https://jsonplaceholder.typicode.com/posts/",
  listType:"text",
  autoUpload: false,
  multiple: true,
  buttonText: '身份证照片',
  limit: 5,
  accept: '.pdf, .png, .jpeg, .jpg',
  // fileList: null
  fileList: [{
    url: 'https://dummyimage.com/200x100',
    name: '200*100.png'
  }, {
    name: 'pdf文件',
    url: 'https://image.fuchuang.com/prod/508bd88_IT-FAQ-1017_MAC%E4%B8%8A%E5%AE%89%E8%A3%85KM%E6%89%93%E5%8D%B0%E6%9C%BA%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC20210603114642.pdf'
  }, {
    name: '图片文件.jpg',
    url: 'https://image.fuchuang.com/prod/5955b356_120210603105003.jpg'
  },]
};