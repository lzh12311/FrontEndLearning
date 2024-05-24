<template>
  <div class="child">
    <h4>this is child component</h4>
    <input type="text" v-model="message" @keyup="send" />
    <p>收到来自父组件的消息：{{messageFromParent}}</p>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ['messageFromParent'],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      this.$emit('on-reveive', this.message)
    },
  },
};
</script>