<template>
  <div>
    <date-picker
      v-model="dateModel"
      @change="handleChange"
      type="datetimerange"
      picker-options="pickerOptions"/>
    <el-button @click="getDate">搜索</el-button>
  </div>
  

</template>
<script>
import DatePicker from '../../packages/DatePicker'
export default {
  name: 'FcDatePicker',
  data() {
    return {
      dateModel: null,
      // pickerOptions: {
      //   disabledDate (time) {
      //     return time.getTime() < Date.now() // 选当前时间之后的时间
      //   }
      // }
    }
  },
  computed: {
    pickerOptions() {
      return {
         disabledDate (time) {
          return time.getTime() < Date.now() // 选当前时间之后的时间
        }
        // disabledDate: time => {
        //   let startDateTime = get(this.daterange, '[0]')
        //   let endDateTime = get(this.daterange, '[1]')
        //   let disableEnd = startDateTime ? dayjs(time).isAfter(dayjs(startDateTime).add(1, 'month')) : false
        //   let disableStart = endDateTime ? dayjs(time).isBefore(dayjs(endDateTime).subtract(1, 'month')) : false
        //   return disableStart || disableEnd

        // },
      }
    }
  },
  components: {
    DatePicker
  },
  methods: {
    handleChange(val) {
      // console.log('handlechange', val)
      // console.log('handleModel', this.dateModel)

    },
    getDate(val) {
      // console.log('getDate', val)
      // console.log('getDateModel', this.dateModel)
    }
  }

  
}
</script>