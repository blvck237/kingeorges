<template>
  <div class="container">
    <section class="row">
      <div class="col-12 ">
        <el-card class="box-card">
          <div>
            <img src="../assets/contact.jpg" alt="">
          </div>
        </el-card>
      </div>
    </section>


    <section class="contact-form">
      <div class="form-description">
        <h3>Formulaire de contact</h3>
        <p>Remplissez le formulaire et envoyez votre message</p>
      </div>
      <div class="row ">
        <el-input class="col-4" placeholder="Nom" v-model="name"></el-input>
        <el-input class="col-4" placeholder="Objet" v-model="subject"></el-input>
        <el-input class="col-4" placeholder="Email" v-model="email"></el-input>
      </div>

      <div class="row">
        <el-input class="col-12 textarea" type="textarea" :rows="6" placeholder="Votre message" v-model="message">
        </el-input>
      </div>

      <div class="row">
        <div class="text-center col-12">
          <el-button icon="el-icon-message" class="send-btn">Envoyer un Message</el-button>
        </div>
      </div>
    </section>

    <section class="row">

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-truck"></i>
            </span>
            <b>Livraison gratuite</b>
          </div>
          Personalisez vos produits chez King Georges et faites vous les livrer gratuitement.
        </el-card>
      </div>

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-phone"></i>
            </span>
            <b>SUPPORT 7J/7</b>
          </div>
          Nous vous apportons de l'assisstance tous les jours de la semaine.
        </el-card>
      </div>

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-hand-holding-usd"></i>
            </span>
            <b>QUALITÉ-PRIX</b>
          </div>
          Nous vous offrons de le bonne qualité à des prix adorables.
        </el-card>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        name,
        subject,
        email,
        message
      };
    }
  };

</script>

<style scoped>
  section {
    margin-top: 1em;
  }

  .service-card {
    padding: 10px;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
  }

  i {
    color: #fff;
    font-size: 1em;
    display: inline-block;
  }

  .card-title {
    margin: auto;
    font-size: 1.8em;
    margin: 0.5em;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    color: #3f3f3f;
  }

  .form-description {
    text-align: left;
    font-family: "Open Sans", sans-serif;
  }

  h3 {
    font-family: "Oswald", sans-serif;
    font-weight: 600;
  }

  .card-title h3 {
    font-size: 0.8em;
  }

  .icon-box {
    font-size: 1.5rem;
    line-height: 48px;
    height: 48px;
    width: 48px;
    background-color: #ffa200;
    border-radius: 50%;
    color: #ffffff;
    margin-right: 16px;
    display: inline-block;
    vertical-align: middle;
  }


  .send-btn {
    background: #FFA200;
    color: #fff;
    margin-top: 1rem;
  }

  .textarea {
    margin-top: 1rem;
  }

  .contact-form {
    background: #fff;
    padding: 20px;
  }

  .box-card {
    border: 1px solid #ccc;
  }

  .box-card img {
    width: 100%;
    height: 100%;
  }

  .box-card div {
    padding: 0 !important;
  }

  .el-card__body {
    padding: 10px !important;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

</style>
