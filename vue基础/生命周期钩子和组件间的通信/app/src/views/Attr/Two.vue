<template>
  <div class="compb">
    <h4>this is B component</h4>
    <input name="compB" type="text" v-model="message" v-on="$listeners" />
    <!--将A组件keyup的监听回调绑在该input上-->
    <p>收到来自A组件的消息：{{ $attrs.messageFromA }}</p>
    <CompC v-bind="$attrs" v-on="$listeners" />
    <!--将A组件keyup的监听回调继续传递给C组件，将A组件传递的attrs继续传递给C组件-->
  </div>
</template>
<script>
import CompC from "./Three";
export default {
  name: "CompB",
  components: {
    CompC,
  },
  props: ['test'],
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log(1111111)
    console.log(this.$attrs, 'attrs')
    console.log(this.$listeners, 'listener')
  }
};
</script>