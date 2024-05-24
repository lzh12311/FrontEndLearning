<template>
  <div class="compc">
    <h5>this is C component</h5>
    <p>收到来自A组件的消息：{{ messageFromA && messageFromA.content }}</p>
  </div>
</template>
<script>
export default {
  name: "Compc",
  inject: ["messageFromA"], // 通过inject接受A中provide传递过来的message
};
</script>