const state ={
    carProducts:[]
}

const mutations={
    addToCart (state, payload){
        console.log(payload);
    }
}

export default {
    namespaced: true,
    state,
    mutations
}