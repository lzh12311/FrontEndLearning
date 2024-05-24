<template>
  <div class="compb">
    <h4>this is B component</h4>
    <p>收到来自A组件的消息：{{ messageFromA && messageFromA.content }}</p>
    <CompC />
  </div>
</template>
<script>
import CompC from "./Three";
export default {
  name: "CompB",
  inject: ["messageFromA"], // 通过inject接受A中provide传递过来的message
  components: {
    CompC,
  },
};
</script>