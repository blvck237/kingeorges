<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- Navigation title -->
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <div class="nav-title">Nos Services</div>

        <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'embroidery' }}" index="1">
        Broderie
        </router-link>

        <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'conception' }}" index="2">
        Creation Graphique
        </router-link>

        <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'printmaking' }}" index="3">
         Gravure
        </router-link>

        <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'dgt-printing' }}" index="4">
        Impression Numerique
        </router-link>

        <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'offset-printing' }}" index="5">
         Impression Offset
        </router-link>

        <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'serigraphy' }}" index="6">
          Sérigraphie
        </router-link>

        <!-- <router-link tag="el-menu-item" :to="{ name: 'Products', params: { activeName: 'Conseil' }}" index="7">
          Conseil
        </router-link> -->

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