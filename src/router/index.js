import Vue from "vue";
import VueRouter from "vue-router";
import routeConfig from "./router";
import store from "../store";



//加载路由中间件
Vue.use(VueRouter)


//定义路由
const router = new VueRouter({
    routes: routeConfig,
})

// console.log(store,'store')

const { state } = store;

// console.log(state,'state')

//创建导航守卫
// router.beforeEach((to, from, next) => {
//     if (!state.isLogin && to.path !== '/login') {
//         next({
//             path: '/login'
//         })
//     }
// })

export default router