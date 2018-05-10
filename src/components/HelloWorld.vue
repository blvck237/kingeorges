<template>
  <div>
    <el-container>
      <!-- Page Header -->
      <el-header>
        <Navigation></Navigation>
      </el-header>

      <!-- Page Body -->
        <el-container>
          <el-main>
            <!-- Top page -->
            <el-row>
              <!-- Side menu navigation -->
              <el-col :span="8">
                <SideNav></SideNav>
              </el-col>

              <!-- Carousel -->
              <el-col :span="16">
                  <Carousel></Carousel>
              </el-col>
            </el-row>

            <!-- Mid Page -->
            <el-row>
              <!-- Email subscription -->
              <el-col :span="8">
              </el-col>

              <!-- Product cards + Carousel -->
              <el-col :span="16">
                <ProdCard></ProdCard>
              </el-col>
              
            </el-row>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>

  </div>
</template>

<script>
  import Navigation from "./Navigation/Navigation";
  import Carousel from "./Carousel/Carousel";
  import SideNav from "./SideNav/SideNav";
  import ProdCard from "./Product-Card/Product-Card";
  export default {
    name: "HelloWorld",
    components: {
      Navigation,
      Carousel,
      SideNav,
      ProdCard
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
