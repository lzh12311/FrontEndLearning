<template>
    <div>
        <!-- 轮播图 -->
        <film-swiper>
            <div class="swiper-slide" v-for="(data, index) in imgList" :key="index">
                <div class="swiper-image" :style="{ backgroundImage: `url(${data})` }"></div>
            </div>
        </film-swiper>
        <!-- 内容区域 -->
        <film-header></film-header>
        <!-- 子路由页面显示 -->
        <router-view></router-view>
    </div>
</template>
<script>
import FilmSwiper from '../components/FilmSwiper.vue'
import FilmHeader from '../components/FilmHeader.vue'
export default {
    components: {
        FilmSwiper,
        FilmHeader
    },
    data() {
        return {
            imgList: [
            'http://124.223.69.156:5500/h5-01.jpg',
            'http://124.223.69.156:5500/h5-02.jpg',
            'http://124.223.69.156:5500/h5-03.png']
        }
    }
}
</script>
<style lang="less" scoped>
.swiper-slide {
    .swiper-image {
        height: 200px;
        background-size: cover;
        background-position: center center;
    }
}
</style>