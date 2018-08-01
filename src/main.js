// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyAotALjGQaaMufKG98VFUfyk7RUXGNWyds",
  authDomain: "king-geor.firebaseapp.com",
  databaseURL: "https://king-geor.firebaseio.com",
  projectId: "king-geor",
  storageBucket: "king-geor.appspot.com",
  messagingSenderId: "479648737810"
})
export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

Vue.use(ElementUI, {
  locale
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
