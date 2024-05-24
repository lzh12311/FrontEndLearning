<template>
  <div id="app">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: '这是我定义的一段内容'
    }
  },
  methods: {
    open() {
      // var self = this
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: () => {
          console.log(this, 'this')
          console.log(this.message)
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ self.message }`
          // });
        }
      });
      this.foo(1,2,3)
    },
    foo() {
      setTimeout(() => {
        console.log('args:', arguments);
      }, 0);
    }
  }
}
</script>