### 手写call、apply、bind方法
#### call方法
- 原理：

1. 首先，通过 `Function.prototype.myCall` 将自定义的 `myCall` 方法添加到所有函数的原型对象上，使得所有函数实例都可以调用该方法。
2. 在 `myCall` 方法内部，首先通过 `typeof this !== "function"` 判断调用 `myCall` 的对象是否为函数。如果不是函数，则抛出一个类型错误。
3. 然后，判断是否传入了上下文对象 `context`。如果没有传入，则将 `context` 赋值为全局对象；ES11 引入了 `globalThis`，它是一个统一的全局对象，无论在浏览器还是 `Node.js` 中，都可以使用 `globalThis` 来访问全局对象。
4. 接下来，使用 `Symbol` 创建一个唯一的键 `fn`，用于将调用 `myCall` 的函数绑定到上下文对象的新属性上。
5. 将调用 `myCall` 的函数赋值给上下文对象的 `fn` 属性，实现了将函数绑定到上下文对象上的效果。
6. 调用绑定在上下文对象上的函数，并传入 `myCall` 方法的其他参数 `args`。
7. 将绑定在上下文对象上的函数删除，以避免对上下文对象造成影响。
8. 返回函数调用的结果。

```js
Function.prototype.myCall = function (context, ...args) {
  // 判断调用myCall的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myCall - 被调用的对象必须是函数");
  }

  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis;

  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key");

  // this是调用myCall的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this;

  // 传入MyCall的多个参数
  const result = context[fn](...args);

  // 将增加的fn方法删除
  delete context[fn];

  return result;
}
```
#### apply方法
- 原理：apply的实现思路跟call类似，就是apply传入参数是以数组的形式传入，所以多了一步判断传入的参数是否为数组以及在调用方法的时候使用扩展运算符 `...` 将传入的参数数组 `argsArr` 展开
```js
Function.prototype.myApply = function (context, argsArr) {
  // 判断调用myApply的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myApply - 被调用的对象必须是函数")
  }

  // 判断传入的参数是否为数组
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("Function.prototype.myApply - 第二个参数必须是数组")
  }

  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis

  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key")

  // this是调用myApply的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this

  // 传入myApply的多个参数
  const result = Array.isArray(argsArr)
    ? context[fn](...argsArr)
    : context[fn]()

  // 将增加的fn方法删除
  delete context[fn]

  return result
}
```
#### bind方法
- 原理：

1. 首先，通过 `Function.prototype.myBind` 将自定义的 `myBind` 方法添加到所有函数的原型对象上，使得所有函数实例都可以调用该方法。
2. 在 `myBind` 方法内部，首先通过 `typeof this !== "function"` 判断调用 `myBind` 的对象是否为函数。如果不是函数，则抛出一个类型错误。
3. 然后，判断是否传入了上下文对象 `context`。如果没有传入，则将 `context` 赋值为全局对象；ES11 引入了 `globalThis`，它是一个统一的全局对象，无论在浏览器还是 `Node.js` 中，都可以使用 `globalThis` 来访问全局对象。
4. 保存原始函数的引用，使用 `_this` 变量来表示。
5. 返回一个新的闭包函数 `fn` 作为绑定函数。这个函数接受任意数量的参数 `innerArgs`。
6. 在返回的函数 `fn` 中，首先判断是否通过 `new` 关键字调用了函数。这里需要注意一点，如果返回出去的函数被当作构造函数使用，即使用 `new` 关键字调用时，`this` 的值会指向新创建的实例对象。通过检查 `this instanceof fn`，可以判断返回出去的函数是否被作为构造函数调用。这里使用 `new _this(...args, ...innerArgs)` 来创建新对象。
7. 如果不是通过 `new` 调用的，就使用 `apply` 方法将原始函数 `_this` 绑定到指定的上下文对象 `context` 上。这里使用 `apply` 方法的目的是将参数数组 `args.concat(innerArgs)` 作为参数传递给原始函数。
```js
Function.prototype.myBind = function (context, ...args) {
  // 判断调用myBind的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind - 被调用的对象必须是函数")
  }

  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis

  // 保存原始函数的引用，this就是要绑定的函数
  const _this = this

  // 返回一个新的函数作为绑定函数
  return function fn(...innerArgs) {
    // 判断返回出去的函数有没有被new
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs)
    }
    // 使用apply方法将原函数绑定到指定的上下文对象上
    return _this.apply(context,args.concat(innerArgs))
  }
}
```
