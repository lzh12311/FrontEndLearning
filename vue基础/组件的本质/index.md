#### 组件的本质
**组件就是一组 DOM 元素的封装**，本质就是一个对象

如何利用javascript来描述一个组件？
```js
const MyComponent = {
    render() {
        return {
            tag: 'div',
            props: {
                onClick: () => alert('hello')
            },
            children: 'click Me'
        }
    }
}

const vnode = {
    tag: MyComponent
}
```

如何修改渲染器的内容？
```js
function renderer(vnode, container) {
    // 判断当前的tag的类型，如果是对象，说明vnode tag描述的是组件
    if (typeof vnode.tag === 'string') {
        mountElement(vnode, container)
    } else if (typeof vnode.tag === 'object') {
        // vnode.tag是组件对象，调用它的render函数得到组件的渲染内容（虚拟 DOM）
        const subtree = vnode.tag.render()
        renderer(subtree, container)
    }
}

function mountElement(vnode, container) {
    // 使用vnode.tag作为标签名称创建 DOM 元素
    const el = document.createElement(vnode.tag)
    // 遍历 vnode.props，将属性 事件添加到 DOM 元素
    for (const key in vnode.props) {
        if (/^on/.test(key)) {
            // 如果key以on开头，说明它是事件
            el.addEventListener(
                // 事件名称 onClick 转为 click
                key.substr(2).toLowerCase(),
                vnode.props[key] // 事件处理函数
            )
        }
    }

    // 处理 children
    if (typeof vnode.children === 'string') {
        // 如果 children 是字符串，说明它是元素的文本子节点
        el.appendChild(document.createTextNode(vnode.children))
    } else if (Array.isArray(vnode.children)) {
        // 递归地调用 renderer 函数渲染子节点，使用当前元素 el 作为挂载点
        vnode.children.forEach(child => renderer(child, el))
    }

    // 将元素添加到挂载点下
    container.appendChild(el)
}
```