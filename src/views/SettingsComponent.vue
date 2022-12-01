<template>
     <div>
          <h1>Settings</h1>
          <div v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i">
               <RouterLink :to="{ name: 'SpecificSettings', params: { id: i } }">Setting #{{ i }}</RouterLink>
          </div>
          <RouterView style="background-color: red;"></RouterView>
     </div>
</template>

<script setup>

</script>

<style scoped>

</style>