#### 组件注册
全局注册
```js
// 定义一个名为 my-component 的新组件
Vue.component('my-component', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<h1>这是一个全局组件</h1>'
})
```

局部注册
```js
// 组件A
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  }
}
```

#### 组件命名
在页面中使用时的命名
```html
<!-- kebab-case -->
<my-component />

<!-- PascalCase -->
<MyComponentName />
```

#### 数据隔离
定义组件data数据时，必须要是一个函数，这样可以实现数据隔离

```html
<!-- 子组件 my-button -->
<button @click="handleClick">计数{{count}}</button>

<!-- 父组件中引入 -->
<my-button />
<my-button />
<my-button />
```

#### props传递数据
通过Prop向子组件传递数据
```html
<!-- 父组件 -->
<blog-post title="标题" :tips="tips" />
```
```js
// blog-post 组件
export default {
  props: ['title', 'tips']
}
```
如果传入的prop很多，可以使用传入整体props对象
```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
<!-- 等价于 -->
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```