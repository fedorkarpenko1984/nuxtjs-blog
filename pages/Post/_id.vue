<template>
  <h1>Post id</h1>
</template>

<script>
export default {
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>

<style lang="sass" scoped>
  .post

</style>
