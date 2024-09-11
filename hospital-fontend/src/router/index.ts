// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router';
//引入可能要呈现的组件
import Home from '@/pages/home/index.vue';


//第二步：创建路由器
const router = createRouter({
    // 路由器工作模式
    //在制定路由的之后 一定要想好路由器的工作模式
    history: createWebHistory(),
    //配置路由规则
    routes: [
        // 配置路由
        {
            // 路由路径
            path: '/home',
            //组件
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
    ],
    //滚动行为：控制滚动条的位置
    scrollBehavior(){
        return {
            left: 0,
            top: 0
        }
    }
});

//暴露router
export default router;
