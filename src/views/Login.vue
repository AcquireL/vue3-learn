<template>
  <a-card title="Login" style="width: 300px; margin: 100px auto;">
    <a-form @submit.prevent="handleSubmit">
      <a-form-item
          label="Username"
          name="username"
          rules={[{ required: true, message:
      'Please input your username!' }]}
      >
      <a-input v-model:value="form.username"/>
      </a-form-item>
      <a-form-item
          label="Password"
          name="password"
          rules={[{ required: true, message:
      'Please input your password!' }]}
      >
      <a-input.password v-model:value="form.password"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {FormInstance} from 'ant-design-vue/lib/form'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })

    const handleSubmit = (values: { username: string; password: string }) => {
      console.log('Received values of form: ', values)
      // Here you can add your login logic (e.g., API call)
    }

    return {
      form,
      handleSubmit
    }
  }
})
</script>

<style scoped>
</style>