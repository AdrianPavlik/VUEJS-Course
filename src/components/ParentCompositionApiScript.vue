<template>
     <div>
          {{ title }}
          <button @click="greet()">Say hi from Composition API Script</button>
          <button @click="changeTitle()">Change title from Composition API Script</button>
          <button @click="changeObj()">Change obj from Composition API Script</button> {{ obj }}
     </div>
</template>

<script setup>
import { ref } from "vue";
let title = ref("Parent Composition API Script");
let obj = ref({
     firstname: "Adrián",
     lastname: "Pavlik"
})

let array = ref([])

function greet() {
     console.log("Hello from Composition API");
}
function changeTitle() {
     setTimeout(() => {
          title.value = "Krásny title"
          console.log(title)
     }, 1000);
}

function changeObj() {
     //obj.value.firstname = "Hans";
     obj.value = {
          firstname: "Hans"
     }
}
</script>

<style scoped>

</style>