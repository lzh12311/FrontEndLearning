import request from "./request.js"


export default {
    getTableData() {
        return request({
            url: '/home/getTableData',
            method: 'get',
            mock: false
        })
    },
    getCountData() {
        return request({
            url: '/home/getCountData',
            method: 'get',
            mock: false
        })
    },
};