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
            <ProductCard :src="product.src" :name="product.name" class="col-md-12"></ProductCard>
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
        productList: [
          {
            name: "Stylo Acrylique",
            src: "https://firebasestorage.googleapis.com/v0/b/king-geor.appspot.com/o/products%2F1.1.jpg?alt=media&token=ad03a6ed-fed1-465a-b84b-d0f76223facb"
          },
          {
            name: "Sac en cotton",
            src: "https://firebasestorage.googleapis.com/v0/b/king-geor.appspot.com/o/products%2F2.2.jpg?alt=media&token=f379f6aa-ebf9-494e-b9d4-6b4220f30ee3"
          },
          {
            name: "Papier offset",
            src: "https://firebasestorage.googleapis.com/v0/b/king-geor.appspot.com/o/products%2F3.1.jpg?alt=media&token=6c310157-d144-419c-88a7-3455be8dbba7"
          },
          {
            name: "Carte de Visite",
            src: "https://firebasestorage.googleapis.com/v0/b/king-geor.appspot.com/o/products%2F4.1.jpg?alt=media&token=4f0a4f51-7608-42d4-8d02-bb0c50328877"
          },
          {
            name: "Chemise A4",
            src: "https://firebasestorage.googleapis.com/v0/b/king-geor.appspot.com/o/products%2F5.1.jpg?alt=media&token=b737a267-5181-42c5-af0b-a781a29a58e3"
          },
          {
            name: "T-shirt",
            src: "https://firebasestorage.googleapis.com/v0/b/king-geor.appspot.com/o/products%2F6.1.jpg?alt=media&token=1541caaf-5295-45ec-a72e-ccfa0defea7a"
          },
        ],
        products:[],
      };
    },
    firestore() {
      return {
      }
    },
    methods: {
      getProducts() {
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((product) => {
          this.products.push(product.data()) 
          console.log(`${product.id} => ${product.data()}`);
          console.log(this.products);
        });
      });
    }
    },

    beforeMount (){
      this.getProducts();
    }

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
