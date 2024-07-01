<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="(item, index) in dataList"
      :key="index"
      @click="handleClick(item.filmId)"
    >
      <img :src="item.poster" />
      <h3>{{ item.name }}</h3>
      <p class="actor">主演： {{ item.actors | actorFilter }}</p>
      <p>{{ item.nation }} | {{ item.runtime }} 分钟</p>
    </van-cell>
  </van-list>
</template>

<script>
import http from "../../utils/index";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      dataList: [],
      total: 0,
      current: 0,
    };
  },
  filters: {
    actorFilter(actor) {
      if (!actor) return " ";

      return actor.map((item) => item.name).join(" ");
    },
  },
  methods: {
    onLoad() {
      if (this.dataList.length === this.total && this.dataList.length !== 0) {
        this.finished = true;
        return;
      }
      this.current++;
      http({
        url: `gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=136082`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then(({ data }) => {
        const { films, total } = data.data;
        this.dataList = [...this.dataList, ...films];
        this.total = total;
        this.loading = false;
      });
    },
    handleClick(id) {
      // this.$router.push(`/detail?id=${id}`);
      this.$router.push({ path: "/detail", query: { id: `${id}` } });
    },
  },
  mounted() {
    http({
      url: `gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=136082`,
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then(({ data }) => {
      const { films, total } = data.data;
      this.dataList = films;
      this.total = total;
      console.log(data);
    });
  },
};
</script>
<style lang="less" scoped>
.actor {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-cell {
  overflow: hidden;
  margin: 0px;
  img {
    margin-right: 10px;
    float: left;
    height: 100px;
  }
  p {
    margin: 0px;
  }
  h3 {
    margin: 0px;
  }
}
</style>