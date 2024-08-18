<template>
  <div>
    是否展示 姓名
    <el-select v-model="hasName">
      <el-option :value="1" label="是"></el-option>
      <el-option :value="0" label="否"></el-option>
    </el-select>
    <fc-detail-form
      :configProp="config"
      :detailData="detailData"
    ></fc-detail-form>
  </div>
</template>

<script>
import FcDetailForm from '../packages/DetailForm'

export default {
  components: {
    FcDetailForm
  },
  data () {

    return {
      detailData: {
        name: '张三',
        age: 12
      },
      hasName: 1
    }
  },
  computed: {
    config () {
      const hasName = Boolean(this.hasName)

      return [
        {
          content: [
            {
              ui: [
                {
                  label: '姓名',
                  key: 'name',
                  hide: !hasName
                },
                {
                  label: '年龄',
                  key: 'age'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
