

// function fn () {
//     this.a = 'a'
// }
// fn()

// var bar = 1
// var obj = {
//     foo: function () {
//         console.log(this.bar)
//     },
//     bar: 2
// }
// obj.foo() // 2
// var foo = obj.foo
// foo() // 1


// var person = {
//     info: {},
//     init: function (name, age) {
//         this.info.name = name
//         this.info.age = age
//     }
// }

// person.init('allen', 18)
// console.log(person)

var obj = {
    fn: function () {
        console.log(this)
    }
}

var fn = obj.fn
fn()