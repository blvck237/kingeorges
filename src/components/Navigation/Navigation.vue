<template>
  <div>
    <el-menu :default-active="1" :active-text-color="'#FFA200'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Accueil</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Produits</template>
        <el-menu-item index="2-1">Imprimerie</el-menu-item>
        <el-menu-item index="2-2">Impression numerique</el-menu-item>
        <el-menu-item index="2-3">Serigraphie moderne</el-menu-item>
        <el-menu-item index="2-4">Broderie</el-menu-item>
        <el-menu-item index="2-5">Peinture</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" >Qui-sommes-nous?</el-menu-item>
      <el-menu-item index="4" >Références</el-menu-item>
      <el-menu-item index="5" >L'équipe</el-menu-item>
      <el-menu-item index="5" >Contact</el-menu-item>

    </el-menu>
    <div class="line"></div>

  </div>
</template>
