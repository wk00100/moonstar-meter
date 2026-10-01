// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import './assets/font/font.css'

import './assets/main.scss'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router'
import { useProductData } from './composables/useProductData'
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
  faBars,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faPhone,
  faLocationDot,
  faLink,
  faEnvelope,
  faPrint,
  faSortDown,
  faAnglesLeft,
  faBars,
  faAnglesRight
)

// vite-ssg calls this at build time (prerender) and in the browser (hydrate).
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  async ({ app }) => {
    app.use(createPinia())
    app.component('font-awesome-icon', FontAwesomeIcon)

    // Data must be ready before rendering so the prerendered HTML and the
    // first client render match (otherwise hydration mismatches).
    await useProductData().loadProductData()
  }
)
