<template>
  <!-- <div class="detail-container">
    <div class="banner" :style="{ backgroundImage: `url(${filmInfo.poster})` }">
      <router-link to="/film/nowplaying">
        <img class="back-img" src="../assets/download.png" alt="" />
      </router-link>
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmInfo.name }}</span>
          <span class="item">{{
            filmInfo.item ? filmInfo.item.name : ""
          }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ filmInfo.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">
        {{ filmInfo.category }}
      </div>
      <div class="film-premiere-time grey-text">
        {{ filmInfo.premiereAt | dateFilter }}
      </div>
      <div class="film-nation-runtime grey-text">
        {{ filmInfo.nation }} | {{ filmInfo.runtime }}
      </div>
      <div class="film-synopsis grey-text" :class="{ hidden: isShow }">
        {{ filmInfo.synopsis }}
      </div>
      <div style="text-align: center">
        <i
          class="iconfont"
          :class="isShow ? 'icon-less' : 'icon-moreunfold'"
          @click="isShow = !isShow"
        ></i>
      </div>
    </div>
  </div> -->
  <div class="detail-container">
    <div class="banner" :style="{ backgroundImage: `url(${filmInfo.poster})` }">
      <router-link to="/film/nowplaying">
        <img src="../assets/download.png" alt="" />
      </router-link>
    </div>
    <div class="film-detail">
      <div class="row">
        <div class="film-name">
          <span class="name">{{ filmInfo.name }}</span>
          <span class="item">{{
            filmInfo.item ? filmInfo.item.name : ""
          }}</span>
        </div>
        <div class="film-rate">
          <span class="grade">{{ filmInfo.grade }}</span>
          <span class="grade">分</span>
        </div>
      </div>
      <div class="other-info">
        <div class="category">
          {{ filmInfo.category }}
        </div>
        <div class="time">
          {{ filmInfo.premiereAt | dateFilter }}
        </div>
        <div class="nation">{{ filmInfo.nation }} | {{ filmInfo.runtime }}</div>
      </div>
      <div class="intro" :class="{ hidden: isShow }">
        {{ filmInfo.synopsis }}
      </div>
      <div style="text-align: center">
        <i
          class="iconfont"
          :class="isShow ? 'icon-less' : 'icon-moreunfold'"
          @click="isShow = !isShow"
        ></i>
      </div>
    </div>
    <div class="actor">
      <div class="actor-title-bar">
        <span class="actor-title-text">演职人员</span>
      </div>
      <!-- <actor-swiper :perslide="3" swiperclass="swiper-actor">
        <div
          class="swiper-slide"
          style="margin-right: 100px"
          v-for="data in filmInfo.actors"
          :key="data.name"
        >
          <van-image cover :src="data.avatarAddress" width="85" height="85" />
          <div class="actors-box">
            <div class="actors-name">{{ data.name }}</div>
            <div class="actors-role">{{ data.role }}</div>
          </div>
        </div>
      </actor-swiper> -->
    </div>
    <actor-swiper
      v-if="filmInfo.photos"
      style="padding-bottom: 10px"
      :preSlide="3"
      swiperclass="swiper-actors"
    >
      <div
        class="swiper-slide"
        v-for="(data, index) in filmInfo.actors"
        :key="index"
        @click="handleImagePreview(index)"
      >
        <van-image cover :src="data.avatarAddress" width="85" height="85" />
        <div class="actors-box">
          <div class="actors-name">{{ data.name }}</div>
          <div class="actors-role">{{ data.role }}</div>
        </div>
      </div>
    </actor-swiper>
    <!-- <actor-swiper :pre-slide="2" swiper-class="swiper-actors">
      <div
        class="swiper-slide"
        v-for="data in filmInfo.actors"
        :key="data.name"
      >
        <div>
          <van-image cover :src="data.avatarAddress" width="85" height="85" />
          <div class="actors-box">
            <div class="actors-name">{{ data.name }}</div>
            <div class="actors-role">{{ data.role }}</div>
          </div>
        </div>
      </div>
    </actor-swiper> -->

    <div class="figures">
      <div class="figure-title-bar">
        <span class="figure-title-text"> 剧集照片 </span>
      </div>
      <actor-swiper
        v-if="filmInfo.photos"
        style="padding-bottom: 10px"
        :preSlide="3"
        swiperclass="swiper-photos"
      >
        <div
          class="swiper-slide"
          v-for="(data, index) in filmInfo.photos"
          :key="index"
          @click="handleImagePreview(index)"
        >
          <div
            :style="{ backgroundImage: `url(${data})` }"
            style="
              height: 100px;
              background-size: cover;
              background-position: center center;
            "
          ></div>
        </div>
      </actor-swiper>
      <div v-else>
        <div class="explain">
          <span> 暂无聚集 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/utils";
import dayjs from "dayjs";
import ActorSwiper from "../components/ActorSwiper.vue";
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      filmInfo: {},
      isShow: false,
    };
  },
  components: {
    ActorSwiper,
  },
  filters: {
    dateFilter(date) {
      console.log(date, "date");
      return dayjs(date * 1000).format("YYYY-MM-DD");
    },
  },

  mounted() {
    const id = this.$route.query.id;
    http({
      url: `gateway?filmId=${id}&k=6951879`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then(({ data }) => {
      this.filmInfo = data.data.film;
      console.log(this.filmInfo);
    });
  },
  methods: {
    handleImagePreview(index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        loop: false, //是否开启循环
        closeable: true,
        closeIconPosition: "top-left",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.detail-container {
  background-color: #fff;
  .banner {
    height: 200px;
    background-size: cover;
    background-position: center center;
  }
  .film-detail {
    padding: 12px;
    padding-top: 12px;
    .row {
      display: flex;
      align-items: center;
      justify-content: start;
      .film-name {
        width: 289px;
        .name {
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
      }
      .film-rate {
        width: calc(100% - 250px);
        text-align: right;
      }
    }
    .other-info {
      display: flex;
      flex-direction: column;
      margin-top: 8px;
      gap: 8px;
    }
    .intro {
      margin-top: 12px;
      min-height: 98px;
      //   height: 98px;
      transition: height 0.5s ease;
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
      &.hidden {
        overflow: hidden;
        height: 12px;
      }
    }
  }
}
</style>
<!-- <style lang="less" scoped>
.detail-container {
  background-color: #f5f5f5;
  .back-img {
    margin-top: 5px;
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .film-detail {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    .col {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .film-name {
        width: 256px;
        .name {
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
      }
      .film-grade {
        width: calc(100% - 250px);
        text-align: right;
        color: #ffb232;
        .grade {
          font-size: 18px;
          font-style: italic;
        }
        .grade-text {
          font-size: 10px;
        }
      }
    }
    .grey-text {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .film-synopsis {
      margin-top: 12px;
      height: 98px;
      transition: height 0.5s ease;
      &.hidden {
        height: 38px !important;
        overflow: hidden;
      }
    }
  }
}
.banner {
  height: 200px;
  background-size: cover;
  background-position: center center;
}
</style> -->