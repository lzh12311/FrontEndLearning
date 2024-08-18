<template>
  <div :class="`fc-tabs ${className}`">
    <el-tabs
        v-model="activeName"
        @tab-click="tabClick"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <el-tab-pane
          v-for="item in tabsItems"
          :key="item.name"
          :label="item.label"
          :name="item.name"
          v-bind="item.attrs"
          v-on="item.events"
        >
          <template v-if="!item.cache && !cache">
            <template v-if="activeName === item.name"><slot :name="item.name"/></template>
          </template>
          <template v-else>
            <keep-alive>
              <slot :name="item.name"/>
            </keep-alive>
          </template>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * @description 基本选项卡
*/
export default {
  name: 'fc-tabs',
  props: {
    // 定义tab样式
    className: {
      type: String,
      default: ''
    },
    // tabs表
    tabsItems: {
      type: Array,
      default: () => [{
        label: '选项一',
        name: '1'
      }, {
        label: '选项二',
        name: '2'
      }]
    },
    // 是否销毁
    cache: Boolean,
    // 当前选择
    activeTab: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeName: ''
    }
  },
  watch: {
    activeTab: {
      immediate: true,
      handler (val) {
        this.activeName = val || (this.tabsItems[0] && this.tabsItems[0].name)
      }
    }
  },
  methods: {
    tabClick () {
      this.$emit('update:activeTab', this.activeName)
    }
  }
}
</script>

<style lang="less" scoped>
// 定义默认
.fc-tabs {
  min-height: 100%;
  margin: -16px;
  position: relative;
  &::after{
    content: '';
    height: 100px;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 1px;
    box-shadow:0px 0px 6px 2px rgba(0, 0, 0, 0.15);
  }
  .el-tabs {
    // 头部
    /deep/.el-tabs__header{
      padding: 0 24px;
      background: #fff;
      margin: 0 0 16px;
      .el-tabs__item{
        height: 48px;
        line-height: 48px;
      }
    }
    // 内容
    /deep/.el-tabs__content {
      padding: 16px;
      padding-top: 0;
      overflow: auto;
    }
    // 隐藏下划线
    /deep/.el-tabs__nav-wrap::after{
      display: none;
    }
  }
}
</style>
