<template>
  <div>
    <van-search
      v-model="value"
      show-action
      @cancel="handleCancel"
      placeholder="请输入搜索关键字"
    />
    <van-list>
      <van-cell v-for="data in computedCinemaList" :key="data.cinemaId">
        <div>{{ data.name }}</div>
        <div class="address">{{ data.address }}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // 点击取消触发的事件
    handleCancel() {
      this.$router.replace("/cinema");
    },
  },
  computed: {
    ...mapState({
      cinemaList: (state) => state.Cinema.cinemaList,
    }),
    computedCinemaList() {
      if (this.value === "") {
        return [];
      }
      return this.cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase())
      );
    },
  },
  mounted() {
    console.log(123123313);
  },
};
</script>

<style lang="less" scoped>
.address {
  font-size: 12px;
  color: grey;
}
</style>