<template>
  <div class="container">
    <div class="row">
      <img class="logo" src="../../assets/logo.png" />
    </div>

    <div class="row">
      <div class="col-md-6 login-form">
        <el-card class="box-card ">
          <el-input
            type="email"
            class="form-elmt form-input"
            placeholder="Email"
            v-model="email"
          ></el-input>
          <el-input
            type="password"
            class="form-elmt form-input"
            placeholder="Password"
            v-model="password"
          ></el-input>
          <el-button @click="login()" class="form-btn" color="primary"
            >Login</el-button
          >
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/db";
  export default {
    data() {
      return {
          email: 'test@test.com',
          password: 'test123'
      };
    },
    methods: {
      login() {
          auth.signInWithEmailAndPassword(this.email, this.password).then(success=>{
          console.log("Log: login -> success", success)
        this.$router.push("/admin/dashboard");
          }).catch(err=>{
            this.$notify({
            title: "",
            message: err.message,
            type: "error"
            // position: 'bottom-right',
          });
              console.log(err)
          })
      }
    }
  };
</script>

<style scoped>
  .logo {
    width: 10em;
    margin: 0 auto;
    margin-top: 5em;
  }

  .login-form {
    margin: 0 auto;
    margin-top: 5em;
  }

  .form-elmt {
    padding: 1em;
  }
  .form-input {
    margin: 0 auto;
    width: 100%;
  }
  .form-btn {
    margin: 0 auto;
    width: 100%;
  }
</style>
