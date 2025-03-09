<template>
  <a-button>Add</a-button>
</template>
<script setup lang="ts">
import {defineComponent } from 'vue'
import { Button } from 'ant-design-vue';
const ButtonGroup = Button.Group;

export default defineComponent({
  name: 'Button',
  components: {
    ButtonGroup
  }
});

</script>