import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Toast, List, Cell, Image as VanImage, NavBar, Icon, Search, IndexBar, IndexAnchor } from 'vant';
import store from './store'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Toast)
Vue.use(List)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Search)
Vue.use(IndexBar)
Vue.use(IndexAnchor)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
