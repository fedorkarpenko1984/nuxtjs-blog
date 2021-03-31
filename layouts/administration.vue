<template>
  <div class="administration">
    <el-container :style="{height: '100%'}">
      <el-aside width="18vw">
        <app-admin-nav/>
      </el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAdminNav from "../components/admin/AdminNav"

export default {
  components: {AppAdminNav}
}
</script>

<style lang="sass" scoped>
  .administration
    width: 100%
    height: 100vh
</style>
