import { defineStore } from "pinia";
import * as Vue from "vue";

function initState() {
    return {
        isCollapse: false,
        tags: [
            {
                path: "home",
                name: "home",
                label: "home",
                icon: "home"
            },
        ],
        // currentMenu: null,
        menuList: [],
        token: "",
        routerLink: [],
    }
};

export const useAllDataStore = defineStore("allData", () => {

    const state = Vue.ref(initState());
    Vue.watch(
        state,
        (newObj) => {
            if (!newObj.token) return;
            localStorage.setItem("store", JSON.stringify(newObj));
        },
        { deep: true }
    );


    function addMenu(router, type) {
        if (type === "refresh") {
            if (JSON.parse(localStorage.getItem("store"))) {
                state.value = JSON.parse(localStorage.getItem("store"));
                state.value.routerList = [];
            } else {
                return;
            }
        }
        const menu = state.value.menuList;
        const module = import.meta.glob("../views/**/*.vue");
        const routeArr = []
        menu.forEach(item => {
            if (item.children) {
                item.children.forEach(val => {
                    console.log(val)
                    let url = `../views/${val.url}.vue`;
                    val.component = module[url];
                    routeArr.push(val)
                })
            } else {
                let url = `../views/${item.url}.vue`;
                item.component = module[url];
                routeArr.push(item)
            }
        })
        routeArr.forEach(item => {
            state.value.routerLink.push(router.addRoute("main", item));
        })
    }

    function selectMenu(val) {
        if (val.name === "home") {
            // currentMenu = null;
        } else {
            let index = state.value.tags.findIndex((item) => item.name === val.name);
            index === -1 ? state.value.tags.push(val) : "";
        }
    }

    function updateMenu(tag) {
        let index = state.value.tags.findIndex((item) => item.name === tag.name);
        state.value.tags.splice(index, 1);
    }

    function updateMenuList(val) {
        state.value.menuList = val
    }

    return {
        state,
        addMenu,
        selectMenu,
        updateMenu,
        updateMenuList
    };
})