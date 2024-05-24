#### v-if
用于条件性的渲染内容，只有在表达式结果为truthy才会渲染
```html
<!-- 基本语法 -->
<h1 v-if="n">hi Vue!</h1>

<!-- 搭配v-else-if和v-else一起使用 -->
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
<!-- 注意：v-else-if和v-else必须紧跟在v-if后面 -->
```
template可以看作一个不可见的包裹元素，一般用于判断条件中代码块的包裹

#### 用 key 管理可复用的元素
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>

<button>切换显示内容</button>
```
#### v-show
用于条件性的渲染内容，区别在于v-show内部内容通过css样式来控制显示与隐藏