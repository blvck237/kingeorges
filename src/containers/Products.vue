<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <el-card class="box-card">
          <div>
            <img src="../assets/products.jpg" alt>
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
        <el-tab-pane label="Broderie" name="embd">
          <transition name="fade">
            <section class="row">
              <ProductCard
                v-for="product in productList"
                v-if="testEmbd(product)"
                :key="product.index"
                :model="product.model"
                :src="product.src"
                :name="product.name"
                :product="product"
                class="col-3"
              ></ProductCard>
            </section>
          </transition>
        </el-tab-pane>

        <el-tab-pane label="Conception" name="conception">
          <section class="row">
            <ProductCard
              v-for="product in concProducts"
              v-if="testConc(product)"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Gravure" name="printmaking">
          <section class="row">
            <ProductCard
              v-for="product in concProducts"
              v-if="testPrtm(product)"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Impression Numerique" name="dgt-printing">
          <section class="row">
            <ProductCard
              v-for="product in concProducts"
              v-if="testDprt(product)"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Impression Offset" name="offset-printing">
          <section class="row">
            <ProductCard
              v-for="product in productList"
              v-if="testOprt(product)"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Serigraphie" name="serigraphy">
          <section class="row">
            <ProductCard
              v-for="product in productList"
              v-if="testSrgh(product)"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
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
    </section>-->
  </div>
</template>

<script>
import { db } from "../main";
import ProductCard from "../components/Product-Card/Product-Card";
export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {
      activeName: "embd",
      embdProducts: [],
      concProducts: [],
      prtmProducts: [],
      dprtProducts: [],
      oprtProducts: [],
      srghProducts: []
    };
  },
  methods: {
    getProducts() {
      var productList = [];
      db.collection("products")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(product => {
            productList.push(product.data());
          });
        });
      console.log("Prods: ", productList);
      return productList;
    },
    sortProducts() {
      let products = this.productList;
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].category.length; j++) {
          if (products[i].category[j].includes("embd"))
            this.embdProducts.push(products[i]);
          else if (products[i].category[j].includes("conc"))
            this.concProducts.push(products[i]);
          else if (products[i].category[j].includes("dprt"))
            this.dprtProducts.push(products[i]);
          else if (products[i].category[j].includes("prtm"))
            this.prtmProducts.push(products[i]);
          else if (products[i].category[j].includes("srgh"))
            this.srghProducts.push(products[i]);
          else if (products[i].category[j].includes("oprt"))
            this.oprtProducts.push(products[i]);
        }
      }
    },
    testOprt(product) {
      if (product.category === "oprt") return true;
    },
    testSrgh(product) {
      if (product.category === "srgh") return true;
    },
    testConc(product) {
      if (product.category === "conc") return true;
    },
    testPrtm(product) {
      if (product.category === "prtm") return true;
    },
    testEmbd(product) {
      if (product.category === "embd") return true;
    },
    testDprt(product) {
      if (product.category === "dprt") return true;
    }
  },
  beforeMount() {
    this.productList = this.getProducts();
    this.activeName = this.$route.params.activeName;
    console.log("Params: ", this.$route.params.activeName);
    this.sortProducts();
  },
  created() {
    this.activeName = this.$route.params.activeName;
  }
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