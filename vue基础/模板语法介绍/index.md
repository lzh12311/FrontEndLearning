### 模板语法介绍
对于声明式框架，vue有一套自己的模板语法规范
#### 插值
基本用法
```html
<div>Message: {{ msg }}</div>
```
1. 双大括号会将数据解释为普通文本
2. 双大括号内部支持javascript表达式

#### 指令
基本用法
```html
<a v-bind:href="url"></a>
<a v-on:click="doSomething"></a>
```