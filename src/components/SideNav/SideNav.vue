<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- Navigation title -->
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <div class="nav-title">Nos Services</div>

        <el-menu-item @click="navigateToProducts('embroidery')" index="1">
        Broderie
        </el-menu-item>

        <el-menu-item @click="navigateToProducts('conception')" index="2">
        Creation Graphique
        </el-menu-item>

        <el-menu-item @click="navigateToProducts('printmaking')" index="3">
         Gravure
        </el-menu-item>

        <el-menu-item @click="navigateToProducts('dgt-printing')" index="4">
        Impression Numerique
        </el-menu-item>

        <el-menu-item @click="navigateToProducts('offset-printing')" index="5">
         Impression Offset
        </el-menu-item>

        <el-menu-item @click="navigateToProducts('serigraphy')" index="6">
          Sérigraphie
        </el-menu-item>

      </el-menu>
    </el-col>

  </el-row>

</template>


<script>
  export default {
    methods: {
      navigateToProducts(type){
        this.$router.push({ name: 'Products', params: { activeName: type } })
      },
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