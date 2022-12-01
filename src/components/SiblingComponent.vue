<template>
     <div class="sibling">
          <input ref="el" />
          {{ count }}
     </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import EventBus from '../utils/EventBus.vue';


const count = ref(0);
const el = ref()

console.log("SETUP");

onBeforeMount(() => {
     console.log("Sibling component before mounted")
})

onMounted(() => {
     console.log("Sibling component mounted")
     el.value.focus()
     EventBus.$on("COUNT_FILMS", (payload) => {
          count.value = payload;
     })
})

onBeforeUpdate(()=>{
     console.log("On Before Update")
     console.log(count.value, "On Before Update")
})

onUpdated(()=>{
     console.log("On Update")
     console.log(count.value, "On Update")
})

onUnmounted(() => {
     EventBus.$off("COUNT_FILMS")
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