### Promise
Promise 是异步编程的一种解决方案

```js
const promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
})
```
Promise的三种状态
待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
已兑现（fulfilled）: 意味着操作成功完成。
已拒绝（rejected）: 意味着操作失败。
```js
// pending
new Promise((resolve, reject) => {})
// fulfilled
new Promise((resolve, reject) => { resolve('hello world') })
// rejected
new Promise((resolve, reject) => { reject('bad code') })
```

**Promise的状态一旦状态改变，就不会再变**
```js
// 思考这里的打印结果
new Promise((resolve, reject) => {
  reject('bad code')
  resolve('hello world')
}).then(val => {
  console.log(val)
}).catch(err => {
  console.log(err)
})
```

思考题：在不使用Promise的情况下，如果实现一个计数器将输入的2个数字相加，在间隔1s后，将所得结果再进行下一次计算

### promise相关的方法
#### Promise.resolve()
Promise.resolve()方法会返回一个状态为fulfilled的promise对象。
```js
Promise.resolve(2).then((val) => {
  console.log(val)
})
```
#### Promise.reject()
Promise.reject()方法返回一个带有拒绝原因的Promise对象。
```js
Promise.reject({ message: '接口返回错误' }).catch((err) => {
  console.log(err)
})
```
#### Promise.all()
Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）,返回一个promise实例。
```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => { 
    resolve('hello')
  }, 1000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('world')
  }, 2000);
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
```

### 面试题
```js
function fn () {
  return new Promise((resolve) => {
    console.log('Promise1')
    fn1()
    setTimeout(() => {
      console.log('Promise2')
      resolve()
      console.log('Promise3')
    }, 0);
  })
}
async function fn1() {
  var p = Promise.resolve().then(() => {
    console.log('Promise6')
  })
  await p.then(() => {
    console.log('Promise7')
  })
  console.log('end')
}
console.log('script')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
fn().then(() => {
  console.log('Promise4')
})
```

