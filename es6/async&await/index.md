### async函数
async的出现让我们可以用一种更简洁的方式写出基于Promise的异步行为
```js
function p () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('异步结果')
    }, 1000)
  })
}
```
async函数的返回值为一个promise，通过then和catch来捕获内部的返回值
```js
async function fn () {
  return 'hello world' 
}
```

### 特性
1. async函数内部会返回一个promise对象，如果看起来不是promise，那么它将会隐式的包装在promise中
2. await能获取到promise状态改变后的值，如果后面不是一个promise，await 会把该值转换为已正常处理的Promise
3. await后面promise的状态是reject，则await后的代码不会执行，async函数将返回状态为reject的promise
4. async函数内部如果存在await，await表达式会暂停整个async函数的执行，等当前位置promise状态改变后才能恢复
```js
async function fn () {
  setTimeout(function () {
    console.log(1)
  }, 0)
  Promise.resolve().then(() => console.log(4))
  await setTimeout(function () {
    console.log(5)
  }, 0)
  await Promise.resolve().then(() => console.log(6))
  Promise.resolve().then(() => console.log(7))
  console.log(3)
}
fn() 
// 3  4 67 15 
```