import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/film",
        component: () => import("../view/FilmView")
    },
    {
        path: "*",
        redirect: "/film" 
    },

]

export default new VueRouter ({
    routes,
    mode: "hash"
})