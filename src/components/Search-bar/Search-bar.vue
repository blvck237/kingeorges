<template>
  <div class="container">
    <div class="row search-bar">
      <el-autocomplete
        class="col-md-8 search-input"
        v-model="searchedProduct"
        suffix-icon="el-icon-search"
        placeholder="Rechercher un produit..."
        @select="handleSelect"
        :fetch-suggestions="searchProduct"
      ></el-autocomplete>
    </div>
  </div>
</template>

<style scoped>
@import "./Search-bar.scss";
</style>

<script>
export default {
  props: ["searchedProduct", "handleSelect", "searchProduct"],
  data() {
    return {};
  }
};
</script>


