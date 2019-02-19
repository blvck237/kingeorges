<template>
  <el-carousel :height="'27em'" :interval="5000" arrow="always">
    <el-carousel-item >
      <img style=" height: 100%;" src="../../assets/slider/1.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img style="height: 100%;" src="../../assets/slider/2.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img style="height: 100%;" src="../../assets/slider/3.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  
} 
</script>

<style scoped>
@import './Carousel.scss';
</style>