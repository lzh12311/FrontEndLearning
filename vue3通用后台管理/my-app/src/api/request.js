import axios from "axios";
import { ElMessage } from 'element-plus'
import config from "@/config";
const service = axios.create({
    baseURL: config.baseApi,
}
);

const netError = "Network error";
service.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
);


service.interceptors.response.use(
    (res) => {
        const { code, data, msg } = res.data;
        console.log(data)

        if (code === 200) {
            return data;
        } else {
            ElMessage.error(msg || netError);
            return Promise.reject(msg || netError);
        }
    }
);

function request(option) {
    option.method = "get";
    if (option.method.toLowerCase() === "get") {
        option.params = option.data;
    }
    let isMock = config.mock;
    if (typeof option.mock !== "undefined") {
        isMock === option.mock;
    }

    if (config.env === "prod") {
        service.defaults.baseURL = config.baseApi;
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
    }
    return service(option);
}

export default request;