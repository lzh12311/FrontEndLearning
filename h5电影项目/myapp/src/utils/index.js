import axios from "axios";
import { Toast } from "vant";

const http = axios.create({
    baseURL: "https://m.maizuo.com",
    timeout: 10000,
    headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}' }
});

http.interceptors.request.use(function (config) {
    Toast.loading({
        message: "Loading",
        forbidClick: true
    })
    return config;
},
    function (error) {
        return error;
    }
)

http.interceptors.response.use(function (response) {
    Toast.clear();
    return response;
}, function (error) {
    return error;
}
)

export default http;