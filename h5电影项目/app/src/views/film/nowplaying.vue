<template>
    <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        @load="onLoad"
    >
        <van-cell v-for="item in dataList" :key="item.filmId" @click="handleClick(item.filmId)">
            <img :src="item.poster" alt="">
            <h3>{{ item.name }}</h3>
            <p class="actor">
                主演： {{ item.actors | actorFilter}}
            </p>
            <p>{{item.nation}} | {{item.runtime}} 分钟</p>
        </van-cell>
    </van-list>
</template>
<script>
import http from '../../utils'
export default {
    data() {
        return {
            loading: false,
            finished: false,
            dataList: [], //渲染的电影数据
            total: 0, //总条数
            current: 1
        }
    },
    filters: {
        actorFilter(actors) {
            // actors不存在
            if (!actors) return '暂无主演'
            return actors.map(item => item.name).join(' ')
        }
    },
    methods: {
        // 请求数据
        onLoad() {
            // 判断分页请求是否完成，当前的数据小于total
            console.log(this.dataList.length, this.total)
            if (this.dataList.length === this.total && this.dataList.length !== 0) {
                
                this.finished = true
                return
            }

            console.log('加载数据')
            this.current++
            http({
                url: `gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=136082`,
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(({ data }) => {
                const { films, total } = data.data
                this.dataList = [ ...this.dataList, ...films ]
                this.total = total
                // 控制是否加载完成
                this.loading = false
            })
        },
        // 跳转至详情
        handleClick(id) {
            this.$router.push(`/detail?id=${id}`)
        }
    },
    mounted() {
        // 首次请求电影数据
        http({
            url: `gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=136082`,
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(({ data }) => {
            const { films, total } = data.data
            this.dataList = films
            this.total = total
        })
    }
}
</script>
<style lang="less" scoped>
.actor {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.van-cell {
    overflow: hidden;
    padding: 10px;
    img {
        margin-right: 10px;
        float: left;
        width: 66px;
    }
}
</style>