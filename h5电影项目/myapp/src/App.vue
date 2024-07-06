<template>
  <div id="app">
    <router-view></router-view>
    <tabber-component v-if="isShow()" />
  </div>
</template>

<script>
import TabberComponent from "./components/TabberComponent.vue";
export default {
  components: { TabberComponent },
  name: "App",
  methods: {
    isShow() {
      const noShow = ["/detail"];
      return !noShow.includes(this.$route.path);
    },
  },
};
</script>