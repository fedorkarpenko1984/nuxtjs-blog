<template>
  <div class="page-wrap">
    <el-breadcrumb separator-class="el-icon-guide" class="mb">
      <el-breadcrumb-item to="/admin/posts">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit()"
    >


      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          resize="none"
          :rows="10"
          v-model.trim="controls.text"
        />
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time"></i>
          <span>{{ new Date(post.date).toLocaleString() }}</span>
        </small>

        <small style="margin-left: 1rem">
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'administration',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост | ${this.post.title}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchPostById', params.id)
    return {post}
  },

  data: () => {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Вы забыли ввести текст поста', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Посто изменен и обновлен')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
