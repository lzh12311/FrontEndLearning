<template>
  <div class="common-layout">
    <el-container class="container-outside">
      <common-aside />
      <el-container class="container-inside">
        <el-header class="el-header">
          <common-header />
        </el-header>
        <common-tag />
        <el-main class="main-inside">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import CommonAside from "../components/CommonSide.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
}
.container-outside {
  height: 100%;
}
.el-header {
  width: 100%;
  padding: 0px;
}
.header {
  background-color: black;
}
.main-inside {
  min-width: 1200px;
}
</style>

