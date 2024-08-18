import { createRouter, createWebHashHistory } from "vue-router";

// 制定路由规则
const routes = [
    {
        path: "/",
        name: "main",
        component: () => import("@/views/main.vue"),
        children: []
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    }
];

const router = createRouter({
    // 设置路由的模式
    history: createWebHashHistory(),
    routes,
});

export default router;
