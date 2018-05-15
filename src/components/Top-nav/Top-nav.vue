<template>
  <div class="top-nav">
    <div class="container">
      <el-row :gutter="0">
        <!-- Language select input -->
        <el-col :span="2" :offset="0">
          <el-select style="font-size: 3px;" v-model="value" placeholder="Language">
            <el-option  v-for="language in languages" :key="language.value" :label="language.label" :value="language.value">
            </el-option>
          </el-select>
        </el-col>

        <!-- Currency select input -->
        <el-col :span="2" :offset="0">
          <el-select v-model="value" placeholder="Currency">
            <el-option v-for="currency in currencies" :key="currency.value" :label="currency.label" :value="currency.value">
            </el-option>
          </el-select>
        </el-col>

        <!-- Contact -->
        <el-col :span="6" :offset="5">
          <div>
            <el-button type="text">
              <i class="el-icon-phone"></i>Contactez nous au +237 222 22 42 02</el-button>
          </div>
        </el-col>

        <!-- Register -->
        <el-col :span="2" :offset="5">
          <el-button type="text"><span>Inscription</span></el-button>
        </el-col>

        <!-- Suggestion -->
        <el-col :span="2" :offset="0">
          <el-button type="text"><span>Suggestion</span></el-button>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div></div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        languages: [{
          value: 'Francais',
          label: 'Francais'
        }, {
          value: 'English',
          label: 'English'
        }, ],
        currencies: [{
          value: 'CFA (XAF)',
          label: 'CFA (XAF)'
        }, ],
        value: ''
      }
    }
  }

</script>

<style scoped>
  @import "./Top-nav.scss";

</style>
