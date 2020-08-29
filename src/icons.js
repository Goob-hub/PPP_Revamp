import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

library.add(faPizzaSlice)

Vue.component('fa-icon', FontAwesomeIcon);