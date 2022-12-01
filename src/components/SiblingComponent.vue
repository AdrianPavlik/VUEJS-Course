<template>
     <div class="sibling">
          {{ count }}
     </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import EventBus from '../utils/EventBus.vue';


const count = ref(0);

onMounted(() => {
     EventBus.$on("COUNT_FILMS", (payload) => {
          count.value = payload;
     })
})

</script>

<style scoped>
.sibling {
     max-width: 600px;
     height: auto;
     background: grey;
     margin: 20px auto;
}
</style>