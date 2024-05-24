<template>
  <div class="compb">
    <h4>this is B component</h4>
    <p>收到来自A组件的消息：</p>
    <CompC />
  </div>
</template>
<script>
import CompC from "./Three";
export default {
  name: "CompB",
  components: {
    CompC,
  },
};
</script>