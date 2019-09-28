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
import TopNav from "../components/Top-nav/Top-nav";
import Navigation from "../components/Navigation/Navigation";
import FooterNav from "../components/Footer/Footer";
export default {
  components: {
    TopNav,
    Navigation,
    FooterNav
  }
};
</script>

<style>

</style>
