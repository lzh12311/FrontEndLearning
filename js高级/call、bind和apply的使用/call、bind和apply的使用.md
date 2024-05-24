### call、bind和apply的使用
#### call方法: 
语法： `function.call(thisArg, arg1, arg2, ...)`。  其中thisArg是要设置为函数执行上下文的对象，也就是this要指向的对象，从第二个参数开始，arg1, arg2, ... 是传递给函数的参数。通过使用call方法，可以将一个对象的方法应用到另一个对象上。

**注意**
如果省略第一个 thisArg 参数，则默认为 undefined。在非严格模式下，this 值将被替换为 globalThis（类似于全局对象）
```js
"use strict"
const person1 = {
    fn: function () {
        console.log(this)
    }
}

const person2 = {
    name: 'person2'
}
person1.fn.call()
```
#### apply
语法：`function.apply(thisArg, [argsArray])`。 其中thisArg是要设置为函数执行上下文的对象，也就是this要指向的对象，argsArray是一个包含参数的数组。通过使用apply方法，可以将一个对象的方法应用到另一个对象上，并使用数组作为参数。

#### bind
语法：`function.bind(thisArg, arg1, arg2, ...)`。 其中thisArg是要绑定到函数执行上下文的对象，也就是this要指向的对象，从第二个参数开始，arg1, arg2, ...是传递给函数的参数。与call和apply方法不同，bind方法并不会立即执行函数，而是返回一个新函数，可以稍后调用。这对于事件处理程序和setTimeout函数等场景非常有用。
```js
const person1 = {
    name: 'allen',
    fn: function () {
        console.log(this.name)
    }
}

const fn = person1.fn
fn() // undefined

// 改写成，this指向person1
// const fn = person1.fn.bind(person1)
```
对于解决定时器参数的问题
```js
function fn(name) {
    console.log("Hello, " + name);
}

const delayFn = fn.bind(null, 'kevin')
setTimeout(delayFn, 2000)
```

### call、bind、apply的区别
1. call和apply都是直接调用函数，bind不会立即调用
2. call和bind的参数为参数列表，apply的参数需要以数组的形式传递