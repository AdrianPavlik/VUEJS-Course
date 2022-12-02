import { ref } from "vue"

export function useCounter(params) {
     const count = ref(params)
     const plusOne = () => {
          return count.value++;
     }
     return {
          count,
          plusOne
     }
}