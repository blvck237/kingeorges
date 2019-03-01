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
        <el-tab-pane label="Broderie" name="embroidery">
          <transition name="fade">
            <section v-if="embdProducts.length > 0" class="row">
              <ProductCard
                v-for="product in embdProducts"
                :key="product.index"
                :model="product.model"
                :src="product.src"
                :name="product.name"
                :product="product"
                class="col-3"
              ></ProductCard>
            </section>
            <section v-else class="no-product">
              <h1>Cette rubrique est vide</h1>
            </section>
          </transition>
        </el-tab-pane>

        <el-tab-pane label="Creation Graphique" name="conception">
          <section v-if="concProducts.length > 0" class="row">
            <ProductCard
              v-for="product in concProducts"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
          <section v-else class="no-product">
            <h1>Cette rubrique est vide</h1>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Gravure" name="printmaking">
          <section v-if="prtmProducts.length > 0" class="row">
            <ProductCard
              v-for="product in prtmProducts"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
          <section v-else class="no-product">
            <h1>Cette rubrique est vide</h1>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Impression Numerique" name="dgt-printing">
          <section v-if="dprtProducts.length > 0" class="row">
            <ProductCard
              v-for="product in dprtProducts"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
          <section v-else class="no-product">
            <h1>Cette rubrique est vide</h1>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Impression Offset" name="offset-printing">
          <section v-if="oprtProducts.length > 0" class="row">
            <ProductCard
              v-for="product in oprtProducts"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
          <section v-else class="no-product">
            <h1>Cette rubrique est vide</h1>
          </section>
        </el-tab-pane>

        <el-tab-pane label="Serigraphie" name="serigraphy">
          <section v-if="srghProducts.length > 0" class="row">
            <ProductCard
              v-for="product in srghProducts"
              :key="product.index"
              :model="product.model"
              :src="product.src"
              :name="product.name"
              :product="product"
              class="col-3"
            ></ProductCard>
          </section>
          <section v-else class="no-product">
            <h1>Cette rubrique est vide</h1>
          </section>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
import ProductCard from "../components/Product-Card/Product-Card";
import * as _ from "lodash";
export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {
      activeName: "embroidery",
      embdProducts: [],
      concProducts: [],
      prtmProducts: [],
      dprtProducts: [],
      oprtProducts: [],
      srghProducts: []
    };
  },
  methods: {
    sortProducts() {
      this.oprtProducts = _.filter(this.$store.state.products, [
        "category",
        "oprt"
      ]);
      this.srghProducts = _.filter(this.$store.state.products, [
        "category",
        "srgh"
      ]);
      this.concProducts = _.filter(this.$store.state.products, [
        "category",
        "conc"
      ]);
      this.prtmProducts = _.filter(this.$store.state.products, [
        "category",
        "prtm"
      ]);
      this.embdProducts = _.filter(this.$store.state.products, [
        "category",
        "embd"
      ]);
      this.dprtProducts = _.filter(this.$store.state.products, [
        "category",
        "dprt"
      ]);
    }
  },
  created() {
    if (this.$route.params.activeName)
      this.activeName = this.$route.params.activeName;
    else this.activeName = "embroidery";
    this.sortProducts();
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

.no-product {
  padding: 15%;
  opacity: 0.5;
  font-size: 1.5em;
  font-family: "Open Sans", sans-serif;
}
</style>