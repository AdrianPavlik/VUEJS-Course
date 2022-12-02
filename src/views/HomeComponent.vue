<template>
     <Suspense>
          <div class="header">
               <h1 id="pozdrav">Zdravím z VUE.JS kurzu!</h1>
          </div>
     </Suspense>
</template>

<script setup>
import { FilmService } from '../services/FilmService';

//FilmService.getAll().then(res => console.log(res.data))

(async () => {
     try {
          const response = await FilmService.getAll()
          console.log(response)
     } catch (error) {
          console.log(error)
     }
})();

</script>

<style scoped>
.header {
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
}

#pozdrav {
     color: rgb(66, 184, 131);
}
</style>