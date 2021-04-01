<template>
  <div>
    Завершение сессии...
  </div>
</template>

<script>
export default {
  layout: 'administration',
  middleware: ['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>

<style scoped>

</style>
