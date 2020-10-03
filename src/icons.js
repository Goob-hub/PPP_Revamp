import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faBackward, faBookOpen, faBriefcase, faCampground, faCircle, faHome, faHouseUser, faLongArrowAltRight, faMouse, faPhoneAlt, faSearchMinus, faSearchPlus, faShapes, faStar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebookF, faRedditAlien } from '@fortawesome/fontawesome-free-brands'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

library.add(faCircle, faTwitter, faInstagram, faRedditAlien, faFacebookF, faSquareFull, faStar, faLongArrowAltRight, faMouse, faKeyboard, faHome, faPhoneAlt, faBriefcase, faBookOpen, faKeyboard, faShapes, faCampground, faBackward, faHouseUser, faSearchPlus, faSearchMinus)

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component('fa-layer', FontAwesomeLayers);
Vue.component('fa-layer-text', FontAwesomeLayersText);