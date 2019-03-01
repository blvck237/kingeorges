<template>
  <el-row>
    <el-col class="prodcard" :span="24">
      <!-- Card -->
      <el-card :body-style="{ padding: '0px' }">
        <router-link
          :to="{ name: 'ProductDetails', params: { product: product, name: product.name+product.model+' '+'details' }}"
        >
          <progressive-img
            :src="product.src"
            placeholder="./product.jpg"
            :blur="50"
            fallback="./product.jpg"
            class="image"
          />
        </router-link>

        <div>
          <!-- Product name -->
          <span class="prod-name">{{product.name}}</span>
          <!-- Product Rating -->
          <div class="prod-model">{{product.model}}</div>
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
              <el-button @click="addToCart(product)" type="text" class="action-btn">
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
  props: ["product"],
  data() {
    return {
      rating: null,
      currentDate: new Date()
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product).then(success => {
        this.$notify({
          title: "",
          message: product.name + " a été ajouté à votre panier!",
          type: "success"
          // position: 'bottom-right',
        });
      });
    }
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

.image {
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.image:hover {
  -moz-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>
