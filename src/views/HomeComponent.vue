<template>
     <div class="header">
          <button @click="addFilm()">Add film</button>
          <div v-for="film in films.data" :key="film.id">{{ film.name }}
               <input type="checkbox" v-model="film.checked">
          </div>

     </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useFilm } from '../composables/film'
const films = reactive({ data: [] });
const { getFilms, addFilm } = useFilm();

(async () => {
     films.data = await getFilms()
})();


</script>

<style scoped>
.header {
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
}

#pozdrav {
     color: rgb(66, 184, 131);
}
</style>