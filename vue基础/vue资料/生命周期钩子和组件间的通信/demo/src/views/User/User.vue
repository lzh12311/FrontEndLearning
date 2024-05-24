<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <p>收到来自子组件的消息：</p>
    <!--展示子组件实例的message-->
    <Child />
  </div>
</template>
<script>
import Child from "./Child";
export default {
  name: "Parent",
  data() {
    return {
      message: "",
      child1: {},
    };
  },
  components: {
    Child,
  },
  mounted() {
    
  },
};
</script>