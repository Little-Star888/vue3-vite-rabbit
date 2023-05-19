import httpInstance from "@/utils/http";
export const getCategroyAPI = () => {
    return httpInstance.get('/home/category/head')
}