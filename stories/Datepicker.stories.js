import FcDatePickerBase from '../example/datepicker/FcDatePickerBase';
import FcDatePickerRange from '../example/datepicker/FcDatePickerRange'
import FcDatePickerTimeRange from '../example/datepicker/FcDatePickerTimeRange'

export default {
  title: 'Example/日期组件',
  components: {
    FcDatePickerBase,
    FcDatePickerRange
  }
};

export const datepicker = () => ({
  components: { FcDatePickerBase },
  template: `<FcDatePickerBase />`
})

export const daterangepicker = () => ({
  components: { FcDatePickerRange },
  template: `<FcDatePickerRange />`
})

export const datetimerangepicker = () => ({
  components: { FcDatePickerTimeRange },
  template: `<FcDatePickerTimeRange />`
})

