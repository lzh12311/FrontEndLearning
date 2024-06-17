const module = {
    state: {
        cityId: '310100',
        cityName: '上海'
    },
    mutations: {
        changeCityData(state, { name: cityName, cityId }) {
            state.cityId = cityId
            state.cityName = cityName
        }
    }
}

export default module