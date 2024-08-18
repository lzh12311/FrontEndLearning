<template>
  <div>
    <date-picker v-model="dateModel" />
    <el-button @click="getDate">搜索</el-button>
  </div>
  

</template>
<script>
import DatePicker from '../../packages/DatePicker'
export default {
  name: 'FcDatePicker',
  data() {
    return {
      dateModel: '2021-08-01'
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