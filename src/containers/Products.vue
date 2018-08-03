<template>
  <div class="container">

    <section class="row">
      <div class="col-12 ">
        <el-card class="box-card">
          <div>
            <img src="../assets/products.jpg" alt="">
            <div class="page-banner">
              <p class="page-title">Nos Produits</p>
              <p class="page-subtitle">Consultez notre catalogue</p>
            </div>
          </div>
        </el-card>
      </div>
    </section>

    <section>
      <el-tabs v-model="activeName">

        <el-tab-pane label="Broderie" name="embroidery">
          <section class="row">
            <ProductCard v-for="product in embroiderProducts" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
              class="col-3"></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Conception" name="conception">
          <section class="row">
            <ProductCard v-for="product in conceptionProducts" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
              class="col-3"></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Gravure" name="printmaking">
          <section class="row">
            <ProductCard v-for="product in printMarkingProducts" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
              class="col-3"></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Impression Numerique" name="dgt-printing">
          <section class="row">
            <ProductCard v-for="product in digitalPrintingProducts" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
              class="col-3"></ProductCard>
          </section>
        </el-tab-pane>


        <el-tab-pane label="Impression Offset" name="offset-printing">
          <section class="row">
            <ProductCard v-for="product in offsetPrintingProducts" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
              class="col-3"></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Serigraphie" name="serigraphy">
          <section class="row">
            <ProductCard v-for="product in serigraphyProducts" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
              class="col-3"></ProductCard>
          </section>
        </el-tab-pane>
      </el-tabs>
    </section>


    <!--     

    <section class="row">

    </section>

    <section class="row">
      <ProductCard v-for="product in productList" :key="product.index" :src="product.img" :model="product.model" :name="product.name"
        class="col-3"></ProductCard>
    </section> -->

  </div>
</template>

<script>
  import ProductCard from "../components/Product-Card/Product-Card";
  import '../db/products.json'
  export default {
    name: "Products",
    components: {
      ProductCard
    },
    data() {
      return {
        activeName: 'embroidery',
        productList: require('../db/products.json'),
        embroiderProducts: [],
        conceptionProducts: [],
        printMarkingProducts: [],
        digitalPrintingProducts: [],
        offsetPrintingProducts: [],
        serigraphyProducts: []
      };
    },
    methods: {
      sortProducts() {
        let products = require('../db/products.json')
        for (let i = 0; i < products.length; i++) {
          for (let j = 0; j < products[i].category.length; j++) {
            if (products[i].category[j].includes("Broderie"))
              this.embroiderProducts.push(products[i])
            else if (products[i].category[j].includes("Conception"))
              this.conceptionProducts.push(products[i])
            else if (products[i].category[j].includes("Impression numerique"))
              this.digitalPrintingProducts.push(products[i])
            else if (products[i].category[j].includes("Gravure"))
              this.printMarkingProducts.push(products[i])
            else if (products[i].category[j].includes("Serigraphie"))
              this.serigraphyProducts.push(products[i])
            else if (products[i].category[j].includes("Impressio offset"))
              this.offsetPrintingProducts.push(products[i])
          }

        }
        console.log('Conception: ', this.conceptionProducts)
        console.log('Digital: ', this.digitalPrintingProducts)
      }
    },
    beforeMount() {
      this.activeName = this.$route.params.activeName;
      console.log('Params: ', this.$route.params.activeName )
        this.sortProducts();
    },
    created() {
      this.activeName = this.$route.params.activeName;
    },

  };
</script>

<style>
  section {
    margin-top: 1em;
  }

  .el-tabs__active-bar {
    color: #ffa200 !important;
    background-color: #ffa200 !important;
  }

  .el-tabs__item.is-active {
    color: #ffa200 !important;
    font-weight: 700;
  }

  .el-tabs__item {
    font-family: "Open sans", sans-serif !important;
  }

  .el-tabs__item:hover {
    color: #ffa200 !important;
  }

  .page-banner {
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: #fff;
  }

  .page-title {
    font-family: "Oswald", sans-serif !important;
    font-weight: 500;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 4rem;
  }

  .page-subtitle {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 1rem;
  }

  .box-card {
    border: 1px solid #ccc;
    text-align: left;
  }

  .box-card img {
    width: 100%;
    height: 100%;
  }
</style>