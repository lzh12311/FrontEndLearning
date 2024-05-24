<template>
  <div class="child">
    <h4>this is child component</h4>
    <input type="text" v-model="message" @keyup="send" />
    <p>收到来自父组件的消息：{{ messageFromParent }}</p>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ["messageFromParent"], // 通过props接收父组件传过来的消息
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      this.$emit("on-receive", this.message); // 通过 $emit触发on-receive事件，调用父组件中receive回调，并将this.message作为参数
    },
  },
};
</script>