<template>
  <div>
    <el-breadcrumb separator-class="el-icon-guide">
      <el-breadcrumb-item to="/admin/posts">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  layout: 'administration',
  middleware: ['admin-auth']
}
</script>

<style scoped>

</style>
