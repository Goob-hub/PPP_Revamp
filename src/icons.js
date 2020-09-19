import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faCircle, faInfinity, faPlay, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebookF, faRedditAlien } from '@fortawesome/fontawesome-free-brands'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';

library.add(faCircle, faTimes, faInfinity, faTwitter, faInstagram, faRedditAlien, faFacebookF, faSquareFull, faPlay, faStar)

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component('fa-layer', FontAwesomeLayers);
Vue.component('fa-layer-text', FontAwesomeLayersText);