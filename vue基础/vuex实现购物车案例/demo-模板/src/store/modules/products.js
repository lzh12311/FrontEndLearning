import axios from "axios";

const state = {
    //记录所有的商品
    products: []
}

const mutations = {
    //更新商品列表。
    setProducts(state, payload) {
        state.products = payload;
    }
}

const actions = {
    // 异步获取商品，第一个是context上下文，解构出来要commit
    async getProducts({ commit }) {
        // 请求接口
        const { data } = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:3000/products'
        })
        // 将获取的数据将结果存储到state中
        commit('setProducts', data)
        console.log(data)
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}