<template>
     <div class="header">
          <div v-for="film in films.data" :key="film.id">{{ film.name }}
               <input type="checkbox" v-model="film.checked" @click="check(film)">
          </div>

     </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useFilm } from '../composables/film'
import { useFilmStore } from '../stores/film';
const films = reactive({ data: [] });
const { getFilms } = useFilm();


(async () => {
     films.data = await getFilms()
})();

const filmStore = useFilmStore();
const { addFilmToStore, removeFilmFromStore } = filmStore

function check(film) {
     switch (film.checked) {
          case false:
               addFilmToStore(film)
               break;
          case true:
               removeFilmFromStore(film)
               break;
     }
}

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