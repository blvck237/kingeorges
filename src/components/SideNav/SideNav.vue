<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- Navigation title -->
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <div class="nav-title">Nos Services</div>

        <el-menu-item index="1">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'embroidery' }}">Broderie</router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'conception' }}">Creation Graphique</router-link>
        </el-menu-item>

        <el-menu-item index="3">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'printmaking' }}">Gravure</router-link>
        </el-menu-item>

        <el-menu-item index="4">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'dgt-printing' }}">Impression Numerique</router-link>
        </el-menu-item>

        <el-menu-item index="5">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'offset-printing' }}">Impression Offset</router-link>
        </el-menu-item>

        <el-menu-item index="6">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'serigraphy' }}">Sérigraphie</router-link>
        </el-menu-item>

        <el-menu-item index="7">
          <router-link tag="a" :to="{ name: 'Products', params: { activeName: 'Conseil' }}">Conseil</router-link>
        </el-menu-item>

      </el-menu>
    </el-col>

  </el-row>

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
  };
</script>

<style scoped>
  @import "./SideNav.scss";
</style>