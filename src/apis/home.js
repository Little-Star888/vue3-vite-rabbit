import httpInstance from "@/utils/http";
// 获取banner
export const getBannerAPI = (params = {}) => {
    // 默认为1,商品为2
    const { distributionSite = "1" } = params
    return httpInstance.get('/home/banner', { params: { distributionSite } })
}
// 获取新鲜好物
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
    return httpInstance.get('/home/new')
}
// 获取人气推荐

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance.get('/home/hot')
}

// 获取产品列表
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export const getProductAPI = () => {
    return httpInstance.get('/home/goods')
}