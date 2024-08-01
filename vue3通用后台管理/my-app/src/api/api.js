import request from "./request.js"


export default {
    getTableData() {
        return request({
            url: 'api/home/getTableData',
            method: 'get',
        })
    },
};