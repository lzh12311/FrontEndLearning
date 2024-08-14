<template>
  <div class="tag">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import * as Vue from "vue";
import { useRoute } from "vue-router";
import { useAllDataStore } from "../store";

const store = useAllDataStore();

const tags = Vue.computed(() => store.state.tags);

Vue.onMounted(() => {
  console.log(tags.value.map((item) => console.log(item.label)));
});
const route = useRoute();
</script>

<style lang="less" scoped>
.tag {
  padding-left: 20px;
  padding-top: 20px;
}
.el-tag {
  margin-right: 10px;
}
</style>
