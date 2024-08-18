<template>
  <div  style="display: flex" >
    <el-date-picker
      v-model="dateModel[0]"
      v-bind="$attrs"
      @change="val => handleRangeChange(val, 'start')"
      v-on="$listeners"
      :type="dateType"
      :placeholder="$attrs['start-placeholder'] || '开始时间'"
      :default-time="defaultStartTimeValue"
      :picker-options="pickerOptionsStart"
    />
    <div style="margin:0px 8px"> {{$attrs['range-separator'] || '至'}} </div>
    <el-date-picker
      v-model="dateModel[1]"
      v-bind="$attrs"
      v-on="$listeners"
      @change="val => handleRangeChange(val, 'end')"
      :type="dateType"
      :placeholder="$attrs['end-placeholder'] || '结束时间'"
      :default-time="defaultEndTimeValue"
      :picker-options="pickerOptionsEnd"
    />
  </div>
</template>
<script>
import { get } from 'lodash-es'
import dayjs from 'dayjs'
import {formatDate} from 'element-ui/lib/utils/date-util'
export default {
  name: 'DateRangePicker',
  data() {
    return  {
      dateModel: null,
      
    }
  },
  props: {
    value: {}
  },
  watch: {
    value: {
      handler(val) {
        if(val && typeof(val) === 'object' && val.length) {
          this.dateModel = [val[0] || '', val[1] || '']
        }
      },
      immediate: true,
      deep: true,
    }
  },
  computed: {
    pickerOptionsStart() {
      let self = this
      return {
        ...(this.$attrs['picker-options'] || {}),
        disabledDate: val => self.disableStartDate(val) 
      }
    },
    pickerOptionsEnd() {
      let self = this
      return {
        ...(this.$attrs['picker-options'] || {}),
        disabledDate: val => self.disableEndDate(val)
      }
    },
    dateType() {
      let type = 'date'

      switch(this.$attrs.type) {
        case 'daterange':
          type = 'date'
          break
        case 'datetimerange':
          type = 'datetime'
          break
        case 'monthrange':
          type = 'month'
          break
        default:
          type = 'date'
          break
      }
      return type
    },
    defaultStartTimeValue() {
      const defaultTime = this.$attrs['default-time'] || []
      return defaultTime.length && defaultTime[0] ? defaultTime[0] : '00:00:00'
    },
    defaultEndTimeValue() {
      const defaultTime = this.$attrs['default-time'] || []
      return defaultTime.length && defaultTime[1] ? defaultTime[1] : '23:59:59'
    },
  },
  methods: {
    disableEndDate(pickedDate) {
      let endDisabled = false
      if (!get(this.dateModel, [0]) || !pickedDate) {
        endDisabled = false
      } else {
        endDisabled = dayjs(pickedDate).endOf('day').isBefore(dayjs(get(this.dateModel, [0])))
      }
      return endDisabled 
      || (this.$attrs['picker-options'] && this.$attrs['picker-options'].disabledDate
        ? this.$attrs['picker-options'].disabledDate(pickedDate)
        : false)
    },
    disableStartDate(pickedDate) {
      let startDisabled = false
      if (!get(this.dateModel, [1])|| !pickedDate) {
        startDisabled = false
      } else {
        startDisabled = dayjs(pickedDate).isAfter(dayjs(get(this.dateModel, [1])))
      }

      return startDisabled
      || (this.$attrs['picker-options'] && this.$attrs['picker-options'].disabledDate
        ? this.$attrs['picker-options'].disabledDate(pickedDate)
        : false)

    },
  
    handleRangeChange(val, type) {
      if(!val){
        this.dateModel[0] = type === 'start' ? '' : this.dateModel[0]
        this.dateModel[1] = type === 'end' ? '' : this.dateModel[1]
      }
  
      // date type下默认将终点设为一天结尾
      if (get(this.dateModel, [1]) && this.dateType==='date') {
        this.dateModel[1] = dayjs(this.dateModel[1]).endOf('day').valueOf()
        this.dateModel[1] = this.$attrs['value-format']
          ? (this.$attrs['value-format']!=='timestamp'
            ? formatDate(this.dateModel[1], this.$attrs['value-format'])
            : dayjs(this.dateModel[1]).valueOf())
          : new Date(this.dateModel[1])
      }
      
      this.$emit('range-change', this.dateModel)
    }
  },
  created() {
    let val = this.value
    this.dateModel = val ? [(val[0] || ''), (val[1] || '')] : ['', '']
  }
   
  
}
</script>