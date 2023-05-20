import httpInstance from "@/utils/http";
// 订单结算接口
export const getCheckoutAPI = () => {
  return httpInstance.get(`/member/order/pre`);
};
