<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- Navigation title -->
      <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <div class="nav-title">Nos Services</div>
        <el-menu-item index="1">
          <span>Broderie</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>Conception</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <span>Creation Graphique</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>Gravure</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span>Impression Numerique</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span>Sérigraphie</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span>Conseil</span>
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

<style>
@import './SideNav.scss';
</style>
