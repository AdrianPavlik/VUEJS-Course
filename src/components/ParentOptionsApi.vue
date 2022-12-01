<!-- eslint-disable prettier/prettier -->
<!-- SFC single file component -->
<template>
     <div>
          <button @click="greet1()">Say hi!</button>
          <button @click="greet2()">Say hi!</button>
     </div>

</template>

<script>
//options API
export default {
     name: "ParentOptionsApi",
     data() {
          return {
               title: "Parent Options API",
          };
     },
     methods: {
          greet1() {
               console.log(this.title);
          },
          greet2: () => {
               console.log(this);
          },
     },
};
</script>

<style scoped>

</style>
