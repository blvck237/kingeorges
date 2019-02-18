<template>
  <div class="container">
    <!-- Sidenav and carousel -->
    <section class="row">
      <div class="col-md-3 col-sm-12">
        <SideNav></SideNav>
      </div>
      <div class="col-md-9">
        <Carousel :images="carouselImages"></Carousel>
      </div>
    </section>

    <!-- Ad slider and Image card -->
    <section class="row">

      <div class="col-md-3 col-sm-12">
        <Card ref="ImageCard"></Card>
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
        <h3 class="row-title">Reseau social</h3>
        <div class="fb-page" data-href="https://www.facebook.com/ImprimerieKingGeorges/" data-height="550" data-tabs="timeline, events"
          data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/ImprimerieKingGeorges/" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/ImprimerieKingGeorges/">Imprimerie King Georges</a>
          </blockquote>
        </div>
      </div>

      <div class="col-md-9">
        <h3 class="row-title">Nos produits</h3>
        <el-carousel indicator-position="none" :interval="5000" type="card" height="600px">
          <el-carousel-item v-for="product in productList" :key="product.index">
            <ProductCard :model='product.model' :src="product.src" :name="product.name" :product="product" class="col-md-12"></ProductCard>
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
  import {
    db
  } from '../main'
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
      return {
        productList:[] = this.getProducts(),
        carouselImages:[] = this.getCarouselImages(),
      };
    },
    methods: {
      getProducts() {
      var productList = [];
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((product) => {
        productList.push(product.data()) 
        });
      });
      console.log('TCL: getProducts -> productList', productList)
      return productList
    },
      getCarouselImages() {
      var carouselImaeges = [];
      db.collection("banner").get().then((querySnapshot) => {
        querySnapshot.forEach((carouselImage) => {
        carouselImaeges.push(carouselImage.data()) 
        });
      });
			console.log('TCL: getCarouselImages -> carouselImaeges', carouselImaeges)
      return carouselImaeges
    },
    displayMessage(msg, msgType) {
      this.$message({
        showClose: true,
        message: msg,
        type: msgType
      });
    },
    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    addToNewsletter(email) {
      var msg = "";
      var msgType = "";
      if (this.validateEmail(email)) {
        msg = "Vous avez souscris à notre newsletter avec succès",
        msgType = "success",
        db.collection("newsletter").doc().set({
          email: email
          }).then(
            email = "",
            this.displayMessage(msg, msgType)
        )
      } else {
        msg = "Entrez une adresse email valide!",
        msgType = "error",
        this.displayMessage(msg, msgType)
      }
      return false;
    },
    addToCart(){
      
    }
    },

    beforeMount (){
      this.getProducts();
      this.getCarouselImages();
    }

  };

</script>

<style src="" scoped>

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

  #myFooter {
    background-color: #3c3d41;
    color: white;
    padding-top: 30px;
  }

  #myFooter .footer-copyright {
    background-color: #333333;
    padding-top: 3px;
    padding-bottom: 3px;
    text-align: center;
  }

  #myFooter .row {
    margin-bottom: 60px;
  }

  #myFooter .navbar-brand {
    margin-top: 45px;
    height: 65px;
  }

  #myFooter .footer-copyright p {
    margin: 10px;
    color: #ccc;
  }

  #myFooter ul {
    list-style-type: none;
    padding-left: 0;
    line-height: 1.7;
  }

  #myFooter h5 {
    font-size: 18px;
    color: white;
    font-weight: bold;
    margin-top: 30px;
  }

  #myFooter h2 a {
    font-size: 50px;
    text-align: center;
    color: #fff;
  }

  #myFooter a {
    color: #d2d1d1;
    text-decoration: none;
  }

  #myFooter a:hover,
  #myFooter a:focus {
    text-decoration: none;
    color: white;
  }

  #myFooter .social-networks {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 16px;
  }

  #myFooter .social-networks a {
    font-size: 32px;
    color: #f9f9f9;
    padding: 10px;
    transition: 0.2s;
  }

  #myFooter .social-networks a:hover {
    text-decoration: none;
  }

  #myFooter .facebook:hover {
    color: #0077e2;
  }

  #myFooter .google:hover {
    color: #ef1a1a;
  }

  #myFooter .twitter:hover {
    color: #00aced;
  }

  #myFooter .btn {
    color: white;
    background-color: #ffa200;
    border-radius: 20px;
    border: none;
    width: 150px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    line-height: 25px;
  }

  @media screen and (max-width: 767px) {
    #myFooter {
      text-align: center;
    }
  }


  #myFooter {
    flex: 0 0 auto;
    -webkit-flex: 0 0 auto;
  }

</style>
