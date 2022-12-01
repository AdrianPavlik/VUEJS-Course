<template>
     <div id="app">
          <div class="parent">
               <h1>Parent component</h1>
               <div v-for="review in reviews" :key="review.id">
                    <ChildComponent :id="review.id" :film="review.film" :price="review.price"
                         @addFilmToCart="updateCart($event)" />
               </div>
               <pre>{{ chosenFilms }}</pre>
          </div>
     </div>
     {{ finalPrice }}
</template>

<script setup>
import { computed, reactive, watch, watchEffect } from 'vue';
import ChildComponent from './ChildComponent.vue';
import EventBus from '../utils/EventBus.vue';

const reviews = reactive([
     { id: "x", film: "Alien vs Predator 1", price: 10 },
     { id: "y", film: "Alien vs Predator 2", price: 12 },
     { id: "z", film: "Alien vs Predator 3", price: 13 },
     { id: "u", film: "Alien vs Predator 4", price: 14 },
     { id: "i", film: "Alien vs Predator 5", price: 15 },
])

const chosenFilms = reactive([])

function updateCart($event) {
     chosenFilms.push($event)
     EventBus.$emit("COUNT_FILMS", chosenFilms?.length)
}

const finalPrice = computed(() => {
     if (chosenFilms?.length === 0)
          return 0;
     else
          return chosenFilms.reduce((accumulator, item) => {
               return accumulator + item.price
          }, 0)
})

watchEffect(() => {
     if (chosenFilms?.length > 5)
          alert("ZLAVA")
})

watch([chosenFilms, finalPrice], function (newValues, oldValues) {
     console.log(oldValues + " new value is " +   newValues);
})
</script>

<style scoped>
.parent {
     border: 1px solid white;
     max-width: 600px;
     margin: 100px auto;
}
</style>