<template>
  <div class="child">
    <h4>this is child component</h4>
    <input type="text" v-model="message" />
    <p>收到来自父组件的消息：{{ $parent.message }}</p>
    <!--展示父组件实例的message-->
  </div>
</template>
<script>
export default {
  name: "Child1",
  data() {
    return {
      message: "", // 父组件通过this.$children可以获取子组件实例的message
    };
  },
};
</script>