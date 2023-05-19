import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app) {
        // 懒加载逻辑指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:指定绑定的哪个元素 img
                // binding:binding.value 指令等于号后面绑定的表达式的值 图片url
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting);
                        if (isIntersecting) {
                            //进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }

        })
    }
}
