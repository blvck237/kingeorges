<template>
  <div class="container">
    <el-row class="row" :gutter="20">
      <el-col :span="8">
        <img class="product-image" :src="product.src">
      </el-col>
      <el-col :span="16">
        <div class="product-info">
          <div class="product-name">
            {{this.product.name}}
            <!-- <span class="product-price">{{this.product.price}} XAF</span> -->
          </div>
          <div class="product-model">{{this.product.model}}</div>
          <div class="product-description">{{this.product.description}}</div>
          <el-button class="adc-btn" icon="el-icon-goods">Add to cart</el-button>
        </div>
      </el-col>
    </el-row>

    <section class="row">
      <div class="col-md-12">
        <h3 class="row-title">Produits similaires</h3>
        <ProductCard
          v-for="product in similarProducts"
          :key="product.index"
          :model="product.model"
          :src="product.src"
          :name="product.name"
          :product="product"
          class="col-md-4"
        ></ProductCard>
      </div>
    </section>
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
      product: {},
      similarProducts:[]
    };
  },
  methods: {
    getSimilarProducts() {
      var productList = [];
      db.collection("products")
        .where("category", "==", this.$route.params.product.category)
        .limit(6)
        .get()
        .then(similarProducts => {
          similarProducts.forEach(similarProduct => {
            productList.push(similarProduct.data());
            for (var i = 0; i < productList.length; i++) {
              if (productList[i].name === this.$route.params.product.name)
                productList.splice(i, 1);
            }
          });
        });
      return productList;
    }
  },
  beforeMount() {
    if(!this.$route.params.product.category){
			console.log('TCL: beforeMount -> product', 'product null')
      this.$router.push('/Home')
    }else{
      this.similarProducts = this.getSimilarProducts();
      this.product = this.$route.params.product;
    }
  }
};
</script>

<style>
.product-image {
  width: 100%;
}

.product-info {
  text-align: left;
}

.product-name {
  font-size: 2em;
  font-weight: bolder;
  color: #1b7200;
}

.product-model {
  font-size: 1.5em;
  font-weight: 500;
  color: #000;
}

.product-price {
  font-size: 0.5em;
  font-weight: bold;
  color: #ff5d00;
}

.product-description {
  font-size: 1em;
  color: #474747;
}

.adc-btn {
  margin-top: 5em;
  background: #ffffff;
  color: #ff5d00;
  border: 1px solid #ff5d00;
}

.adc-btn:hover {
  background: #ff5d00;
  color: #ffffff;
}
</style>