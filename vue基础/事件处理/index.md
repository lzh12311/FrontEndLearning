#### 绑定监听事件
使用v-on 指令监听 DOM 事件

```html
<!-- 事件处理的方法 -->
<!-- 点击按钮记录点击次数 -->
<div>
  <button>Add 1</button>
  <p>click {{ counter }} times</p>
</div>

对于复杂的事件操作，定义在methods中
```

#### 内联处理器中的方法
需要在事件中传入参数
```html
<div v-for="product in productList" :key="product.id">
    <p>商品名称：{{product.name}}</p>
    <p>商品价格：{{product.price}}</p>
</div>
```
注意：获取事件对象需要传入$event

在html上绑定的事件在vue内部已经做了处理，在ViewModel被销毁的时候，所有监听的事件会被解绑。