// 管理用户相关数据
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { mergeCartListAPI } from "@/apis/cart";
import { useCartStore } from "./cartStore";
export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 用户数据
    const userData = ref({});
    // 登录方法
    const login = async (data) => {
      console.log(cartStore.cartList);
      const res = await loginAPI(data);
      // console.log(res);
      userData.value = res.data.result;
      await mergeCartListAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.updateCartNewList();
    };
    // 退出时清除用户信息
    const clearUserInfo = () => {
      userData.value = {};
      cartStore.clearCart();
    };
    return {
      clearUserInfo,
      userData,
      login,
    };
  },
  {
    persist: true,
  }
);
