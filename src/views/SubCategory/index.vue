<script setup>
import { ref, onMounted } from "vue";
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import GoodsItem from "../Home/components/GoodsItem.vue";
const route = useRoute();
// 二级分类列表
const filterData = ref({});
const getCategoryFilter = async () => {
  try {
    const { data } = await getCategoryFilterAPI(route.params.id);
    console.log(data);
    filterData.value = data.result;
  } catch (err) {
    console.log(err);
  }
};
onMounted(() => getCategoryFilter());

// 商品列表
const itemList = ref([]);
const resData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSixe: 20,
  softFiled: "publishTime",
});
const getItemList = async () => {
  try {
    const { data } = await getSubCategoryAPI(resData.value);
    console.log(data);
    itemList.value = data.result.items;
  } catch (err) {
    console.log(err);
  }
};
onMounted(() => getItemList());
// onBeforeRouteUpdate((to) => getSubCategoryAPI(resData.value));

// tab切换回调函数
const tabChange = () => {
  resData.value.page = 1;
  getItemList();
};
const disabled = ref(false);
const load = async () => {
  // console.log(666);
  resData.value.page++;
  try {
    const { data } = await getSubCategoryAPI(resData.value);
    itemList.value = [...itemList.value, ...data.result.items];
    console.log(resData.value.page);
    if (data.result.items.length === 0) {
      console.log(666);
      disabled.value = true;
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }"
          >{{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="resData.softFiled" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <goods-item
          v-for="good in itemList"
          :key="good.id"
          :good="good"
        ></goods-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>