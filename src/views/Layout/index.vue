<template>
  <div>
    <layout-fixed></layout-fixed>
    <layout-nav></layout-nav>
    <layout-header> </layout-header>
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <router-view></router-view>
    <layout-footer></layout-footer>
  </div>
</template>
<script setup>
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";
const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategoryList());
</script>