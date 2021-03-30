<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit()"
  >

    <el-form-item label="Ваше имя" prop="name" ref="name">
      <el-input v-model.trim="controls.name"/>
    </el-form-item>

    <el-form-item label="Комментарий" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        round
        native-type="submit"
        :loading="loading"
      >
        Добавить комментарий
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {

  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Это поле обязательно для заполнения', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Введите ваш коментарий', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          console.log()

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postID: ''
          }
          console.log('valid', formData)

          try {
            this.$emit('created')
            this.$message.success('Комментарий добавлен')
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
