### Event Loop(事件循环)
javascript是一门单线程的语言，它的异步和多线程都是通过Event Loop实现的

#### js的执行上下文
执行上下文分为3种
1. 全局执行上下文
2. 函数执行上下文
3. eval函数创建的执行上下文

### 宏任务与微任务
宏任务：setTimeout setInterval Ajax DOM事件
微任务：Promise

微任务的优先级 > 宏任务的

```js
function func1() {
  console.log(1)
}
function func2() {
  console.log(2)
  func1()
  console.log(3)
}
func2()
```
```js
var p = new Promise(resolve => {
  console.log(4)
  resolve(5)
})

function func1 () {
  console.log(1)
}

function func2() {
  setTimeout(() => {
    console.log(2)
  })
  func1()
  console.log(3)
  p.then(resolve => {
    console.log(resolve)
  }).then(() => {
    console.log(6)
  })
}
func2()
```


```js
async function async1 () {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2 () {
    console.log('async2')
}
console.log('script start')
setTimeout(() => {
    console.log('timeout')
}, 0)
async1()
new Promise(resolve => {
    console.log('promise1')
    resolve()
}).then(() => {
    console.log('promise2')
})
console.log('script end')
```
```js
var btn = document.getElementById('button')
btn.addEventListener('click', () => {
  Promise.resolve().then(() => console.log(1))
  console.log('listener 1')
})
btn.addEventListener('click', () => {
  Promise.resolve().then(() => console.log(2))
  console.log('listener 2')
})
```