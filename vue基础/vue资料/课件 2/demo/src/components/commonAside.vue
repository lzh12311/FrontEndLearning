<template>
  <el-menu
    height="100%"
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item @click="handleClick('home')" index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu  index="2">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>用户</span>
      </template>  
      <el-menu-item-group>
        <el-menu-item @click="handleClick('list')" index="1-1">列表</el-menu-item>
        <el-menu-item @click="handleClick('form')" index="1-2">表单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'commonAside',
  methods: {
    handleClick(route) {
      if (route !== this.$router.currentRoute.name) {
        this.$router.push('/'+route)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      height: 100%;
      border: none;
      h3 {
          color: #fff;
          text-align: center;
          line-height: 48px
      }
  }
</style>