// 分类数据业务相关代码封装
import { getTopCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export const useCategory = () => {
    const route = useRoute();
    const topCategory = ref({});
    const getTopCategory = async (id = route.params.id) => {
        console.log(route.params.id);
        try {
            const { data } = await getTopCategoryAPI(id);
            // console.log(data);
            topCategory.value = data.result;
        } catch (err) {
            console.log(err);
        }
    };
    onMounted(() => getTopCategory());
    //目标：路由参数变化时 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => getTopCategory(to.params.id));
    return {
        topCategory
    }
}

