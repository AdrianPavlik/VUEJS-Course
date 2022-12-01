<template>
     <div id="app">
          <div class="parent">
               <h1>Parent component</h1>
               <div v-for="review in reviews" :key="review.id">
                    <ChildComponent :id="review.id" :film="review.film" @addFilmToCart="updateCart($event)" />
               </div>
               <pre>{{ chosenFilms }}</pre>
          </div>
     </div>
</template>

<script setup>
import { reactive } from 'vue';
import ChildComponent from './ChildComponent.vue';
import EventBus from '../utils/EventBus.vue';

const reviews = reactive([
     { id: "x", film: "Alien vs Predator 1" },
     { id: "y", film: "Alien vs Predator 2" },
     { id: "z", film: "Alien vs Predator 3" },
     { id: "u", film: "Alien vs Predator 4" },
     { id: "i", film: "Alien vs Predator 5" },
])

const chosenFilms = reactive([])

function updateCart($event) {
     chosenFilms.push($event)
     EventBus.$emit("COUNT_FILMS", chosenFilms?.length)
}

</script>

<style scoped>
.parent {
     border: 1px solid white;
     max-width: 600px;
     margin: 100px auto;
}
</style>