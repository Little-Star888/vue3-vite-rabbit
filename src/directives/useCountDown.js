// 封装倒计时函数

import { ref, computed, onUnmounted } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  // 1. 响应式的数据
  const time = ref(0);
  let timer = null;
  // 格式化时间 为 xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  // 2. 开启倒计时的函数
  const start = (currentTime) => {
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
  // 3. 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer);
  });
  return {
    formatTime,
    start,
  };
};
