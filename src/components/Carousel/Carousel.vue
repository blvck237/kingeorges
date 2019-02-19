<template>
  <el-carousel :height="'27em'" :interval="5000" arrow="always">
    <el-carousel-item v-for="image in images" :key="image.index">
      <img style=" height: 100%;" :src=image.src>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
    };
  }
};
</script>

<style scoped>
@import "./Carousel.scss";
</style>