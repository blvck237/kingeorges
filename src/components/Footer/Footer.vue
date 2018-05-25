<template>
  <div class="footer">

    <div class="container">

      <div class="row">

        <div class="col-md-2 footer-link">
          <a href="">Accueil</a>
        </div>

        <div class="col-md-2 footer-link">
          <a href="">Produits</a>
        </div>

        <div class="col-md-2 footer-link">
          <a href="">Qui Sommes-nous?</a>
        </div>

        <div class="col-md-2 footer-link">
          <a href="">Références</a>
        </div>

        <div class="col-md-2 footer-link">
          <a href="">L'équipe</a>
        </div>

        <div class="col-md-2 footer-link">
          <a href="">Contact</a>
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
    name: "footer",
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };

</script>
