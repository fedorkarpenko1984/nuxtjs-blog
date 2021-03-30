<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>

    <div class="post-body">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/huang-hai-poster-new-swcom-slide-mobile-_2_ed8a046b.jpeg?region=0,0,1024,626&width=960"
        alt="post image"
        class="post-image"
      >
    </div>

    <footer class="post-footer">
      <el-button round type="primary" @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-chat-dot-square"></i>
        12
      </span>
    </footer>

  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
  .post
    margin-bottom: 1.5rem

  .post-header
    display: flex
    justify-content: space-between
    align-items: center

  .post-image
    width: 100%
    height: auto

  .post-footer
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1rem

    .el-button
      margin: 0

</style>
