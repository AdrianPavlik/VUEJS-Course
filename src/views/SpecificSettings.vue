<template>
     <div>
          <h1>Specific Settings: #{{ route.params.id }}</h1>
          <button @click="increment()">STORE COUNTER Increment {{ counter }}</button>
     </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
const { increment } = counterStore
const { counter } = storeToRefs(counterStore)

const route = useRoute();

</script>

<style scoped>

</style>