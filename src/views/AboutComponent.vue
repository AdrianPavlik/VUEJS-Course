<template>
     <div>
          <h1>About</h1>
          {{ count }}
          <button @click="plusOne()">Add +1</button>
     </div>
</template>

<script setup>
import { useCounter } from '../composables/counter';
const { count, plusOne } = useCounter(10)
</script>

<style scoped>

</style>