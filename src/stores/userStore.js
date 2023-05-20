// 管理用户相关数据
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
export const useUserStore = defineStore(
  "user",
  () => {
    // 用户数据
    const userData = ref({});
    // 登录方法
    const login = async (data) => {
      const res = await loginAPI(data);
      console.log(res);
      userData.value = res.data.result;
    };
    // 退出时清除用户信息
    const clearUserInfo = () => {
      userData.value = {};
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
