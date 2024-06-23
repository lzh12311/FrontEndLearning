<template>
  <div id="app">
    <router-view></router-view>
    <tabber-component />
  </div>
</template>

<script>
import TabberComponent from "./components/TabberComponent.vue";
export default {
  components: { TabberComponent },
  name: "App",
};
</script>