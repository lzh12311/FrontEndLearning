const state = {
    cartProducts: []
}

const mutations = {
    addToCart(state, payload) {
        state.cartProducts.push({
            ...payload,
            count: 1,
            isChecked: true,
            totalPrice: payload.price
        })
    }
}

const getters = {
    totalCount(state) {
        return state.cartProducts.reduce((sum, prod) => sum + prod.count, 0)
    },
    totalPrice() {
        return state.cartProducts.reduce((sum, prod) => sum + Number(prod.totalPrice), 0).toFixed(2)
    },
    checkedCount(state) {
        return state.cartProducts.reduce((sum, prod) => {
            if (prod.isChecked) {
                sum += prod.count
            }
            return sum;
        }, 0)
    },
    checkedPrice(state) {
        return state.cartProducts.reduce((sum, prod) => {
            if (prod.isChecked) {
                sum += Number(prod.totalPrice)
            }
            return sum
        }, 0).toFixed(2)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters
} 
