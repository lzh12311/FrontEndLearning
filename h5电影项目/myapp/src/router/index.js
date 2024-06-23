import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/film",
        component: () => import("../view/FilmView")
    },
    {
        path: "/account",
        component: ()=> import ("../view/AccountView")
    },
    {
        path: "/cinema",
        component: ()=> import ("../view/CinemaView")
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