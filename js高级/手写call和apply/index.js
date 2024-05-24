// Function.prototype.myCall = function (context, ...args) {
//     // 判断调用myCall是否为函数
//     if (typeof this !== 'function') {
//         throw new TypeError('被调用的对象必须是函数')
//     }
//     // 如果没有传入上下文对象，默认为全局对象
//     context = context || globalThis
//     // 用Symbol来创建唯一的fn，防止名字冲突
//     let fn = Symbol('key')
//     context[fn] = this
//     // 传入myCall方法的args
//     const result = context[fn](...args)
//     // 删除新增的fn方法
//     delete context[fn]
//     return result
// }

// var test = {
//     name: 'allen',
//     fn () {
//         console.log(this.name)
//     },
//     add (a, b) {
//         return a + b
//     }
// }

// const obj = {
//     name: '18'
// }

// // test.fn.myCall(obj) // 18
// // test.fn.call(obj) //18

// console.log(test.add.myCall(null, 1, 2))
// console.log(test.add.call(null, 1, 2))



// Function.prototype.myApply = function (context, argsArr) {
//     // 判断调用myApply是否为函数
//     if (typeof this !== 'function') {
//         throw new TypeError('被调用的对象必须是函数')
//     }
//     // 判断传入的参数是否为数组
//     if (argsArr && !Array.isArray(argsArr)) {
//         throw new TypeError('第二个参数必须要是数组')
//     }
//     // 如果没有传入上下文对象，默认为全局对象
//     context = context || globalThis
//     // 用Symbol来创建唯一的fn，防止名字冲突
//     let fn = Symbol('key')
//     context[fn] = this
//     // 传入myApply方法的args
//     const result = Array.isArray(argsArr) ? context[fn](...argsArr) : context[fn]()
//     // 删除新增的fn方法
//     delete context[fn]
//     return result
// }


// var test = {
//     name: 'allen',
//     fn () {
//         console.log(this.name)
//     }
// }

// const obj = {
//     name: '18'
// }

// test.fn.myApply(obj)
// test.fn.apply(obj)

// const arr = [2, 3, 6, 5, 1, 7]

// console.log(Math.max.myApply(null, arr))
// console.log(Math.max.apply(null, arr))




Function.prototype.myBind = function (context, ...args) {
    // 判断调用myBind是否为函数
    if (typeof this !== 'function') {
        throw new TypeError('被调用的对象必须是函数')
    }
    // 如果没有传入上下文对象，默认为全局对象
    context = context || globalThis
    // 保存原始函数的引用
    const _this = this
    return function fn (...innerArgs) {
        // 判断返回出去的函数是不是作为构造函数
        if (this instanceof fn) {
            return new _this(...args, ...innerArgs)
        }
        // 使用apply方法将原函数绑定到指定的上下文对象
        return _this.apply(context, args.concat(innerArgs))
    }
}


const test = {
    name: 'allen',
    hello: function (a, b, c) {
        console.log(`hello,${this.name}!`, a+b+c)
    }
}
const obj = {
    name: 'world'
}

var h1 = test.hello.myBind(obj, 1)
var h2 = test.hello.bind(obj, 1)
h1(2, 3)
h2(2, 3)

console.log(new h1(2, 3))
console.log(new h2(2, 3))