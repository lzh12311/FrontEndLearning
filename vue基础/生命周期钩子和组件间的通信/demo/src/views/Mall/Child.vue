
<template>
  <div class="child">
    <h4>this is child component</h4>
    <p>
      收到来自父组件的消息： <slot v-bind:user="user">{{user.firstName}}</slot>
      <!--展示父组件通过插槽传递的{{message}}-->
    </p>
  </div>
</template>


<script>
export default {
  name: "Child",
  data() {
    return {
      user: {
        firstName: 'allen',
        lastName: 'chirs'
      }
    }
  }
};
</script>
