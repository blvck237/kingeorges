<template>
  <div class="hello">
    <Navigation>
    </Navigation>

  </div>
</template>

<script>
import Navigation from './Navigation/Navigation'
export default {
  name: 'HelloWorld',
  components: {
    Navigation,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
