### 箭头函数的写法
```js
// 传统函数的声明
function fn () {}
var fn = function () {}

// 箭头函数
var fn = () => {}

// 如果函数内有返回值
var fn = v => v + 1
// 返回值如果不是表达式
var fn = v => ({ obj: v })
```
### 箭头函数和普通函数的区别
1. this指向的问题
箭头函数本身是没有this的，他的this是从他作用域链的上一层继承来的，并且无法通过call和apply改变this指向
```js
// 第一题
var fn = function () {
  return () => { console.log(this.name) }
}
var obj1 = {
  name: '张三'
}
var obj2 = {
  name: '李四'
}
var name = '王五'
obj1.fn = fn
obj2.fn = fn
obj1.fn()()
obj2.fn()()
fn()()

// 第二题
var user = {
  name: '张三',
  fn: function () {
    var obj = {
      name: '李四'
    }
    var f = () => this.name
    return f.call(obj)
  }
}
```
2. 不能作为构造函数 没有prototype属性
3. 没有arguments对象
4. 不能使用yield命令，因此箭头函数不能用作 Generator 函数
### 箭头函数的实际运用
### 箭头函数相关面试题
```js
var name = 'window'
var obj = {
  name: 'obj',
  methods: () => {
    console.log(this.name)
  },
  fn: function (cb) {
    cb()
  }
}
obj.fn1 = function () {
  obj.fn(() => { console.log(this.name) })
}
var fn1 = obj.fn1
obj.methods()
obj.fn(() => { console.log(this.name) })
fn1()
obj.fn1()
```
### 函数新扩展的方法
1. 给函数的参数指定默认值
```js
// 使用短路运算来给默认值
function fn (x, y) {
  y = y || 1
  console.log('合计：'x + y)
}
// 与解构赋值默认值配合使用
function fn1 ({x, y = 1}) {
  console.log('合计：'x + y)
}
fn1({x: 1})
```
看一道习题
```js
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
console.log(m1())
console.log(m2())
console.log(m1({x: 3}))
console.log(m2({x: 3}))
```
2. 通过rest参数获取函数的多余参数
```js
function fn (x, ...y) {
  console.log(x)
  console.log(y)
}
fn(1, 2, 3, 4)
```