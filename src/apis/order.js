import httpInstance from "@/utils/http";
// 我的订单接口
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrderAPI = (params) => {
  return httpInstance.get(`/member/order`, { params });
};

// export const getUserOrderAPI = (params) => {
//   return httpInstance({
//     url: "/member/order",
//     method: "GET",
//     params,
//   });
// };
