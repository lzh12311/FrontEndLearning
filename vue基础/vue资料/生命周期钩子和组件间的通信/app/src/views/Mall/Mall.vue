<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <Child>
      <template v-slot:child>
        {{ message }}
        <!--插槽要展示的内容-->
      </template>
    </Child>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  data() {
    return {
      message: "",
    };
  },
  components: {
    Child,
  },
};
</script>