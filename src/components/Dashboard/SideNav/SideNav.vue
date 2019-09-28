<template>
    <div>
  <el-row class="tac">
  <div class="logo-container">
    <img class="logo" src="../../../assets/logo.png" />
  </div>
  <el-col class="sidenav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>Accueil</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-goods"></i>
        <span>Catalogue</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span>Proforma</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-star-on"></i>
        <span>Equipe</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="css" scoped>
  .tac{
    background-color: #545c64;
    height: 100%
  }
  .logo{
    width: 8em;
  }
  .logo-container{
    text-align: center;
    padding: 1em;
  }
</style>