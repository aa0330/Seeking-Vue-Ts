import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:'/transition',
        children:[
            {
                path:'/waterfall',      // 瀑布流
                name:'waterfall',
                component:()=>import('@/views/fall.vue')
            },
            {
                path:'/dynamic',        // 组件
                name:'dynamic',
                component:()=>import('@/views/dynamic.vue')
            },
            {
                path:'/soltTest',       //  插槽
                name:'soltTest',
                component:()=>import('@/views/soltTest.vue')
            },{
                path:'/dynamicTest',
                name:'dynamicTest',
                component:()=>import('@/views/dynamicTest.vue')
            },{
                path:'/propsTest',
                name:'propsTest',
                component:()=>import('@/views/propsTest.vue')
            },{
                path:'/suspense',
                name:'suspense',
                component:()=>import('@/views/suspense.vue')
            },{
                path:'/teleport',
                name:'teleport',
                component:()=>import('@/views/teleport.vue')
            },{
                path:'/transition',
                name:'transition',
                component:()=>import('@/views/transitionTest.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;































