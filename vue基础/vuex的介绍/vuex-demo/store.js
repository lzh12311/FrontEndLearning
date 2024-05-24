const store = Vuex.createStore({
  state: {
    count: 1
  },
  getters: {
    counts: state => {
      return state.count * 2
    }
  },
  mutations: {
    increment (state) {
      setTimeout(() => {
        state.count++
      }, 1000)
     
    }
  },
  actions: {
    increment ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})