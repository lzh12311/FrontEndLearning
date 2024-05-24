// const person1 = {
//     fn: function () {
//         console.log(this)
//     }
// }

// const person2 = {
//     name: 'person2'
// }
// person1.fn.call(person2)

// var arr = ["a", "b"]
// var els = [0, 1, 2]

// // arr.push(...els)
// arr.push.apply(arr, els)
// console.log(arr)


// const person1 = {
//     name: 'allen',
//     fn: function () {
//         console.log(this.name)
//     }
// }

// // const fn = person1.fn
// const fn = person1.fn.bind(person1)
// fn()


function fn (name) {
    console.log('hello,' + name)
}

const delayFn = fn.bind(null, 'kevin')
setTimeout(delayFn, 2000)