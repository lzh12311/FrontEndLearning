<template>
    <div class="detail-container">
        <div class="banner" :style="{ backgroundImage: `url(${filmInfo.poster})` }">
            <router-link to="/film/nowplaying">
                <img class="back-img" src="../assets/download.png" alt="">
            </router-link>
        </div>
        <div class="film-detail">
            <div class="col">
                <div class="film-name">
                    <span class="name">{{ filmInfo.name }}</span>
                    <span class="item">{{ filmInfo.item ? filmInfo.item.name : ''}}</span>
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
                {{ filmInfo.premiereAt | dateFilter}}
            </div>
            <div class="film-nation-runtime grey-text">
                {{ filmInfo.nation }} | {{ filmInfo.runtime }}
            </div>
            <div class="film-synopsis grey-text" :class="{hidden: isShow}">
                {{ filmInfo.synopsis }}
            </div>
            <div style="text-align: center">
                <i class="iconfont" :class="isShow ? 'icon-less' : 'icon-moreunfold'" @click="isShow = !isShow"></i>
            </div>
        </div>
        <div class="actor">
            <div class="actors-title-bar">
                <span class="actors-title-text">演职人员</span>
            </div>
        </div>
        <detail-swiper :perslide="4" swiperclass="swiper-actors">
            <div style="margin-right: 10px" v-for="data in filmInfo.actors" :key="data.name">
                <van-image
                    cover
                    width="85"
                    height="85"
                    :src="data.avatarAddress"
                />
                <div class="actors-box">
                    <div class="actors-name">{{ data.name }}</div>
                    <div class="actors-role">{{ data.role }}</div>
                </div>
            </div>
        </detail-swiper>
        <div class="photos">
            <div class="photos-title-bar">
                <span class="photos-title-text">剧照</span>
            </div>
            <detail-swiper v-if="filmInfo.photos" style="padding-bottom: 10px" :perslide="2" swiperclass="swiper-photos">
                <div class="swiper-slide" v-for="(data, index) in filmInfo.photos" :key="index" @click="handlePreview(index)">
                    <div :style="{backgroundImage: `url(${data})`}" style="height: 100px;background-size: cover;background-position: center center;"></div>
                </div> 
            </detail-swiper>
            <div v-else class="empte-text" style="height: 115px; line-height: 58px;text-align:center">
                暂无电影剧照
            </div>
        </div>
    </div>
</template>
<script>
import http from '../utils'
import dayjs from 'dayjs'
import DetailSwiper from '../components/DetailSwiper'
import { ImagePreview } from 'vant';
export default {
    data() {
        return {
            filmInfo: {},
            isShow: false
        }
    },
    components: {
        DetailSwiper
    },
    filters: {
        dateFilter(date) {
            console.log(date, 'date')
            return dayjs(date*1000).format('YYYY-MM-DD')
        }
    },
    mounted() {
        // 获取详情页数据
        const id = this.$route.query.id
        http({
            url: `gateway?filmId=${id}&k=6951879`,
            headers: {
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(({ data }) => {
            this.filmInfo = data.data.film
        })
    },
    methods: {
        // 图片预览方法
        handlePreview(index) {
            ImagePreview({
                images: this.filmInfo.photos,
                startPosition: index,
                loop: false, //是否开启循环
                closeable: true,
                closeIconPosition: 'top-left'
            });
        }
    }
}
</script>
<style lang="less" scoped>
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
      transition: height .5s ease;
      &.hidden {
        height: 38px!important;
        overflow: hidden;
      }
    }
  }
  .actor {
    margin-top: 10px;
    background-color: #fff;
    .actors-title-bar {
      width: 100%;
      padding: 15px;
      .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
      }
    }
  }
  .photos {
    margin-top: 10px;
    // margin-bottom: 60px;
    background-color: #fff;
    .photos-title-bar {
      height: 25px;
      width: 100%;
      padding: 15px;
      .photos-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }
    .empty-text {
      text-align: center;
    }
  }
  .synopsis{
    height: 50px;
    overflow: hidden;
  }
  .actors-box {
    text-align: center;
    .actors-name {
      padding-top: 10px;
      font-size: 12px;
      color: #191a1b;
      width: 85px;
      height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .actors-role {
      font-size: 10px;
      color: #797d82;
    }
  }
}
.banner {
    height: 200px;
    background-size: cover;
    background-position: center center;
}
</style>