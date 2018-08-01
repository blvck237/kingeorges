<template>
  <div class="navigation">
    <div class="container">
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">
          <img class="d-inline-block align-top" src="../../assets/logo.png" alt="">
        </a>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link tag="a" class="nav-link" to="/home">Accueil</router-link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                Produits
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link tag="li" to="/products">Imprimerie</router-link>
                <router-link tag="li" to="/products">Serigraphie Moderne</router-link>
                <router-link tag="li" to="/products">Broderie</router-link>
                <router-link tag="li" to="/products">Impression numerique</router-link>
              </div>
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
              <a class="nav-link " href="#">
                <i class="el-icon-search"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                <i class="el-icon-goods"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@import "./Navigation.scss";
</style>
