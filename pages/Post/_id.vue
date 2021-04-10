<template>
  <article class="post">

    <header class="post-header">
      <div class="post-title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>

      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date(post.date).toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{ post.views }}
        </small>
      </div>

      <div class="post-image">
        <img
          :src="post.imageUrl"
          alt="post image"
        >
      </div>
    </header>
    <main class="post-content">
      <vue-markdown>{{ post.text }}</vue-markdown>
    </main>

    <footer>

      <app-comment-form
        @created="createCommentHandler"
        v-if="canAddComment"
      />

      <div class="comments" v-if="post.comments.length">
        <app-comment
          v-for="comment in post.comments"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div v-else class="text-center">Комментариев нет</div>

    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  components: {
    AppComment,
    AppCommentForm
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return {post}
  },
  data: () => {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler() {
      this.canAddComment = false
    }
  }
}
</script>

<style lang="sass" scoped>
    .post
      max-width: 600px
      margin: 0 auto

    .post-title
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 1rem

      h1
        color: dimgray

    .post-info
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: .5rem

    .post-image img
      width: 100%
      height: auto

    .post-header
      margin-bottom: 1.5rem

    .post-content
      margin-bottom: 2rem


    .el-icon-back
      border-radius: 50%
      border: 1px solid grey
      color: dimgrey
      background: #cad6e2

</style>
