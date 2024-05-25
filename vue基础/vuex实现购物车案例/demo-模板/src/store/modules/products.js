import axios from "axios";

const state = {
    //record all products
    products: [
    ]
}

const mutations = {
    //update products
    setProducts (state, payload){
        state.products = payload
    }
}

const actions = {
   async getProducts ({commit} ){
        const { data} = await axios.get("http://127.0.0.1:3000/products");
        commit("setProducts",data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}