export default {
  data() {
    return {
      // 全部页数据
      listAll: []
    }
  },
  methods: {
    // 静态分页
    pageFilter() {
      const { listAll, page } = this
      const total = listAll.length
      // 处于第几页 number
      // 保存每页数据的数组
      let pagedata = []
      // pageSize 每页条数
      // 设置开始
      let start = (page.size * page.current) - page.size
      // 设置结束长度
      let end = page.size * page.current
      end = end > total ? total : end
      for (let i = start; i < end; i++) {
        // 所有分页数据 data
        pagedata.push(listAll[i])
      }
      this.list = pagedata
      // 是否动态处理勾选
      this.tableConfig.isCrossCheck && this.isCheckStatus()
    }
  }
}