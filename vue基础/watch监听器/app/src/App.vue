<template>
  <div id="app">
    <h1>金钱剩余：{{ money }}，小于200后提示要出去赚钱</h1>
    <el-button v-if="isShow" @click="handleClick" type="primary">日常开销</el-button>
    <el-button v-else @click="reset">重置</el-button>
    <el-button @click="handleClick1" type="primary">商城购物 一次400</el-button>
    <el-button @click="handleClick2" type="primary">请客吃饭 一次300</el-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      money: 1000,
      isShow: true,
      timer: null
    }
  },
  methods: {
    handleClick() {
      // 日常开销
      this.isShow = false
      this.timer = setInterval(() => {
        this.money = this.money - 200
        if (this.money === 200) {
          clearTimeout(this.timer)
        }
      }, 1000)
    },
    reset() {
      clearTimeout(this.timer)
      this.money = 1000
      this.isShow = true
    },
    handleClick1() {
      this.money = this.money - 400
    },
    handleClick2 () {
      this.money = this.money - 300
    },
    tips() {
      console.log('要出去赚钱')
    }
  },
  watch: {
    money(newVal) {
      if (newVal <= 200) {
        this.tips()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
