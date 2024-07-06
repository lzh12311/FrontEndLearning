import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import { Button, Toast, List, Cell, Image as VanImage, ImagePreview, NavBar, Icon, Search } from "vant"

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Toast)
Vue.use(List)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(ImagePreview)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Search)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
