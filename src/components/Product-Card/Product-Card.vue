<template>
  <el-row>
    <el-col class="prodcard" :span="24" >

      <!-- Card -->
      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/2.2.jpg" class="image">
        <div>
            <!-- Product name -->
          <span class="prod-name">Sac serigraphie</span>
          <!-- Product Rating -->
          <div class="prod-rating">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-off"></i>
          </div>
          <div class="bottom clearfix">

            <!-- Star button -->
            <el-col :span="5">
              <el-button type="text" class="button" icon="el-icon-star-on"></el-button>
            </el-col>

            <!-- Add to cart button -->
            <el-col :span="14">
              <el-button type="text" class="button mid-btn">
                <i class="el-icon-goods el-icon-right"></i>Ajouter au panier</el-button>
            </el-col>

            <!-- Add btn -->
            <el-col :span="5">
              <el-button type="text" class="button" icon="el-icon-plus"></el-button>
            </el-col>

          </div>
        </div>
      </el-card>

    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      };
    }
  };

</script>


<style scoped>
  @import "./Product-Card.scss";

</style>
