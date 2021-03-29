<template>
  <article class="post">

    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>

      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>

      <div class="post-image">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/huang-hai-poster-new-swcom-slide-mobile-_2_ed8a046b.jpeg?region=0,0,1024,626&width=960"
          alt="post image"
        >
      </div>
    </header>

    <main class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at
        culpa debitis deleniti exercitationem id ipsa laboriosam nesciunt officia voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at
        culpa debitis deleniti exercitationem id ipsa laboriosam nesciunt officia voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at
        culpa debitis deleniti exercitationem id ipsa laboriosam nesciunt officia voluptas?</p>
    </main>

    <footer>

    </footer>
  </article>
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
