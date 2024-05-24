### 响应式原理
#### 命令式和声明式框架
**思考一个问题**
页面中存在一个按钮，点击后将div内的文案修改为“你好”

```html
<body>
    <div>hello world</div>
    <button>按钮</button>
</body>
```
<details>
<summary>命令式代码实现</summary>
<pre>
<code>
&nbsp;
    const div = document.getElementsByTagName('div')[0]
    const btn = document.getElementsByTagName('button')[0]
    btn.onclick = function () {
        div.innerText = '你好'
    }
</code>
</pre>
</details>
<details>
<summary>声明式代码实现</summary>
<pre>
<code>
&nbsp;
    &lt;body&gt;
        &lt;div&gt;{{text}}&lt;/div&gt;
        &lt;button @click="() => { text = '你好' }">按钮&lt;/button&gt;
    &lt;/body&gt;
    &lt;script>
    export default {
        data() {
            return {
                text: 'hello world'
            }
        }
    }
    &lt;/script&gt;
&nbsp;
</code>
</pre>
</details>

命令式框架关注过程
声明式框架关注结果

#### 双向绑定的实现
```html
<body>
    <div id="app">
        <input type="text" />
        <h1></h1>
        <button>按钮</button> 
    </div>
</body>
<script>
    const input = document.getElementsByTagName('input')[0]
    const h1 = document.getElementsByTagName('h1')[0]
    const btn = document.getElementsByTagName('button')[0]
    var data = { text: '' }
</script>
```
#### 响应式数据的基本实现
```js
const data = { text: '' }
function effect () {
    document.body.innerText = data.text
}
``` 
**响应式数据的关键是拦截对象属性的设置和读取操作**

#### vue2与vue3响应式数据实现区别
vue2的实现：当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 **Object.defineProperty** 把这些 property 全部转为 getter/setter。

vue3的实现：当我们从一个组件的 data 函数中返回一个普通的 JavaScript 对象时，Vue 会将该对象包裹在一个带有 get 和 set 处理程序的 **Proxy** 中


vue3 proxy的实现
```js
// 初始数据
const data = { text: '' }
// 存储副作用函数的桶
const bucket = new Set()
// 对数据进行代理
const obj = new Proxy(data, {
    get(target, key) {
        bucket.add(effect)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        bucket.forEach(fn => fn())
        return true
    }
})

function effect () {
    document.body.innerText = obj.text
}

effect()

setTimeout(() => {
    obj.text = '你好'
}, 1000)
```

思考一下 这一段代码的问题
1. 副作用函数的名称被写死
```js
let activeEffect

function effect(fn) {
    activeEffect = fn
    fn()
}

effect(() => {
    document.body.innerText = obj.text
})

const obj = new Proxy(data, {
    get(target, key) {
        if (activeEffect) {
            bucket.add(activeEffect)
        }
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        bucket.forEach(fn => fn())
        return true
    }
})
```

2. 没有建立副作用函数和目标字段之前明确的关系
```js
const obj = new Proxy(data, {
    get(target, key) {
        console.log(activeEffect, 'activeEffect')
        // 没有副作用函数，容错处理 直接return
        if (!activeEffect) return target[key]
        // 判断桶中是否已经存在key与target的关联关系
        let depsMap = bucket.get(target)
            // 创建一个新的Map结构与 target 关联
        if (!depsMap) {
            bucket.set(target, (depsMap = new Map()))
        }
        // 判断当前Map数据中是否存在key与effect的关联关系
        let deps = depsMap.get(key)
        // 不存在的话 则新建一个Set 与 key关联
        if (!deps) {
            depsMap.set(key, (deps = new Set()))
        }
        // 最后将当前激活的副作用函数添加到bucket中
        deps.add(activeEffect)
        return target[key]
    },
    set (target, key, newVal) {
        target[key] = newVal

        // 获取bucket下对应的数据
        const depsMap = bucket.get(target)
        if (!depsMap) return
        // 根据key 获取副作用的执行函数
        const effects = depsMap.get(key)
        // 执行副作用函数
        effects && effects.forEach(fn => fn())
    }
})

effect(() => {
    document.body.innerText = obj.text
})
effect(() => {
    document.title = obj.a
})