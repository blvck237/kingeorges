<template>
  <div class="container">
    <section class="row">
      <div class="col-12 ">
        <el-card class="box-card">
          <div>
            <img src="../assets/team.jpg" alt="">
            <div class="page-banner">
              <p class="page-title">L'équipe</p>
              <p class="page-subtitle">Notre équipe</p>
            </div>
          </div>
        </el-card>
      </div>
    </section>

    <div class="row">

      <div class="team-member mx-auto d-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR_gjFUnPgLosi0jRF-uqt46W5VuUGc6qgdT4kd2Irfx4f_b" class="avatar"
          alt="...">
        <div class="description">
          <div class="name">Virginie FOKOUA</div>
          <div class="role">PDG</div>
        </div>
      </div>

      <div class="team-member mx-auto d-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR_gjFUnPgLosi0jRF-uqt46W5VuUGc6qgdT4kd2Irfx4f_b" class="avatar"
          alt="...">
        <div class="description">
          <div class="name">Nom</div>
          <div class="role">Role</div>
        </div>
      </div>

      <div class="team-member mx-auto d-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR_gjFUnPgLosi0jRF-uqt46W5VuUGc6qgdT4kd2Irfx4f_b" class="avatar"
          alt="...">
        <div class="description">
          <div class="name">Nom</div>
          <div class="role">Role</div>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="team-member mx-auto d-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR_gjFUnPgLosi0jRF-uqt46W5VuUGc6qgdT4kd2Irfx4f_b" class="avatar"
          alt="...">
        <div class="description">
          <div class="name">Nom</div>
          <div class="role">Role</div>
        </div>
      </div>

      <div class="team-member mx-auto d-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR_gjFUnPgLosi0jRF-uqt46W5VuUGc6qgdT4kd2Irfx4f_b" class="avatar"
          alt="...">
        <div class="description">
          <div class="name">Nom</div>
          <div class="role">Role</div>
        </div>
      </div>

      <div class="team-member mx-auto d-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR_gjFUnPgLosi0jRF-uqt46W5VuUGc6qgdT4kd2Irfx4f_b" class="avatar"
          alt="...">
        <div class="description">
          <div class="name">Nom</div>
          <div class="role">Role</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .avatar {
    border-radius: 50% !important;
  }

  .description {
    margin-top: 0.5em;
  }

  .name {
    font-weight: 600;
    font-size: 16px;
  }

  .role {
    font-weight: 200;
    font-size: 16px;
  }

  .row {
    margin-top: 1em;
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

  .team-member {
    font-family: "Open Sans", sans-serif;
    padding: 0.5em;
  }
</style>