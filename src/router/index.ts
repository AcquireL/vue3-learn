import { createRouter, createWebHistory } from 'vue-router';

// 定义路由配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'), // 懒加载组件
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
    },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 模式
    routes,
});

export default router;
