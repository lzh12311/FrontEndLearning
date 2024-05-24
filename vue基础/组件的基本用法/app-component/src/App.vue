<template>
  <div id="app">
    <!-- <my-component />
    <hello-world />
    <MyComponent /> -->
    <!-- <MyButton />
    <MyButton />
    <MyButton /> -->
    <!-- <blog-post :prop="post" /> -->
    <Parent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyButton from './components/myButton.vue'
import BlogPost from './components/blogPost.vue'
import Parent from './components/parent.vue'
export default {
  name: 'App',
  data() {
    return {
      post: {
        tips: '一个友好的提示语',
        title: '标题'
      }
    }
  },
  components: {
    MyButton,
    BlogPost,
    Parent
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
