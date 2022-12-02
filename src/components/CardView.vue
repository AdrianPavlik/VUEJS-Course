<template>
     <div class="card">
          <h1>
               <slot name="heading"></slot>
          </h1>
          <div class="card-content">
               <slot name="content"></slot>
          </div>
     </div>
</template>

<script setup>

</script>

<style scoped>
.card {
     border: 1px solid green;
     padding: 20px;
     margin: 20px;
}

.card-content {
     background-color: gray;
}
</style>