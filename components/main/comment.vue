<template>
  <el-card class="comment">

    <div class="comment-header">
      <span class="name">Name</span>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
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
    font-size: .8rem


  .comment-text
    white-space: pre-line

</style>
