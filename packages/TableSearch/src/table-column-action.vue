<template>
  <div ref="actionButtonn" class="action-button">
    <template v-if="visible">
      <template v-for="(vnode, key) in $slots.default">
        <RenderDom :key="key" :vNode="vnode"/>
      </template>
    </template>
    <template v-else>
      <template v-for="(vnode, key) in $slots.default">
        <RenderDom :key="key" v-if="key <= sumButton" :vNode="vnode"/>
      </template>
      <el-dropdown @command="handleCommand" v-if="$slots.default.length > sumButton" ref="dropdown">
        <span class="el-dropdown-link">
          <i class="el-icon-more"></i>
        </span>
        <el-dropdown-menu class="el-dropdown-ui" slot="dropdown">
          <template v-for="(vnode, key) in $slots.default">
            <el-dropdown-item :command="vnode" v-if="key > sumButton" :key="key">
                <RenderDom :vNode="vnode"/>
            </el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
  </div>
</template>

<script>
/**
 * @description 操作栏自适应组件
*/
export default {
  name: 'fc-table-column-action',
  props: {
    column: {
      type: Object,
      default: null
    }
  },
  components: {
    RenderDom: {
      props: {
        vNode: [Array, String, Object, Number]
      },
      render(h, data) {
        if (typeof this.vNode === 'object') {
          return this.vNode
        } else {
          return h('div', this.vNode)
        }
      }
    }
  },
  data() {
    return {
      visible: true,
      sumButton: 0
    }
  },
  created() {
    this.onResizeButton()
  },
  methods: {
    // 下拉菜单点击时，重新获取事件
    handleCommand(vnode) {
      const listeners = vnode.componentInstance.$listeners
      listeners.click && listeners.click()
    },
    // 根据外部宽度大于当前操作栏宽度得出要展示的默认个数
    onResizeButton (){
      this.$nextTick(() => {
        let maxButtonWidth = 0
        let sumButton = 0
        const { width, minWidth } = this.column
        // 获取cell距离td的边距
        const offsetLeft = this.$el.offsetLeft
        let columnWidth = width || minWidth
        if (typeof columnWidth === 'string') {
          columnWidth = Number(columnWidth.replace(/px/g,''))
        }
        // 减去边距得出内部实际宽度
        columnWidth = columnWidth - offsetLeft * 2 - 14
        this.$slots.default.map((d, i) => {
          if(d.elm && d.elm.offsetWidth) {
            // 获取style剩余的边距
            const { style = {} } = d.elm
            const { marginLeft, marginRight } = style
            const left = marginLeft ? Number(marginLeft.replace(/px/g,'')) : 0
            const right = marginRight ? Number(marginRight.replace(/px/g,'')) : 0
            // 叠加按钮宽度值
            maxButtonWidth = ( Number(d.elm.offsetWidth) + left + right) + maxButtonWidth
            // 包含的.el-button + .el-button { margin-left: 4px !important }
            if (d.elm.type === 'button') {
              maxButtonWidth = maxButtonWidth + 4
            }
            // 当前按钮组超过操作栏宽度时
            if (maxButtonWidth < columnWidth) {
              sumButton = i
            }
          }
        })
        // 是否收起
        if (maxButtonWidth > columnWidth) {
          this.visible = false
        }
        // 根据宽度给出默认个数展示
        this.sumButton = sumButton
      })
    }
  }
}
</script>

<style lang="less" scoped>
.action-button{
  display: flex;
  // justify-content: center;
  align-items: center;
  a {
    font-size: 12px
  }
  /deep/.el-dropdown{
    flex: 1;
    text-align: right;
  }
  // /deep/.el-button + .el-button{
  //   margin: 0!important
  // }
  /deep/.el-dropdown-link{
    cursor: pointer;
    color: #999;
  }
  /deep/.el-icon-more{
    transform: rotate(90deg);
    color: #999
  }
  /deep/.el-icon-more:hover{
    color: #333
  }
}
</style>
<style lang="less">
.el-dropdown-ui .el-dropdown-menu__item .el-button.el-button--text{
  cursor: pointer;
  color: #606266;
  &:hover{
    color:#1890ff
  }
}
.el-dropdown-ui .el-dropdown-menu__item .el-button.el-button--text.is-disabled{
  color: #C0C4CC;
  cursor: not-allowed;
}
</style>