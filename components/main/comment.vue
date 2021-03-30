<template>
  <el-card class="comment">

    <div class="comment-header">
      <span>Name</span>
      <span>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </span>
    </div>

    <div class="comment-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quod?
    </div>

  </el-card>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  .comment
    margin-bottom: 1rem

  .comment-header
    display: flex
    justify-content: space-between
    margin-bottom: .5rem

  .comment-text
    white-space: pre-line

</style>
