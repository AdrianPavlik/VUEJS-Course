<template>
     <Suspense>
          <div>
               <h1>Home</h1>
          </div>
     </Suspense>
</template>

<script setup>
import { FilmService } from '../services/FilmService';

//FilmService.getAll().then(res => console.log(res.data))

(async () => {
     const response = await FilmService.getAll()
     console.log(response)
})();

</script>

<style scoped>

</style>