// banner轮播图业务相关代码封装
import { ref, onMounted } from 'vue';
import { getBannerAPI } from '@/apis/home';
export const useBanner = () => {
    const bannerList = ref([]);
    const getBannerList = async () => {
        try {
            const res = await getBannerAPI({ distributionSite: "2" });
            console.log(res);
            bannerList.value = res.data.result;
        } catch (err) {
            console.log(err);
        }
    };
    onMounted(async () => {
        await getBannerList();
    });
    return {
        bannerList
    }
}