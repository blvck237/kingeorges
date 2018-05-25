<template>
  <div class="container">
    <!-- Sidenav and carousel -->
    <section class="row">
      <div class="col-md-3 col-sm-12">
        <SideNav></SideNav>
      </div>
      <div class="col-md-9">
        <Carousel></Carousel>
      </div>
    </section>

    <!-- Ad slider and Image card -->
    <section class="row">

      <div class="col-md-3 col-sm-12">
        <Card></Card>
      </div>

      <div class="col-md-9">

        <div class="row">

          <div class="col-md-6">
            <ImageCard></ImageCard>
          </div>

          <div class="col-md-6">
            <ImageCard></ImageCard>
          </div>

        </div>

      </div>

    </section>

    <!-- Card and carousel -->
    <section class="row">

      <div class="col-md-3 col-sm-12">
        <h3 class="row-title">Autres produits</h3>
        <div class="fb-page" data-href="https://www.facebook.com/ImprimerieKingGeorges/" data-tabs="timeline, events" data-small-header="true"
          data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/ImprimerieKingGeorges/" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/ImprimerieKingGeorges/">Imprimerie King Georges</a>
          </blockquote>
        </div>
      </div>

      <div class="col-md-9">
        <h3 class="row-title">Nos produits</h3>
        <el-carousel indicator-position="none" :interval="10000" type="card" height="600px">
          <el-carousel-item v-for="item in 6" :key="item">
            <ProductCard class="col-md-12"></ProductCard>
          </el-carousel-item>
        </el-carousel>
      </div>

    </section>

    <section class="row">

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-truck"></i>
            </span>
            <b>Livraison gratuite</b>
          </div>
          Personalisez vos produits chez King Georges et faites vous les livrer gratuitement.
        </el-card>
      </div>

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-phone"></i>
            </span>
            <b>SUPPORT 7J/7</b>
          </div>
          Nous vous apportons de l'assisstance tous les jours de la semaine.
        </el-card>
      </div>

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-hand-holding-usd"></i>
            </span>
            <b>QUALITÉ-PRIX</b>
          </div>
          Nous vous offrons de le bonne qualité à des prix adorables.
        </el-card>
      </div>
    </section>

  </div>

</template>

<div id="fb-root"></div>
<script>
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=219101098821514&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

</script>

<script>
  import SideNav from "../components/SideNav/SideNav";
  import Carousel from "../components/Carousel/Carousel";
  import AdCarousel from "../components/Ad-Carousel/Ad-Carousel";
  import Card from "../components/Card/Card";
  import ProductCard from "../components/Product-Card/Product-Card";
  import ImageCard from "../components/Image-Card/Image-Card";
  import Slick from "vue-slick";
  export default {
    name: "Home",
    components: {
      SideNav,
      Carousel,
      Card,
      ProductCard,
      ImageCard,
      AdCarousel
    },
    data() {
      return {};
    },
    methods: {}
  };

</script>

<style src="" scoped>
  section {
    margin-top: 1rem;
  }

  .row-title {
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    font-size: 1.2em;
    border-bottom: 1px solid #dddddd;
    box-shadow: 0 1px 0 0 #ffffff;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-weight: 600;
    line-height: 1.1;
    color: #3f3f3f;
  }

  .service-card {
    padding: 10px;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
  }

  i {
    color: #fff;
    font-size: 1em;
    display: inline-block;
  }

  .card-title {
    margin: auto;
    font-size: 1.8em;
    margin: 0.5em;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    color: #3f3f3f;
  }

  .card-title h3 {
    font-size: 0.8em;
  }

  .icon-box {
    font-size: 1.5rem;
    line-height: 48px;
    height: 48px;
    width: 48px;
    background-color: #ffa200;
    border-radius: 50%;
    color: #ffffff;
    margin-right: 16px;
    display: inline-block;
    vertical-align: middle;
  }

</style>
