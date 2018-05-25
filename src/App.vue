<template>
  <div class="container-fluid" id="app">
    <top-nav></top-nav>
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import TopNav from "./components/Top-nav/Top-nav";
import Navigation from "./components/Navigation/Navigation";
export default {
  name: "App",
  components: {
    TopNav,
    Navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202b35;
  margin: 0;
  padding: 0 !important;
}

</style>
