<template>
  <div>
    <date-picker
      v-model="dateRange" 
      type="daterange"
      value-format="timestamp"
      :picker-options="pickerOptions"/>
    <el-button @click="getDate">搜索</el-button>
  </div>
  

</template>
<script>
import DatePicker from '../../packages/DatePicker'
import { size } from 'lodash-es'
import dayjs  from 'dayjs'
export default {
  name: 'FcDateRangeExample',
  data() {
    return {
      dateRange: [1627747200000, 1630425599999],
      
    }
  },
  components: {
    DatePicker
  },
  computed: {
    pickerOptions() {
      let self = this
      return {
        disabledDate(time) {
          return dayjs(time).isBefore(dayjs())
        }   
      }
    }
  },
  methods: {
    handleChange(val) {
      
      // console.log('handlechange', this.dateRange)
      // console.log('handleModel', this.dateRange)

    },
    getDate() {
      // console.log('this', this.dateRange)
      console.log('getDateModel', this.dateRange)
    }
  }

  
}
</script>