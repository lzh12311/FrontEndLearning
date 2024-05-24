<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <p>收到来自子组件的消息：{{ messageFromChild }}</p>
    <Child :messageFromParent="message" @on-reveive="reveive" />
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
    reveive(msg) {
      // 接受子组件传递的数据
      this.messageFromChild = msg
    }
  },
};
</script>