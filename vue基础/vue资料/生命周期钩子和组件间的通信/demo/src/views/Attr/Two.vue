<template>
  <div class="compb">
    <h4>this is B component</h4>
    <input name="compB" type="text" v-model="message"/>
    <p></p>
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
  data() {
    return {
      message: "",
    };
  },
};
</script>