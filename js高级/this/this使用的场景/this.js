// var fn1 = function () {
//     console.log(this)
// }

// var obj = {
//     fn: function () {
//         console.log(this)
//     }
// }

// var fn2 = obj.fn

// fn1()
// fn2()

// function Fn() {
//     this.a = 1
//     console.log(this)
// }

// console.log(new Fn())

// obj.fn()

// this

var x = 2
function fn () {
    console.log(this.x)
}

var obj1 = {
    x: 1
}

var obj2 = {}

obj2.fn = fn

obj2.fn.call(obj1)  //call 指向第一个被调用的对象。因此是 1。
obj2.fn.call()  