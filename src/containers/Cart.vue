
<template>
  <div class="container">
    <section class="row">
      <el-row class="products" v-for="product in products" :key="product.index" :gutter="20">
        <el-col :span="4">
          <progressive-img
            :src="product.src"
            placeholder="./product.jpg"
            :blur="50"
            fallback="./product.jpg"
            class="image"
          />
        </el-col>

        <el-col class="info" :span="14">
          <div class="grid-content name">{{product.name}}</div>
          <div class="grid-content model">{{product.model}}</div>
        </el-col>

        <el-col class="qty" :span="6">
          <el-input-number v-model="product.quantity"></el-input-number>
        </el-col>
      </el-row>
    </section>

    <hr>

    <el-button @click="dialogVisibility = true" class="confirm-cart">Demander une proforma</el-button>

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

    <el-dialog title="Informations requises" :visible.sync="dialogVisibility" width="30%" center>
      <span
        class="subtitle"
        style="text-align: center !important"
      >Afin de vous répondre, nous souhaitons avoir vos informations personlles!</span>
      <form>
        <el-row :gutter="20" class="form-input">
          <el-col :span="12">
            <el-input placeholder="Noms" v-model="customer.name" clearable></el-input>
          </el-col>
          <el-col :span="12">
            <el-select v-model="customer.type" placeholder="Client">
              <el-option key="Entreprise" label="Entreprise" value="Entreprise"></el-option>
              <el-option key="Particulier" label="Particulier" value="Particulier"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="form-input">
          <el-col :span="24">
            <el-input placeholder="Email" v-model="customer.email" clearable></el-input>
          </el-col>
        </el-row>
      </form>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-btn" @click="dialogVisibility = false">Annuler</el-button>
        <el-button class="action-btn" @click="checkout()">Confirmer</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisibility: false,
      customer: {
        type: "dde",
        email: "ee",
        name: "erer"
      }
    };
  },
  methods: {
    checkout() {
      this.$store.dispatch("checkOut", this.customer);
			console.log('TCL: checkout -> this.customer', this.customer)
    }
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    }
  }
};
</script>


<style scoped>
.el-row {
  width: 100%;
}

.name {
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 1.5em;
}

.model {
  font-family: "Open sans", sans-serif !important;
  font-weight: 300;
  opacity: 0.5;
}

.el-button.is-circle {
  background: #ffa200;
  color: #ffffff;
}

.quantity {
  width: 100%;
  text-align: center;
  padding: 0.5em;
  background-color: #ffffff;
}

.confirm-cart {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  width: 100%;
  background-color: #ffa200;
  color: #ffffff;
}

.confirm-cart:hover {
  background-color: #f39a00;
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

.form-input {
  margin-top: 0.5em;
}

.action-btn {
  background: #ffa200;
  color: #fff;
}

.cancel-btn:hover {
  color: #ffa200;
  background: #fff;
  border-color: #ffa200;
}

.el-select {
  width: 100%;
}

.el-select-dropdown__item {
  color: #ffa200;
}
</style>
