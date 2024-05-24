<template>
  <div class="compa">
    <h3>this is A component</h3>
    <input type="text" v-model="message" />
    <p>收到来自{{ comp }}的消息：{{ messageFromComp }}</p>
    <CompB :messageFromA="message" @keyup="receive" />
    <!--监听子孙组件的keyup事件，将message传递给子孙组件-->
  </div>
</template>
<script>
import CompB from "./Two";
export default {
  name: "CompA",
  data() {
    return {
      message: "",
      messageFromComp: "",
      comp: "",
    };
  },
  components: {
    CompB,
  },
  methods: {
    receive(e) {
      
    },
  },
};
</script>