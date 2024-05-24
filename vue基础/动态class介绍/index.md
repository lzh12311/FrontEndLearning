#### 对象语法
基本语法
```html
<!-- 传入class对象 -->
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

<!-- v-bind:class 指令也可以与普通的 class attribute 共存 -->
<div
  class="static"
  v-bind:class="{ active: true, 'text-danger': false }"
></div>
```
可以动态修改class的值
```js
data: {
    return {
        classObj: {
            isaAtive: false,
            item: true
        }
    }
},
methods: {
    setActive() {
        this.classObj.isaAtive = !this.classObj.isaAtive
    }
}
```
可以绑定一个计算数据来实现
```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
#### 数组语法
基本语法
```html
<!-- 传入一个数组 -->
<div v-bind:class="[activeClass, errorClass]"></div>

<!-- 可以使用三元表达式 -->
<div v-bind:class="[isActive ? 'active' : '', 'text-danger']"></div>

数组中也可以使用对象语法
<div v-bind:class="[{ active: isActive }, 'text-danger']"></div>
```

**注意在组件上绑定class会添加到该组件的根元素上面**

#### 绑定内联样式
v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：
```html
<!-- 传入一个对象 -->
<div v-bind:style="{ color: red, fontSize: 30 + 'px' }"></div>
```