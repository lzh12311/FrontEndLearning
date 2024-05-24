
<template>
  <div class="child">
    <h4>this is child component</h4>
    <p>
      收到来自父组件的消息： <slot name="child"></slot>
      <!--展示父组件通过插槽传递的{{message}}-->
    </p>
  </div>
</template>


<script>
export default {
  name: "Child",
};
</script>
