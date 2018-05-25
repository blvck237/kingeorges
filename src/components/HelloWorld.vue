<template>
  <div>
    <el-container  class="home container">
      <!-- Page Header -->
      <el-header>
        <Navigation></Navigation>
      </el-header>

      <!-- Page Body -->
        <el-container >
          <el-main>
            <!-- Top page -->
            <el-row class="top-page">
              <!-- Side menu navigation -->
              <el-col :span="6">
                <SideNav></SideNav>
              </el-col>

              <!-- Carousel -->
              <el-col :span="18">
                  <Carousel></Carousel>
              </el-col>
            </el-row>

            <!-- Mid Page -->
            <el-row class="mid-page">
              <!-- Email subscription card -->
              <el-col :span="6">
                <Card></Card>
                <AdCarousel></AdCarousel>
              </el-col>

              <!-- Product cards + Carousel -->
              <el-col :span="9">
                <ImageCard></ImageCard>
              </el-col>
              <el-col :span="9">
                <ImageCard></ImageCard>
              </el-col>
            </el-row>

          </el-main>


        </el-container>

          <Footer></Footer>
      </el-container>

  </div>
</template>

<script>
  import Navigation from "./Navigation/Navigation";
  import Carousel from "./Carousel/Carousel";
  import SideNav from "./SideNav/SideNav";
  import ProdCard from "./Product-Card/Product-Card";
  import Card from "./Card/Card";
  import ImageCard from "./Image-Card/Image-Card";
  import AdCarousel from "./Ad-Carousel/Ad-Carousel";
  import Footer from "./Footer/Footer";
  export default {
    name: "HelloWorld",
    components: {
      Navigation,
      Carousel,
      SideNav,
      ProdCard,
      Card,
      ImageCard,
      AdCarousel,
      Footer
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
.home{
  background-color: #F2F2F2;
  margin: 0 auto
}
.mid-page{
  margin-top: 1em
}
.el-col{
  padding: 1em
}

</style>
