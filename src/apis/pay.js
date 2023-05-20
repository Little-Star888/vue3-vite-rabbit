import httpInstance from "@/utils/http";
// 获取订单详情接口
export const getOrderDetailAPI = (id) => {
  return httpInstance.get(`/member/order/${id}`);
};
