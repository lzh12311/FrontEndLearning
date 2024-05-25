### vue-router的介绍
在之前的学习中，我们可以使用vue来创建单页应用，那么如何根据不同的 url 地址展示不同的内容或页面？

Vue Router 是 Vue.js (opens new window)官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
- 嵌套路由映射
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细致的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为
- URL 的正确编码

### 动态路由匹配
需要把某种模式匹配到的所有路由，全都映射到同个组件，可以实现组件的复用。

```js
// 某个仓库组件中通过id来区分仓库的内容

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/storehouse/:id', component: Storehouse }
  ]
})
```

### 嵌套路由

URL 中各段动态路径也按某种结构对应嵌套的各层组件
```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'user',
          component: User
        },
        {
          path: 'storehouse',
          component: Storehouse
        }
      ]
    }
  ]
})
```

### 路由跳转的方式
#### 声明式路由
组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 a 标签.
#### 编程式导航
router.push
```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'user', query: { userId: '123' }})
```
router.replace
与router.push方法类似，通过替换历史堆栈中的当前路由，以编程方式导航到一个新的 URL。

router.resolve
返回路由地址的标准化版本。
```js
const url = router.resolve({ path: 'user', query: { userId: '123' }})
```

router.go
```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

### 导航守卫
导航守卫包含：
- 全局前置守卫(router.beforeEach)
- 全局后置守卫(router.afterEach)
- 全局解析守卫(router.beforeResolve)
- 路由独享的守卫(在路由配置上直接定义 beforeEnter 守卫)
- 组件内的守卫(组件内定义守卫)

#### 完成的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫(2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

#### 全局前置守卫
```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  
})
```
#### 全局后置守卫
```js
router.afterEach((to, from) => {
  // ...
})
```

### 路由懒加载
路由懒加载可以实现在访问的时候去加载对应的组件，并且通过懒加载的方式实现代码的分包

```js
const router = new VueRouter({
  routes: [{ path: '/foo', component: () => import('./Foo.vue') }]
})
```