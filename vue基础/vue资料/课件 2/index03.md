
### router 3.x与4.x的区别
官方文档 https://router.vuejs.org/zh/guide/migration/index.html


- 3.x使用new VueRouter创建，4.x使用createRouter创建
```js
// 3.x
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4.x
const router = VueRouter.createRouter({
  routes, // `routes: routes` 的缩写
})
```

- 3.x的路由模式传入的是mode值为'hash'和'history'，4.x传入的是history值为createWebHashHistory()和createWebHistory()
```js
// 3.x
const router = new VueRouter({
  mode: 'history', // mode: 'hash'
  routes: [...]
})

// 4.x
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // history: createWebHistory()
  routes,
})
```

- 3.x的挂载方式是通过router属性来挂载，4.x通过链式操作的方式进行挂载
```js
// 3.x
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 4.x
createApp(App).use(router).mount('#app')
```