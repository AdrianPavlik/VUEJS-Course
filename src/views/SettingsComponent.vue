<template>
     <div>
          <h1 v-orange>Settings</h1>
          <button @click="increment()">STORE COUNTER Increment {{counter}}</button>
          <h1 v-customColor="'yellow'">Settings</h1>
          <div v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i">
               <RouterLink :to="{ name: 'SpecificSettings', params: { id: i } }">Setting #{{ i }}</RouterLink>
          </div>
          <RouterView style="background-color: red;"></RouterView>
     </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
const { increment } = counterStore
const { counter } = storeToRefs(counterStore)
</script>

<style scoped>

</style>