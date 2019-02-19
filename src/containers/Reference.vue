<template>
  <div class="container">
    <section class="row">
      <div class="col-12 ">
        <el-card class="box-card">
          <div>
            <img src="../assets/reference.jpg" alt="">
            <div class="page-banner">
              <p class="page-title">Référence</p>
              <p class="page-subtitle">Ils nous font fait confiance</p>
            </div>
          </div>
        </el-card>
      </div>
    </section>

    <div class="row">

      <div class="references col-4 d-block">
        <img src="../assets/references/ACMS.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/C3T.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/CARIM.png" class="logo" alt="logo">
      </div>

    </div>

    <div class="row">

      <div class="references col-4 d-block">
        <img src="../assets/references/Cerimed.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/CNLS.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/Dita.png" class="logo" alt="logo">
      </div>

    </div>

    <div class="row">

      <div class="references col-4 d-block">
        <img src="../assets/references/FAKA.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/GFBC.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/GIZ.png" class="logo" alt="logo">
      </div>

    </div>

    <div class="row">

      <div class="references col-4 d-block">
        <img src="../assets/references/Iresco.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/malaria.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/MINSANTE.png" class="logo" alt="logo">
      </div>

    </div>

    <div class="row">

      <div class="references col-4 d-block">
        <img src="../assets/references/OMS.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/plan.png" class="logo" alt="logo">
      </div>

      <div class="references col-4 d-block">
        <img src="../assets/references/PPSAC.png" class="logo" alt="logo">
      </div>

    </div>


  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .logo {
    width: 9em;
    filter: grayscale(100%);
    transition: all 0.2s;
  }

  .logo:hover {
    transform: scale(1.5);
    filter: none;
  }

  .row {
    margin-top: 1em;
  }

  .description {
    margin-top: 0.5em;
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

  .header {
    font-family: "Open Sans", sans-serif;
    text-align: left;
  }

  h3 {
    font-family: "Oswald", sans-serif !important;
  }
</style>