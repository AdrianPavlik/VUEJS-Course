<template>
     <div>
          <div class="card">
               {{ id }} {{ film }}
               <button @click="addToCart({ id, film })">Add to cart</button>
          </div>
     </div>
</template>

<script setup>
defineProps({
     id: String,
     film: {
          type: String,
          required: true
     }
})

const emits = defineEmits(["addFilmToCart"])

function addToCart(payload) {
     emits('addFilmToCart', payload)
}
</script>

<style  scoped>
.card {
     color: blue;
     border: 1px solid white;
     padding: 20px;
     background-color: yellow;
     margin: 10px;
}
</style>