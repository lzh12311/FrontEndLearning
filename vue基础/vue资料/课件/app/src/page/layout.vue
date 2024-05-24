<template>
  <el-container>
    <el-aside width="200px">
      <commonAside />
    </el-aside>
    <el-container>
      <el-header>
        <commonHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import commonAside from '../components/commonAside'
import commonHeader from '../components/commonHeader'
export default {
  name: 'layout',
  components: {
    commonAside,
    commonHeader
  }
}
</script>
<style lang="less" scoped>
.el-header {
    background-color: #333;
}
.el-main {
    padding: 0;
}
</style>