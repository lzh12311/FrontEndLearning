import Uploader from '../packages/Uploader'
import Tabs from '../packages/Tabs'
import TableSearch from '../packages/TableSearch'
import FormSearch from '../packages/FormSearch'
import FormItem from '../packages/FormItem'
import Select from '../packages/Select'
import SelectCascader from '../packages/SelectCascader'
import DatePicker from '../packages/DatePicker'
import TimePicker from '../packages/TimePicker'
import Records from '../packages/Records'
import DetailForm from '../packages/DetailForm'
import DetailFormPanel from '../packages/DetailFormPanel'
import DialogForm from '../packages/DialogForm'

const components = [
  Uploader,
  Tabs,
  TableSearch,
  FormItem,
  FormSearch,
  Select,
  SelectCascader,
  DatePicker,
  TimePicker,
  Records,
  DetailForm,
  DetailFormPanel,
  DialogForm
]
// will install the plugin only once
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$FcElement = {
    tableConfig: opts.tableConfig,
    paginationConfig: opts.paginationConfig,
    selectConfig: opts.selectConfig,
    dateConfig: opts.dateConfig,
  }
}

export {
  Uploader,
  Tabs,
  TableSearch,
  FormItem,
  FormSearch,
  Select,
  SelectCascader,
  DatePicker,
  TimePicker,
  Records,
  DetailForm,
  DetailFormPanel,
  DialogForm
}

export default install
