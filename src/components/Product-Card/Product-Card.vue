<template>
  <el-row>
    <el-col class="prodcard" :span="24">
      <!-- Card -->
      <el-card :body-style="{ padding: '0px' }">
        <router-link
          :to="{ name: 'ProductDetails', params: { product: product, name: product.name+product.model+' '+'details' }}"
        >
          <progressive-img
            :src="src"
            placeholder=".../../assets/1.jpg"
            :blur="50"
            fallback=".../../assets/1.jpg"
            class="image"
          />
        </router-link>

        <div>
          <!-- Product name -->
          <span class="prod-name">{{name}}</span>
          <!-- Product Rating -->
          <div class="prod-model">{{model}}</div>
          <div class="bottom clearfix">
            <!-- View button -->
            <el-col :span="12" class="button">
              <router-link
                tag="a"
                :to="{ name: 'ProductDetails', params: { product: product, name: product.name+product.model+' '+'details' }}"
              >
                <el-button type="text" class="action-btn" icon="el-icon-view"></el-button>
              </router-link>
            </el-col>

            <!-- Add to cart button -->
            <el-col :span="12" class="button cmd-btn">
              <el-button type="text" class="action-btn">
                <i class="el-icon-goods el-icon-right"></i>
              </el-button>
            </el-col>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["name", "src", "model", "product"],
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

.action-btn {
  width: 100%;
}

.action-btn:hover {
  color: #ffffff;
}
</style>
