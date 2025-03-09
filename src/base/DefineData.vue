<template>
  <div>{{ fullName }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

interface User {
  firstName: string;
  lastName: string;
}

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const user = reactive<User>({
      firstName: 'John',
      lastName: 'Doe',
    });

    const fullName = computed<string>(() => {
      return `${user.firstName} ${user.lastName}`;
    });

    return {
      user,
      fullName
    };
  },
});
</script>