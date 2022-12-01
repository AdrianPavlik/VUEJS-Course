<template>
     <div>
          {{ obj2.data }}
          <button @click="changeObj2()">Clickni</button>
     </div>
</template>

<script setup>
import { reactive } from "vue";

let obj2 = reactive({
     data: {
          firstname: "Adrián",
          lastname: "Pavlik"
     }
})

function changeObj2() {

     //nevýhoda reactive je že sa robzije - prepíšeme celú premennú
     //obj2 = {
     //     key1: "ahoj"
     //}
     //1. možnosť menenia objektu
     //obj2.firstname = "Hans";
     //2. možnosť menenia objektu
     //Object.assign(obj2, {
     //     firstname: "Peter",
     //     middlename: "Stanislav"
     //})
     //3. možnosť menenia objektu použitie nepriamých dát
     obj2.data = {
          firstname: "Peter",
          middlename: "Test"
     }
     console.log(obj2)
}

</script>

<style scoped>

</style>