<script setup>
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
const router = useRouter();
const userStore = useUserStore();
console.log("696:", userStore.userData.token);
const confirmEvent = () => {
  console.log("confirm!");
  userStore.clearUserInfo();
  router.push({ path: "/login" });
};
// const cancelEvent = () => {
//   console.log("cancel!");
// };
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userData.token">
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-user"></i
              >{{ userStore.userData.account }}</a
            >
          </li>
          <li>
            <el-popconfirm
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
              @confirm="confirmEvent"
              @cancel="cancelEvent"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li>
            <a
              href="javascript:;"
              @click="$router.push({ path: '/member/userOrder' })"
              >我的订单</a
            >
          </li>
          <li>
            <a href="javascript:;" @click="$router.push({ path: '/member' })"
              >会员中心</a
            >
          </li>
        </template>
        <template v-else>
          <li>
            <a href="javascript:;" @click="$router.push('/login')">请先登录</a>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>