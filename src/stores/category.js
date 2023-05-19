import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getCategroyAPI } from '@/apis/layout';
export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([]);

    // action 获取导航列表数据的方法
    const getCategoryList = async () => {
        try {
            const res = await getCategroyAPI();
            categoryList.value = res.data.result;
        } catch (err) {
            console.log(err);
        }
    };
    return {
        categoryList,
        getCategoryList
    }
});