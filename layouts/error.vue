<template>
  <div class="container">

    <h3>Увы и ах</h3>
    <h2>Ошибка 404</h2>
    <el-button type="warning" plain @click="goHomeFromError404()">На главную</el-button>

  </div>
</template>

<script>
export default {
  methods: {
    goHomeFromError404() {
      this.$router.push('/')
    }}
}
</script>

<style lang="sass" scoped>
  .container
    padding-top: 10rem
    display: flex
    flex-direction: column
    align-items: center

  h2
    color: red
    padding: 2rem

  h3
    color: lightslategrey



</style>
