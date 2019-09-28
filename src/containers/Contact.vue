<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <el-card class="box-card">
          <div>
            <img src="../assets/contact.jpg" alt>
            <div class="page-banner">
              <p class="page-title">Contact</p>
              <p class="page-subtitle"></p>
            </div>
          </div>
        </el-card>
      </div>
    </section>

    <section class="contact-form">
      <div class="form-description">
        <h3>Formulaire de contact</h3>
        <p>Remplissez le formulaire et envoyez votre message</p>
      </div>
      <el-form>
        <div class="row">
          <el-input class="col-4" v-model="name" placeholder="Nom" required></el-input>
          <el-input class="col-4" v-model="object" placeholder="Objet"></el-input>
          <el-input class="col-4" v-model="email" placeholder="Email"></el-input>
        </div>

        <div class="row">
          <el-input
            class="col-12 textarea"
            v-model="msg"
            type="textarea"
            :rows="6"
            placeholder="Votre message"
          ></el-input>
        </div>

        <div class="row">
          <div class="text-center col-12">
            <el-button
              icon="el-icon-message"
              @click="sendMessage()"
              class="send-btn"
              :disabled="formComplete()"
            >Envoyer un Message</el-button>
          </div>
        </div>
      </el-form>
    </section>

    <section class="row">
      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-truck"></i>
            </span>
            <b>Livraison gratuite</b>
          </div>Personalisez vos produits chez King Georges et faites vous les livrer gratuitement.
        </el-card>
      </div>

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-phone"></i>
            </span>
            <b>SUPPORT 7J/7</b>
          </div>Nous vous apportons de l'assisstance tous les jours de la semaine.
        </el-card>
      </div>

      <div class="col-md-4 service-card">
        <el-card shadow="always">
          <div class="card-title">
            <span class="icon-box">
              <i class="fas fa-hand-holding-usd"></i>
            </span>
            <b>QUALITÉ-PRIX</b>
          </div>Nous vous offrons de le bonne qualité à des prix adorables.
        </el-card>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "@/db";
import moment from "moment";

export default {
  data() {
    return {
      name: "",
      object: "",
      email: "",
      msg: "",
      date: moment().format()
    };
  },
  methods: {
    displayMessage(msg, msgType) {
      this.$message({
        showClose: true,
        message: msg,
        type: msgType
      });
    },
    sendMessage() {
      var msgType = "";
      if (this.validateEmail(this.email)) {
        var msg = "Message envoyé avec succès";
        var msgType = "success";
        db.collection("messages")
          .add({
            name: this.name,
            object: this.object,
            email: this.email,
            msg: this.msg,
            date: this.date
          })
          .then(success => {
            console.log("Document successfully written!");
          })
          .catch(error => {
            console.error("Error writing document: ", error);
          });
        this.displayMessage(msg, msgType);
        this.name = "";
        this.object = "";
        this.email = "";
        this.msg = "";
        this.date = "";
      } else {
        var msg = "Entrez une adresse email valide!";
        var msgType = "error";
        this.displayMessage(msg, msgType);
      }
    },
    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    formComplete() {
      if (
        this.name == "" ||
        this.email == "" ||
        this.object == "" ||
        this.msg == ""
      )
        return true;
    }
  },
  beforeMount() {
    // moment.format();
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
  background: #ffa200;
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

.page-banner {
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: #fff;
}

.page-title {
  font-family: "Oswald", sans-serif !important;
  font-weight: 500;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 4rem;
}

.page-subtitle {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 1rem;
}

.box-card {
  border: 1px solid #ccc;
  text-align: left;
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
