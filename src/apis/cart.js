import httpInstance from "@/utils/http";
// 添加购物车接口
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance.post(`/member/cart`, { skuId, count });
};
// 获取最新的购物车列表接口
export const getNewestCartListAPI = () => {
  return httpInstance.get(`/member/cart`);
};
