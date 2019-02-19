<template>
  <div class="footer">

    <div class="container">

      <div class="row">

        <div class="col-md-2 footer-link">
          <router-link tag="a" to="/home">Accueil</router-link>
        </div>

        <div class="col-md-2 footer-link">
          <router-link tag="a" to="/products">Produits</router-link>
        </div>

        <div class="col-md-2 footer-link">
          <router-link tag="a" to="/about">Qui Sommes-nous?</router-link>
        </div>

        <div class="col-md-2 footer-link">
          <router-link tag="a" to="/reference">Références</router-link>
        </div>

        <div class="col-md-2 footer-link">
          <router-link tag="a" to="/team">L'équipe</router-link>
        </div>

        <div class="col-md-2 footer-link">
          <router-link tag="a" to="/contact">Contact</router-link>
        </div>


        <div class="col-md-12 logo">
          <a href="#">
            <img src="../../assets/logo.png" alt="" style="width: 15em;">
          </a>
        </div>
      </div>

    </div>

    <div class="bottom">
      <div class="row">

        <div class="col-md-12 ">
          Copyright &copy; {{year}} King Georges. All rights reserved
        </div>

      </div>
    </div>
  </div>
</template>

<style>
  @import "./Footer.scss";
</style>

<script>
  export default {
    name: "footer-nav",
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>