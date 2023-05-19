import httpInstance from "@/utils/http";
// 获取面包屑分类数据
export const getTopCategoryAPI = (id) => {
  return httpInstance.get(`/category`, { params: { id } });
};

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */
// 获取二级分类列表数据
export const getCategoryFilterAPI = (id) => {
  return httpInstance.get("/category/sub/filter", { params: { id } });
};

/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
// 获取导航数据
export const getSubCategoryAPI = (data) => {
  return httpInstance.post("/category/goods/temporary", { data });
};

// 删除单项
export const delItemAPI = (data) => {
  return httpInstance.delete("/member/cart", { data });
};
