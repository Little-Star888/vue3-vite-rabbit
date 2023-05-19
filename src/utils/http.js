// axios基础封装
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import "element-plus/theme-chalk/el-message.css";
import { useRouter } from "vue-router";
const router = useRouter();
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 2000,
});
// 拦截器

// 添加请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 在请求发送前可以做一些数据处理，例如添加 token
    const userStore = useUserStore();
    const token = userStore.userData.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpInstance.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  (res) => res,
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const userStore = useUserStore();
    ElMessage.error(error.response.data.message);
    if (error.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(error.response.data.message);
  }
);
export default httpInstance;
