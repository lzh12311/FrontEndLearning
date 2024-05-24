<template>
  <div class="compa">
    <h3>this is A component</h3>
    <input type="text" v-model="message.content" />
    <CompB />
  </div>
</template>
<script>
import CompB from "./Two";
export default {
  name: "CompA",
  data() {
    return {
      message: {
        content: "",
      },
    };
  },
  components: {
    CompB,
  },
};
</script>