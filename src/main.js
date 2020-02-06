import Vue from 'vue'
import App from './App.vue'
import vClickOutside from 'v-click-outside'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(vClickOutside)
Vue.use(VueAwesomeSwiper, {
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
