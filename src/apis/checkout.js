import httpInstance from "@/utils/http";
// 订单结算接口
export const getCheckoutAPI = () => {
  return httpInstance.get(`/member/order/pre`);
};

// 生成订单id接口
export const createOrderAPI = (data) => {
  return httpInstance.post(`/member/order`, data);
};
