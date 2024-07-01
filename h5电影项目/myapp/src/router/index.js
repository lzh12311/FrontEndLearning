import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/film",
        component: () => import("../view/FilmView"),
        children: [
            {
                path: "/film/nowplaying",
                component: () => import("../view/film/NowPlaying")

            },
            {
                path: "/film/comingsoon",
                component: () => import("../view/film/ComingSoon")
            }
        ]
    },
    {
        path: "/account",
        component: () => import("../view/AccountView")
    },
    {
        path: "/cinema",
        component: () => import("../view/CinemaView")
    },
    {
        path: "/detail",
        component: () => import("../view/DetailView")
    },
    {
        path: "*",
        redirect: "/film"
    },

]

export default new VueRouter({
    routes,
    mode: "hash"
})