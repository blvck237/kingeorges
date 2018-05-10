<template>
  <div >
    <el-container>
      <el-header>
        <Navigation></Navigation>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
              <SideNav></SideNav>
            <Carousel></Carousel>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Navigation from "./Navigation/Navigation";
  import Carousel from "./Carousel/Carousel";
  import SideNav from "./SideNav/SideNav";
  export default {
    name: "HelloWorld",
    components: {
      Navigation,
      Carousel,
      SideNav
    },
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
