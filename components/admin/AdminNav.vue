<template>
  <el-menu
    router
    :style="{height: '100%', background: '#fafafa'}"
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>

    <el-menu-item index="/admin/create">
      <i class="el-icon-magic-stick"></i>
      <span>Новый пост</span>
    </el-menu-item>

    <el-menu-item index="/admin/posts">
      <i class="el-icon-files"></i>
      <span>Посты</span>
    </el-menu-item>

    <el-menu-item index="/admin/users">
      <i class="el-icon-s-custom"></i>
      <span>Пользователи</span>
    </el-menu-item>

    <el-menu-item index="/admin/logout">
      <i class="el-icon-circle-close"></i>
      <span>Выйти</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
name: "AdminNav"
}
</script>

<style scoped>

</style>
