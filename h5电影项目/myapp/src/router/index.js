import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/film",
        component: () => import('../views/film'),
    },
]

export default new VueRouter ({
    routes,
    mode: "hash"
})