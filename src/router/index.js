import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "category/:id",
          name: "category",
          component: () => import("@/views/Category/index.vue"),
        },
        {
          path: "category/sub/:id",
          name: "subCategory",
          component: () => import("@/views/SubCategory/index.vue"),
        },
        {
          path: "detail/:id",
          name: "detail",
          component: () => import("@/views/Detail/index.vue"),
        },
        {
          path: "cartlist",
          name: "cartlist",
          component: () => import("@/views/CartList/index.vue"),
        },
        {
          path: "checkout",
          name: "checkout",
          component: () => import("@/views/Checkout/index.vue"),
        },
        {
          path: "pay",
          name: "pay",
          component: () => import("@/views/Pay/index.vue"),
        },
        {
          path: "paycallback",
          name: "paycallback",
          component: () => import("@/views/Pay/PayBack.vue"),
        },
        {
          path: "member",
          name: "member",
          component: () => import("@/views/Member/index.vue"),
          children: [
            {
              path: "",
              name: "userInfo",
              component: () => import("@/views/Member/components/UserInfo.vue"),
            },
            {
              path: "userOrder",
              name: "userOrder",
              component: () =>
                import("@/views/Member/components/UserOrder.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
