<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 组件的内容由父组件传入，并且为dom结构时 -->
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper外面，需要自定义样式。-->
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
    data() {
        return {

        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            // 分页器
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
}
</script>