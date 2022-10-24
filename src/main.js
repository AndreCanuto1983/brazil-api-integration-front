import Vue from 'vue'
import App from './App.vue'

//VueRouter
import VueRouter from 'vue-router'
import router from './route/routes'

//BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//fortawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

//lightbox
import VueSilentbox from 'vue-silentbox'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  transition: "Vue-Toastification__fade",
  maxToasts: 3,
  newestOnTop: true,
  position: "bottom-right",
  timeout: 5000,
  // timeout: false,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false
};

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSilentbox)
Vue.use(Toast, options)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');