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

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSilentbox)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');