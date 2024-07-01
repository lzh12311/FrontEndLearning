<template>
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="(data, index) in imgList" :key="index">
        <div
          class="swiper-img"
          :style="{ backgroundImage: `url(${data})` }"
        ></div>
      </div>
    </film-swiper>
    <film-header></film-header>
    <router-view> </router-view>
  </div>
</template>

<script>
import FilmSwiper from "../components/FilmSwiper.vue";
import FilmHeader from "../components/FilmHeader.vue";

export default {
  components: { FilmSwiper, FilmHeader },
  data() {
    return {
      imgList: [
        "http://124.223.69.156:5500/h5-01.jpg",
        "http://124.223.69.156:5500/h5-02.jpg",
        "http://124.223.69.156:5500/h5-03.png",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.swiper-slide {
  .swiper-img {
    height: 200px;
    background-size: cover;
    background-position: center center;
  }
}
</style>