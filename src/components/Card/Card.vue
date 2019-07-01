<template>
  <el-card class="box-card">
    <h5 class="card-title">Recevez des infos</h5>
    <p>Recevez par email des informations concernants nos soldes, stocks, etc..</p>
    <el-input v-model="email" placeholder="Email" clearable></el-input>
    <el-button @click="subscribeNewsletter()">Inscription</el-button>
  </el-card>
</template>

<style scoped>
@import "./Card.scss";
</style>

<script>
export default {
  props: ["myProp"],
  data() {
    return {
      email: "",
      msg: ""
    };
  },
  methods: {
    subscribeNewsletter() {
      this.$parent.addToNewsletter(this.email);
    }
  }
};
</script>