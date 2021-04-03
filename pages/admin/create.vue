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

    <el-form-item label="Введите текст или разметку в формате .md или .html" prop="text">
      <el-input
        type="textarea"
        resize="none"
        :rows="10"
        v-model="controls.text"
      />
    </el-form-item>

    <el-button class="mb" type="success" plain @click="postPreview = true">
      Предпросмотр
    </el-button>

    <el-dialog title="Предпросмотр" :visible.sync="postPreview">
      <div :key="controls.text">
        <vue-markdown>
          {{ controls.text }}
        </vue-markdown>
      </div>
    </el-dialog>

    <el-upload
      ref="upload"
      class="mb"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите файл или <em>нажмите сюда</em></div>
      <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
    </el-upload>

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
      image: null,
      postPreview: false,
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
    handleImageChange(file, fileList) {
      this.image = file.raw
    },

    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Новый пост успешно создан')
            this.loading = false
          } catch (e) {
            this.loading = false
          }

        } else {this.$message.warning('В посте чего-то не хватает...')}
      })
    }
  }
}
</script>

<style scoped>

</style>
