import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebookF, faRedditAlien } from '@fortawesome/fontawesome-free-brands'

library.add(faCircle, faTwitter, faInstagram, faRedditAlien, faFacebookF)

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component('fa-layer', FontAwesomeLayers);
Vue.component('fa-layer-text', FontAwesomeLayersText);