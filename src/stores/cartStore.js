// 封装购物车模块
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, getNewestCartListAPI } from "@/apis/cart";
export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    // 根据token判断用户是否登录
    const isLogin = computed(() => userStore.userData.token);
    /* 定义state */
    const cartList = ref([]);

    /* 定义action */
    // 1. 添加购物车
    const addCart = async (goods) => {
      // console.log(goods);
      alert('9999')
      // 添加购物车操作
      if (isLogin) {
        console.log(isLogin + "登录了");
        // 登录的话走登录后的逻辑
        await insertCartAPI(goods);
        const { data } = await getNewestCartListAPI();
        console.log(data.result);
        cartList.value = data.result;
        console.log("登录了哈哈啊哈哈哈哈啊哈");
      } else {
        // 未登录走未登录的逻辑
        console.log(isLogin + "没有登录");
        // 已添加过 - count++
        const item = cartList.value.find((item) => {
          return item.skuId === goods.skuId;
        });
        if (item) {
          item.count++;
        } else {
          // 没有添加过 - 直接push
          cartList.value.push(goods);
        }
      }
    };
    // 2.删除单项
    const delCart = (skuId) => {
      const index = cartList.value.findIndex((item) => item.skuId === skuId);
      if (index !== -1) {
        cartList.value.splice(index, 1);
      }
    };
    // 3.单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    // 4.全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    /* 计算属性 */
    // 1.总的数量 所有项的count之和
    const counts = computed(() =>
      cartList.value.reduce((acc, cur) => acc + cur.count, 0)
    );
    // 2.总价 所有项的count*price之和
    const totalPrice = computed(() =>
      cartList.value.reduce(
        (acc, cur) => acc + cur.count * Number(cur.price),
        0
      )
    );
    // 3.是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    // 4. 已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((acc, cur) => acc + cur.count, 0)
    );
    // 5. 已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((acc, cur) => acc + cur.count * Number(cur.price), 0)
    );
    return {
      cartList,
      counts,
      totalPrice,
      isAll,
      selectedCount,
      selectedPrice,
      isLogin,
      addCart,
      delCart,
      singleCheck,
      allCheck,
    };
  },
  {
    persist: true,
  }
);
