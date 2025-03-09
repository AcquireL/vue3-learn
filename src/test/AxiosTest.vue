<script setup lang="ts">
// import axiosInstance from '../plugins/axios';

const data = {
  id: 1,
  name: 'John Doe',
  age: 30,
  gender: 'male'
}

</script>

<template>
  <div>
    <h1> Hello Word</h1>
    <div v-if="data">Data: {{ data }}</div>

  </div>
</template>

<style scoped>

</style>