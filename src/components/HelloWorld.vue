<template>
  <div >
    <el-container>
      <el-header>
        <Navigation></Navigation>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            Main
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Navigation from "./Navigation/Navigation";
  export default {
    name: "HelloWorld",
    components: {
      Navigation
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
