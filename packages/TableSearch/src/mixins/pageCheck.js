// 跨页勾选，多选，全选处理

let newMap = new Map()
import { cloneDeep }  from 'lodash-es'
import { debounce } from 'throttle-debounce';

export default {
  data() {
    return {
      newList: [], // 偏移勾选记录
      newCurrent: [], // 已请求分页记录
      clearIds: [], // 未勾选记录
      checkedAll: false // 全选
    }
  },
  created() {
    newMap = new Map()
  },
  computed: {
    // 已勾选列表
    checkList: {
      get() {
        return this.selectedRows
      },
      set(val) {
        this.$emit('update:selectedRows', val)
      }
    }
  },
  watch: {
    checkList: {
      handler(val) {
        // 为空时清除其它值
        if(Array.isArray(val) && val.length===0) {
          newMap = new Map()
          this.newList = []
          this.newCurrent = []
          this.clearIds = []
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 判断是否包含勾选状态，并选中勾选效果
    isCheckStatus() {
      // 判断否有新返回的数据并全选
      if(!this.tableConfig.isPaging && this.checkedAll && !this.newCurrent.includes(`${this.page.current}*${this.page.size}`)) {
        const dataItem = []
        this.list.map(d => {
          if (!this.clearIds.includes(d[this.columnKey])) {
            dataItem.push(d)
          }
        })
        this.onCheckFilterCurrent(dataItem)
      } else {
        let list = cloneDeep(this.newList)
        this.onCheckFilterCurrent(list)
      }
    },
    // 勾选当前效果
    onCheckFilterCurrent(selectKeys, selected) {
      this.$nextTick(() => {
        let item = this.list
        if (item.length) {
          // 记录页码
          if (this.checkedAll) {
            this.newCurrent =[...new Set([...this.newCurrent, `${this.page.current}*${this.page.size}`])]
          } else {
            this.newCurrent =[]
          }
          // 静态分页
          if (this.tableConfig.isPaging) {
            item = this.listAll
          }
          item.map(it => {
            // 匹配勾选
            if (selectKeys.length>0) {
              selectKeys.map(items => {
                if (items[this.columnKey] === it[this.columnKey]) {
                  this.$refs.fcTable.$refs.refTable.toggleRowSelection(it, selected)
                }
              })
            } else {
              // 默认匹配
              if (typeof selected === 'boolean' && it[this.columnKey]) {
                this.$refs.fcTable.$refs.refTable.toggleRowSelection(it, selected)
              }
            }
          })
        }
      })
    },
    // 多选框
    onChangeSelectMultiple(selectKeys) {
      this.onCheckRows(selectKeys)
    },
    // 手动/异步全选
    onChangeSelectAll(bol) {
      this.checkedAll = bol
      if (bol) {
        // 静态勾选
        if (this.tableConfig.isPaging) {
          this.onCheckFilterCurrent(this.listAll, true)
        } else {
          this.onCheckFilterCurrent(this.list, true)
        }
      } else {
        // 全部取消-清除勾选值
        this.checkList = []
        // 当前勾选效果，分页时见pageFilter处理
        this.onCheckFilterCurrent([], false)
      }
    },
    // 勾选方法 - 防抖
    onCheckRows: debounce(100, function(selectKeys = [], clearIds = []) {
      const listCurrent = this.list
      const key = this.columnKey
      if (selectKeys.length > 0) {
        var m = new Map()
        for (let i = 0; i < selectKeys.length; i++) {
          m.set(selectKeys[i][key], selectKeys[i][key])
        }
        for (let i = 0; i < listCurrent.length; i++) {
          if (m.get(listCurrent[i][key]) == null || !m.get(listCurrent[i][key])) {
            clearIds.push(listCurrent[i][key])
          }
        }
      } else {
        for (let i = 0; i < listCurrent.length; i++) {
          clearIds.push(listCurrent[i][key])
        }
      }
      // 向newMap添加
      for (let i = 0; i < selectKeys.length; i++) {
        newMap.set(selectKeys[i][key], selectKeys[i])
      }
      // 移除
      for (let i = 0; i < clearIds.length; i++) {
        newMap.delete(clearIds[i])
      }
      var list = []
      newMap.forEach(function(key) {
        list.push(key)
      })
      this.newList = cloneDeep(list)
      this.checkList = list
      this.clearIds = [...new Set([...this.clearIds, ...clearIds])].filter(Boolean)
      // 当前是否有勾选记录，并过滤勾选clear记录
      const selection = this.$refs.fcTable.$refs.refTable.selection.map(d => d[this.columnKey])
      if(selection.length>0) {
        this.clearIds = this.clearIds.filter(d => !selection.includes(d))
      }
    })
  }
}