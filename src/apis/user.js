// 封装所有和用户相关的接口
import httpInstance from "@/utils/http";
// 用户登录
export const loginAPI = ({ account, password }) => {
  console.log(account, password);
  return httpInstance.post(`/login`, { account, password });
};
// 猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance.get(`/goods/relevant`, { params: { limit } });
};
