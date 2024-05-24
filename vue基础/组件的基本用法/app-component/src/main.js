import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 定义一个名为 my-component 的新组件
Vue.component('my-component', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<h1>这是一个全局组件</h1>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
