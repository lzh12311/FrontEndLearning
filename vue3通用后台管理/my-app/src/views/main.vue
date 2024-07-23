<template>
  <div class="common-layout">
    <el-container class="container-outside">
      <!-- <el-aside class="aside">Aside</el-aside> -->
      <common-aside />
      <el-container class="container-inside">
        <el-header class="header">Header</el-header>
        <el-main class="main-inside">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import CommonAside from "../components/CommonSide.vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
}
.container-outside {
  height: 100%;
}
.header {
  background-color: black;
}
</style>