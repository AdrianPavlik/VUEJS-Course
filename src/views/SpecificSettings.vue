<template>
     <div>
          <h1>Specific Settings: #{{ route.params.id }}</h1>
     </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

</style>