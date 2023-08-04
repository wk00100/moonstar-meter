// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import './assets/font/font.css'

import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faPhone,
  faLocationDot,
  faLink,
  faEnvelope,
  faPrint,
  faSortDown,
  faAnglesLeft,
  faBars
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone, faLocationDot, faLink, faEnvelope, faPrint, faSortDown, faAnglesLeft, faBars)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
