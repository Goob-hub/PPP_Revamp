import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/constants.scss'
import '@/assets/css/mediaQuerys.scss'
import VueCarousel from 'vue-carousel'
import '@/icons.js'
import VueMobileDetection from 'vue-mobile-detection'
import animateDirective from '@/directives/animate.js'
import scrollAnimateDirective from '@/directives/scrollanimate.js'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VueEllipseProgress);

Vue.use(VueFullPage);

Vue.directive('animate', animateDirective);
Vue.directive('scrollanimation', scrollAnimateDirective);


Vue.use(VueMobileDetection);

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

document.querySelector('html').style.background = "var(--clr1)";
