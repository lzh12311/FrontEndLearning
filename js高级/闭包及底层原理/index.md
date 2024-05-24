### 闭包
定义：能够访问到其他函数作用域中的对象的函数，称为闭包
```js
function books () {
    var book = '书包里面的书本'
    return function () {
        console.log(book)
    }
}
var bag = books()
bag()
```
分析过程
1. 全局执行上下文创建作用域链，作用域链包含了全局变量对象 [作用域链：[全局变量对象]]
2. books函数调用时创建作用域链，具体操作为先复制全局的作用域，然后创建活动对象AO推入当前作用域的顶端 [作用域链：[book活动变量, 全局变量对象]]，books函数执行完毕后当前作用域会被销毁
3. bag函数调用创建作用域，首先复制上层作用域[作用域链：[book活动变量, 全局变量对象]]，然后创建活动对象AO推入当前作用域的顶端[作用域链：[匿名函数func, book活动变量, 全局变量对象]]，bag函数执行完毕后当前作用域会被销毁


#### 面试中常问到的问题
1.如何在外部访问函数作用域内的变量，请手写一段代码进行验证 
2.分析一道面试题
```js
// function fn() {
//     var arr = []
//     for (var i = 0; i< 10; i++) {
//         arr[i] = function() {
//             return i
//         }
//     }
//     return arr
// }

function fn() {
    var arr = []
    for (var i = 0; i< 10; i++) {
        (function(i){
            arr[i] = function() {
                return i
            }
        })(i)
    }
    return arr
}
var arr = fn()
console.log(arr[0]())
var arr = fn()
console.log(arr[0]())
```

#### 闭包为什么会造成内存的泄露