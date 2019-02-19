<template>
  <div class="navigation">
    <div class="container">
      <nav class="navbar navbar-expand-md">
        <router-link tag="a" class="navbar-brand" to="/home">
          <img class="d-inline-block align-top" src="../../assets/logo.png" alt>
        </router-link>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link tag="a" class="nav-link" to="/home">Accueil</router-link>
            </li>

            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                :to="{ name: 'Products', params: { activeName: 'embroidery' }}"
              >Produits</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/about">Qui-sommes nous?</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/reference">Références</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/team">L'équipe</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <a @click="search = !search" class="nav-link" href="#">
                <i class="el-icon-search"></i>
              </a>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/cart"><i class="el-icon-goods"></i></router-link>
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <transition name="fade">
        <el-autocomplete
          v-show="search"
          class="search-input"
          type="search"
          placeholder="Search product..."
        ></el-autocomplete>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: false
    };
  }
};
</script>


<style scoped>
@import "./Navigation.scss";
</style>