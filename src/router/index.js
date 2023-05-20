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