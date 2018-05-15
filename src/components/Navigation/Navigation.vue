<template>
  <div>
    <el-menu :default-active="8" :active-text-color="'#FFA200'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <img class="logo" src="../../assets/logo.png" alt="Logo Kingeorges">
      <el-menu-item index="1"><i class="el-icon-goods"></i></el-menu-item>
      <el-menu-item index="2"><i class="el-icon-search"></i></el-menu-item>
      <el-menu-item index="3">Contact</el-menu-item>
      <el-menu-item index="4">L'équipe</el-menu-item>
      <el-menu-item index="5">Références</el-menu-item>
      <el-menu-item index="6">Qui-sommes-nous?</el-menu-item>
      <el-submenu index="7">
        <template slot="title">Produits</template>
        <el-menu-item index="7-1">Imprimerie</el-menu-item>
        <el-menu-item index="7-2">Impression numerique</el-menu-item>
        <el-menu-item index="7-3">Serigraphie moderne</el-menu-item>
        <el-menu-item index="7-4">Broderie</el-menu-item>
        <el-menu-item index="7-5">Peinture</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">Accueil</el-menu-item>


    </el-menu>
    <div class="line"></div>
  </div>
</template>

<style scoped>
@import './Navigation.scss';
</style>
