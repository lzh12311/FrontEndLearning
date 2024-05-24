<template>
  <div class="child">
    <h4>this is child component</h4>
    <p>收到来自父组件的消息: <slot name="msgFromParent"></slot></p>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ['value'],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      this.$emit('input', this.message)
    },
  },
};
</script>