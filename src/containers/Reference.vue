<template>
  <div class="container">

    <div class="header">
      <h3>References</h3>
      <p>Ils nous ont fait confiance, et le font toujours</p>
    </div>

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
  transition: all .2s;
}
.logo:hover {
  transform: scale(1.5); 
  filter:none;
}
.row {
  margin-top: 1em;
}
.description {
  margin-top: 0.5em;
}

.container {
  background: #fff;
  padding: 1em;
}

.header {
  font-family: "Open Sans", sans-serif;
  text-align: left;
}

h3 {
  font-family: "Oswald", sans-serif !important;
}
</style>
