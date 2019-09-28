// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import VueFire from "vuefire";
import firebase from "firebase";
import "firebase/firestore";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import VueProgressiveImage from "vue-progressive-image";

import store from "./store/index";

Vue.use(VueProgressiveImage, {
  placeholder: "./assets/1.jpg"
});

Vue.use(VueFire);
const vue_fb = {};
vue_fb.install = function install(Vue, options) {
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  window.fbAsyncInit = function onSDKInit() {
    FB.init(options);
    FB.AppEvents.logPageView();
    Vue.FB = FB;
    window.dispatchEvent(new Event("fb-sdk-ready"));
  };
  Vue.FB = undefined;
};

Vue.use(vue_fb, {
  appId: "219101098821514",
  autoLogAppEvents: true,
  xfbml: true,
  version: "v2.9"
});


Vue.use(ElementUI, {
  locale
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: {
    App
  },
  template: "<App/>"
});
