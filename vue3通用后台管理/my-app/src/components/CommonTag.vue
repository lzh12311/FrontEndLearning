<template>
  <div class="tag">
    <el-tag
      v-for="(tag, index) in tag"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.lable }}
    </el-tag>
  </div>
</template>

<script setup>
import * as Vue from "vue";
import { useRoute } from "vue-router";
const tag = Vue.ref([
  {
    path: "user",
    name: "home",
    lable: "home",
    icon: "home",
  },
]);

const route = useRoute();
</script>

<style lang="less" scoped>
.tag {
  padding-left: 20px;
  padding-top: 20px;
}
</style>
