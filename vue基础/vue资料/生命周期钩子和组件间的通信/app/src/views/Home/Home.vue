<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <p>收到来自子组件的消息：{{ messageFromChild }}</p>
    <Child :messageFromParent="message" @on-receive="receive" />
  </div>
</template>
<script>
import Child from "./Child";
export default {
  name: "Parent",
  data() {
    return {
      message: "", // 传递给子组件的消息
      messageFromChild: "",
    };
  },
  components: {
    Child,
  },
  methods: {
    receive(msg) {
      // 接受子组件的信息，并将其赋值给messageFromChild
      this.messageFromChild = msg;
    },
  },
};
</script>