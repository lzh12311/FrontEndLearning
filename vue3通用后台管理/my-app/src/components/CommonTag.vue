<template>
  <div class="tag">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
      @click="handleCilck(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import * as Vue from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAllDataStore } from "../store";

const route = useRoute();
const router = useRouter();
const store = useAllDataStore();
const tags = Vue.computed(() => store.state.tags);

const handleCilck = (tag) => {
  router.push(tag.name);
  store.selectMenu(tag);
};

const handleClose = (tag, index) => {
  store.updateMenu(tag);

  if (route.name !== tag.name) {
    return;
  } else {
    if (index === store.state.tags.length) {
      store.selectMenu(tags.value[index - 1]);
      router.push(tags.value[index - 1].name);
    } else if (index < tags.length) {
      store.selectMenu(tags.value[index]);
      router.push(tags.value[index].name);
    }
  }
};

Vue.onMounted(() => {
  console.log(tags.value.map((item) => console.log(item.label)));
});
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
