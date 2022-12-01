<!-- eslint-disable prettier/prettier -->
<!-- SFC single file component -->
<template>
     {{ title }}
     <div>
          <button @click="greet1()">Say hi!</button>
          <button @click="greet2()">Say hi!</button>
          <button @click="changeTitle()">Change Title</button>
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
               console.log("Hello from Options API");
          },
          greet2: () => {
               console.log(this);
          },
          changeTitle() {
               setTimeout(() => {
                    this.title = "Krásny title"
               }, 1000);
          }
     },
};
</script>

<style scoped>

</style>
