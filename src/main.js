import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/constants.scss'
import VueCarousel from 'vue-carousel'
import '@/icons.js'
import VueMobileDetection from 'vue-mobile-detection'


Vue.use(VueMobileDetection)

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

document.querySelector('html').style.background = "var(--clr1)";
