import Vue from 'vue'
import Vuex from 'vuex'
import Cinema from './module/cinemaModule'
import City from './module/cityModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 创建store实例
export default new Vuex.Store({
    plugins: [createPersistedState()],
    // 模块
    modules: {
        Cinema,
        City
    }
})