import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import Paginate from 'vuejs-paginate'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)

firebase.initializeApp({
  apiKey: 'AIzaSyD_ABd3kqdESDLSg_0GwNs7ZWBHvTjrDqQ',
  authDomain: 'vue-crm-2e9de.firebaseapp.com',
  databaseURL: 'https://vue-crm-2e9de.firebaseio.com',
  projectId: 'vue-crm-2e9de',
  storageBucket: 'vue-crm-2e9de.appspot.com',
  messagingSenderId: '803601149141',
  appId: '1:803601149141:web:42ec871c05255686edc65c',
  measurementId: 'G-67FM0GXBWH'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
