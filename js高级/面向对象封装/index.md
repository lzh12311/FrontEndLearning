### 面向对象 OOP(Object Oriented Programming)
两大编程思想
1. 面向过程：首先分析出解决问题所需要的步骤，然后通过代码实现
2. 面向对象：功能封装在功能内部，实现功能通过调用对象方法来实现

#### 实现一个tabs标签页
面向过程
```js
var tabs = document.getElementById('tabs')

const arr = ['标签1', '标签2', '标签3']
arr.forEach(function (v) {
  var li = document.createElement('li')
  li.innerHTML = v
  tabs.appendChild(li)
})

tabs.onclick = function (ev) {
  var ev = ev || window.event;
  var target = ev.target || ev.srcElement;
  if(target.nodeName.toLowerCase() == 'li') {
    arr.forEach(function (v, index) {
      tabs.children[index].setAttribute('class', '')
    })
    target.setAttribute('class', 'active')
  }
}
```
面向对象
```js
function Tabs (arr, id) {
  this.tabs = document.getElementById(id)
  this.arr = arr
  this.init = function () {
    var tabs = this.tabs
    arr.forEach(function (v) {
      console.log(this.tabs)
      var li = document.createElement('li')
      li.innerHTML = v
      tabs.appendChild(li)
    })
    this.tabs.onclick = function (ev) {
      var ev = ev || window.event;
      var target = ev.target || ev.srcElement;
      if(target.nodeName.toLowerCase() == 'li') {
        arr.forEach(function (v, index) {
          tabs.children[index].setAttribute('class', '')
        })
        target.setAttribute('class', 'active')
      }
    }
  }
}
var tabs = new Tabs(['标签1', '标签2', '标签3'], 'tabs')
tabs.init()
```
面向对象编程的优势：
1. 在面向对象程序开发思想中，每一个对象都是功能中心，具有明确的分功
2. 面向对象编程具有灵活，代码可复用，容易维护和开发的优点，更适合多人合作的大型软件项目

**面想对象的3大特性**
封装，继承，多态

![组件通信的方式](./1.png)

#### 封装
1. 工厂模式
2. 构造函数模式
3. 原型模式

##### 构造函数模式
构造函数与工厂模式的区别（显示）
1. 没有显示的创建对象
2. 直接将属性和方法赋值给了this对象
3. 没有return语句

构造函数创建对象内部的处理
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象
3. 执行构造函数中的代码
4. 返回新对象

常见的面试题：如何区分数组和对象？

instanceOf 

##### 原型模式
什么是原型

protoType
