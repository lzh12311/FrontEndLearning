<template>
  <div>
    <van-nav-bar title="标题" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
      <template #left>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{ height: height }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import BetterScroll from "better-scroll";

export default {
  data() {
    return {
      height: 12,
    };
  },
  methods: {
    ...mapActions(["getCinemaList"]),
    onClickRight() {
      this.$router.push("/cinema/search");
    },
  },
  computed: {
    ...mapState({
      cinemaList: (state) => state.Cinema.cinemaList,
    }),
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 120 + "px";
    new BetterScroll(".cinema", {
      scrollbar: {
        fade: true,
      },
    });
    this.getCinemaList("310100").then(() => {});
  },
};
</script>

<style lang="less" scoped>
.cinema {
  height: 300px;
  overflow: hidden;
  position: relative;
  li {
    padding: 12px;
    .address {
      color: grey;
      font-size: 12px;
    }
  }
}
</style>