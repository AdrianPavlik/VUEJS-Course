<template>
     <div>
          {{ title }}
          <button @click="greet()">Say hi from Composition API</button>
     </div>
</template>

<script>
export default {
     name: "ParentCompositionApi",
     setup() {
          const title = "Parent Composition API";

          function greet() {
               console.log("Hello from Composition API");
          }

          return {
               title,
               greet,
          }
     }
}
</script>

<style scoped>

</style>