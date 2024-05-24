<template>
  <div class="compc">
    <h5>this is C component</h5>
    <input name="compC" type="text" v-model="message"/>
    <!--将A组件keyup的监听回调绑在该input上-->
    <p>收到来自A组件的消息：</p>
  </div>
</template>
<script>
export default {
  name: "Compc",
  data() {
    return {
      message: "",
    };
  },
};
</script>