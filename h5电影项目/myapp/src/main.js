import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import { Button, Toast, List, Cell, Image as VanImage, ImagePreview } from "vant"

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Toast)
Vue.use(List)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(ImagePreview)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
