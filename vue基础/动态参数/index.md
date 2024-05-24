### 动态参数

基本写法
```html
<!-- 动态属性 -->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>


<!-- 动态事件 -->
<button v-on:[event]="event"> ... </button>

<!-- 简写 -->
<button @[event]="event"> ... </button>
```

对动态参数的约束
1. 动态参数的值要求是一个string类型，否则会被忽略。
2. 动态参数的表达式由于语法约束，不能有空格和引号，可以使用计算属性来解决。
3. 动态参数里面尽量不用大写字符，因为浏览器会把 attribute 名全部强制转为小写。