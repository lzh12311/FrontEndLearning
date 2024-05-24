<template>
  <div class="compa">
    <h3>this is A component</h3>
    <input type="text" v-model="message.content" />
    <CompB />
  </div>
</template>
<script>
import CompB from "./Two";
export default {
  name: "CompA",
  provide() {
    return {
      messageFromA: this.message, // 将message通过provide传递给子孙组件
    };
  },
  data() {
    return {
      message: {
        content: "",
      },
    };
  },
  components: {
    CompB,
  },
};
</script>