<template>
  <div class="top-nav">
    <div class="container">
      <div class="form-row">
        <div class="form-group col-md-2 col-sm-2">
        </div>
        <div class="form-group col-md-8 col-sm-12">
          <div class="contact btn">
            Contactez nous au +237 222 22 42 02
            <i class="fa fa-phone"></i>
          </div>
        </div>
        <div class="form-group col-md-2 col-sm-6">
          <select id="language" class="form-control test">
            <option selected>Francais</option>
            <!-- <option>English</option> -->
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          value: "Francais",
          label: "Francais"
        },
        {
          value: "English",
          label: "English"
        }
      ],
      currencies: [
        {
          value: "CFA (XAF)",
          label: "CFA (XAF)"
        }
      ],
      value: ""
    };
  }
};
</script>

<style scoped>
@import "./Top-nav.scss";
</style>
