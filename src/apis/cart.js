import httpInstance from "@/utils/http";
// 添加购物车接口
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance.post(`/member/cart`, { skuId, count });
};

// 删除购物车单项接口
export const delCartAPI = (ids) => {
  if (!Array.isArray(ids)) {
    throw new Error("Parameter 'ids' must be an array.");
  }
  return httpInstance.delete(`/member/cart`, { data: { ids } });
};

// export const delCartAPI = (ids) => {
//   return httpInstance({
//     url: "/member/cart",
//     method: "DELETE",
//     data: {
//       ids,
//     },
//   });
// };

// 获取最新的购物车列表接口
export const getNewestCartListAPI = () => {
  return httpInstance.get(`/member/cart`);
};
