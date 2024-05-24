<template>
  <div class="containerC">
    <p>this is CompC</p>
    <input type="text" v-model="message" @keyup="sendMessage" />
    <p v-show="messageFromBus && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromBus }}
    </p>
  </div>
</template>
<script>
export default {
  name: "CompC",
  data() {
    return {
      message: "",
      messageFromBus: "",
      sender: "",
    };
  },
  mounted() {
    this.$bus.$on("sendMessage", (obj) => {
      // 通过eventBus监听sendMessage事件
      const { sender, message } = obj;
      this.sender = sender;
      this.messageFromBus = message;
    });
  },
  methods: {
    sendMessage() {
      this.$bus.$emit("sendMessage", {
        // 通过eventBus触发sendMessage事件
        sender: this.$options.name,
        message: this.message,
      });
    },
  },
};
</script>