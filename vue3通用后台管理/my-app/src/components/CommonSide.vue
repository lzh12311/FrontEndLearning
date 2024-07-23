<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu
      v-for="item in hasChildren"
      :key="item.path"
      :index="item.path"
    >
      <template #title>
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="subItem in item.children"
          :index="subItem.path"
          :key="subItem.path"
        >
          <component class="icons" :is="subItem.icon"></component>
          <span>{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, computed } from "vue";

const list = ref([
  {
    path: "/home",
    name: "home",
    label: "首页",
    icon: "house",
    url: "Home",
  },
  {
    path: "/mall",
    name: "mall",
    label: "商品管理",
    icon: "video-play",
    url: "Mall",
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "user",
    url: "User",
  },
  {
    path: "other",
    label: "其他",
    icon: "location",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "页面1",
        icon: "setting",
        url: "Page1",
      },
      {
        path: "/page2",
        name: "page2",
        label: "页面2",
        icon: "setting",
        url: "Page2",
      },
    ],
  },
]);
const noChildren = computed(() => list.value.filter((item) => !item.children));
const hasChildren = computed(() => list.value.filter((item) => item.children));
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
</style>