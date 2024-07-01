<template>
  <div class="swiper-container" :class="swiperClass">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

export default {
  props: {
    preSlide: {
      type: Number,
      default: 1,
    },
    swiperClass: {
      type: String,
      default: "swiper-container",
    },
  },
  data() {
    return {};
  },
  mounted() {
    new Swiper("." + this.swiperClass, {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
    });
  },
};
</script>
<style lang="less" scoped>
.swiper-wrapper {
  padding-left: 12px;
}
</style>