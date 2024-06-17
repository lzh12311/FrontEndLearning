<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- tabbar -->
    <tabbar v-if="isShowTabbar()" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Tabbar from './components/Tabbar.vue'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  methods: {
    // 判断tabbar是否显示
    isShowTabbar() {
      const noTabbar = ['/detail']
      return !noTabbar.includes(this.$route.path)
    }
  }
}
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
ul, p, h3 {
  margin: 0;
  padding: 0;
}
</style>