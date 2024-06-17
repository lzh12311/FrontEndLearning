<template>
    <div>
        <van-index-bar :index-list="computedCityList">
            <div v-for="data in cityList" :key="data.type">
                <van-index-anchor :index="data.type" />
                <van-cell @click="handleChangePage(item)" :title="item.name" :key="item.cityId" v-for="item in data.list"></van-cell>
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import http from '../utils'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            cityList: []
        }
    },
    mounted() {
        // 获取城市的数据
        http({
            url: '/gateway?k=2323064',
            headers: {
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(({ data }) => {
            this.handleCityData(data.data.cities)
        })
    },
    computed: {
        computedCityList() {
            return this.cityList.map(item => item.type)
        }
    },
    methods: {
        ...mapMutations(['changeCityData']),
        // 组装城市列表数据
        handleCityData (data) {
            // console.log(data, 'data')
            // 将数组处理成一个二位数组
            const letterArr = []
            for (let code = 65; code < 91; code++) {
                letterArr.push(String.fromCharCode(code))
            }
            const newCities = []
            letterArr.forEach(letter => {
                const list = data.filter(item => {
                    return item.pinyin.substring(0, 1).toUpperCase() === letter
                })
                // 获取到每一个字母开头的城市数据
                if (list.length) {
                    newCities.push({
                        type: letter,
                        list
                    })
                }
            })
            this.cityList = newCities
            console.log(newCities, 'newCities')
        },
        handleChangePage(item) {
            this.changeCityData(item)
            this.$router.back()
        }
    }
}
</script>