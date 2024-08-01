import axios from "axios";
import { ElMessage } from 'element-plus'

const service = axios.create();

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
    return service(option);
}

export default request;