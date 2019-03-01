<template>
  <div class="container">
    <section class="row">
      <div class="col-12 ">
        <el-card class="box-card">
          <div>
            <img src="../assets/about.jpg" alt="">
            <div class="page-banner">
              <p class="page-title">Qui sommes-nous?</p>
              <p class="page-subtitle"></p>
            </div>
          </div>
        </el-card>
      </div>
    </section>


    <section class="text">
      <div class="history">
        Créée en janvier 2004 par un groupe de personnes des deux sexes ayant pour même objectifs, la mise sur pied d'une structure
        de développement orientée vers la production de divers objets de communication conçu et réalisés avec une grande
        exigence de fiabilité et de qualité :
      </div>
      <ul class="services">
        <li>Conception et réalisation de vos différents projets :</li>
        <li>Infographie, Montage prépresse.</li>
        <li>Imprimerie.</li>
        <li>Sérigraphie sur T-shirts, polos, écharpes, écharpes, sacs, casquettes.</li>
        <li>Transferts sur tissu blanc, sur tissu de couleur.</li>
        <li>Tampographie, Marquage des objets plastiques (stylos à billes, clés USB, etc.)</li>
        <li>Marquage sur objets en faïence : Plats, Tasse.</li>
        <li>Portes Clés, Badges, etc...</li>
      </ul>
      <div class="history">
        Plusieurs entreprises nous ont fait confiance et continuent à nous faire confiance à ce jour, grâce à : La qualité de nos
        Prestations notre respect des délais de livraison, notre grande souplesse dans les modalités de paiement notre grande
        disponibilité à lancer vos travaux dans les brefs délais, une meilleure promotion de vos produits auprès des consommateurs.

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
      return {};
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

  .text {
    background: #fff;
    padding: 20px;
    text-align: left;
    font-family: 'Open sans', sans-serif;
  }

  .services{
    padding-top: 1rem;
    padding-bottom: 1rem;

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