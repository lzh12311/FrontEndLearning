import http from '../../utils'

const module = {
    state: {
        cinemaList: []
    },
    mutations: {
        setCinemaList(state, cinemaList) {
            state.cinemaList = cinemaList
        }
    },
    actions: {
        getCinemaList({ commit }, cityId) {
            return http({
                url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=2500238`,
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(({ data }) => {
                commit('setCinemaList', data.data.cinemas)
            })
        }
    }
}

export default module