<template>
  <div class="container-fluid" id="app">
    <top-nav></top-nav>
    <navigation></navigation>
    <transition name="fade">
      <router-view/>
    </transition>
    <footer-nav class="footer"></footer-nav>
  </div>
</template>

<script>
import TopNav from "./components/Top-nav/Top-nav";
import Navigation from "./components/Navigation/Navigation";
import FooterNav from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    TopNav,
    Navigation,
    FooterNav
  }
};
</script>

<style>
@import "./app.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202b35;
  margin: 0;
  padding: 0 !important;
}

.footer {
  margin-top: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
