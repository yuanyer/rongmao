<template>
  <div class="container">
    <div class="header">
      <h1>新建编辑拼团</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
    width: 100%;
    height: calc(100vh - 50px);
    background: rgb(227,227,227);
  }
  .container img{
    width: 800px;
  }
  .header{
    background: rgb(227,227,227);
    font-size: 30px;
    height: 200px;
    padding-top: 30px;
  }
</style>
