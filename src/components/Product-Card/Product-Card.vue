<template>
  <el-row>
    <el-col class="prodcard" :span="24" >

      <!-- Card -->
      <el-card :body-style="{ padding: '0px' }">
        <img :src='src' class="image">
        <div>
            <!-- Product name -->
          <span class="prod-name">{{name}}</span>
          <!-- Product Rating -->
          <div class="prod-model">
            {{model}}
          </div>
          <div class="bottom clearfix">

            <!-- View button -->
            <el-col :span="12" class="button view-btn">
              <el-button type="text" class="button" icon="el-icon-view"></el-button>
            </el-col>

            <!-- Add to cart button -->
            <el-col :span="12" class="button cmd-btn">
              <el-button type="text" class="button">
                <i class="el-icon-goods el-icon-right"></i></el-button>
            </el-col>

          </div>
        </div>
      </el-card>

    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["name", "src", "model"],
  data() {
    return {
      rating: null,
      currentDate: new Date()
    };
  }
};
</script>


<style scoped>
@import "./Product-Card.scss";
</style>
