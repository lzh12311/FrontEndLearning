### class的基本语法
class可以理解为是一个语法糖，将js只能通过构造函数创建实例的方法进行了补充
```js
function Person ({ name, age=18 }) {
  this.name = name
  this.age = age
}
new Person({name: '张三'})
```
将上述例子转为class写法如何来写？
```js
class Person {
  constructor ({ name, age=18 }) {
    this.name = name
    this.age = age
  }
}
new Person({name: '张三'})
```

### 深入了解class的特性
1. class的数据类型是一个函数
```js
typeof class A {}
```
2. class的原型的constructor指向class
```js
class A {}
A.prototype.constructor === A
```
3. 通过 new 关键字创建出的实例的constructor指向该class
```js
class A {}
var a = new A()
a.constructor === A
```
4. class内部的方法实际上都是定义在类的prototype上
```js
class A {
  fn () {}
  toString() {}
}

var a = new A()
```
5. 通过类创建对象的本质是调用类的constructor，如果类未定义constructor，则会在使用时默认添加
```js
class A {
}
// 等同于
class A {
  constructor() {}
}
```
6. class不能直接调用，需要通过new关键字

7. class内部方法指向的是实例,class内部是严格模式
```js
class Logger {
  printName(name = 'world') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

// 注意方法如果单独使用会报错，class内部是严格模式，所以 this 实际指向的是undefined

const logger = new Logger();
const { printName } = logger;
printName();

// 如果想要可以正常调用，可以使用箭头函数
class Logger {
  printName = (name = 'world') => {
    this.print(`Hello ${name}`);
  }

  print = (text) => {
    console.log(text);
  }
}
const logger = new Logger();
const { printName } = logger;
printName();
```
构造函数与class的区别？

### class的其他语法
取值函数（getter）和存值函数（setter）
```js
class A {
  get name () {
    return '1'
  }
  set name (value) {
    console.log('setter:'+value)
  }
}
```
类的属性名可以动态设置
```js
var methodName = 'methodName'
class A {
  [methodName] () {}
}
new A()
```
静态方法/属性
通过在属性和方法前添加static关键字，静态方法和属性不会被实例继承
```js
class A {}
A.a = 1
A.fn = function () {}

class A {
  static a = 1
  static fn () {
    
  }
}
```
静态方法里面的this指向的是类**而不是实例**
```js
class A {
  static fn () {
    this.getValue()
  }
  static getValue () {
    console.log('张三')
  }
  getValue() {
    console.log('李四')
  }
}
```
定义实例的属性
```js
class A {
  a = 1
  b = 'SUCCESS'
}
```
### class的继承
类的继承通过extends关键字
```js
class F {
  money = '100w'
  fn () {}
}
class S extends F{
}
```
子类中的constructor必须调用super，否则就会报错。
```js
class F {
  money = '100w'
  fn () {}
}
class S extends F{
  constructor () {}
}
```
子类调用super会触发父类的constructor并将参数传递过去
```js
class F {
  constructor (sMoney) {
    this.money = 100 + sMoney
  }
  fn () {}
}
class S extends F{
  constructor (money) {
    // 在super调用前子类是没有this，如果使用会报错
    super(money)
  }
}
console.log(new S(10))
```

类在继承时属性会被直接添加到实例中，方法则保留在类的原型上
S.prototype.__proto__ === F.prototype
```js
class F {
  money = '100w'
  fn () {}
}
class S extends F{
}
```