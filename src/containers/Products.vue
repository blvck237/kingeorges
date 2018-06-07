<template>
  <div class="container">
    <div class="row">
    <product-card class="col-4"></product-card>    
    </div>
    
  </div>
</template>

<script>
import ProductCard from "../components/Product-Card/Product-Card";
export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>