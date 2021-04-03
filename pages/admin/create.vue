<template>
  <el-form
    class="page-wrap"
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit()"
  >

    <h1 class="mb">Создать новый пост</h1>

    <el-form-item label="Введите название поста" prop="title">
      <el-input
        v-model.trim="controls.title"
      />
    </el-form-item>

    <el-form-item label="Текст в формате .md или .html" prop="text">
      <el-input
        type="textarea"
        resize="none"
        :rows="10"
        v-model.trim="controls.text"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        round
        native-type="submit"
        :loading="loading"
      >
        Создать пост
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  layout: 'administration',
  middleware: 'admin-auth',
  data: () => {
    return {
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Вы забыли ввести текст поста', trigger: 'blur' }
        ],
        title: [
          { required: true, message: 'Вы забыли ввести название поста', trigger: 'blur' }
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
            title: this.controls.title,
            text: this.controls.text
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.$message.success('Новый пост успешно создан')
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

<style scoped>

</style>
