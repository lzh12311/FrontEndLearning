<template>
  <el-aside :width="width">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
    >
      <h3 v-show="isCollapse">通用后台管理系统</h3>
      <h3 v-show="isCollapse">系统</h3>
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
        @click="handleMenu(item)"
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
            @click="handleMenu(item)"
          >
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useAllDataStore } from "../store";
import { useRouter, useRoute } from "vue-router";

const store = useAllDataStore();
const list = computed(() => store.state.menuList);
const router = useRouter();
const route = useRoute();

const isCollapse = computed(() => store.state.isCollapse);
const noChildren = computed(() => list.value.filter((item) => !item.children));
const hasChildren = computed(() => list.value.filter((item) => item.children));
const width = computed(() => (store.state.isCollapse ? "64px" : "180px"));

onMounted(() => {
  console.log(isCollapse);
});

const handleMenu = (item) => {
  router.push(item.path);
  store.selectMenu(item);
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}

.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}

.el-aside {
  height: 100%;
  background-color: #545c64;
}
</style>
