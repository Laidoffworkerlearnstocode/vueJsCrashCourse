<template>
  <div class="about">
    <h1>About</h1>
    <button class="counter-button">
      {{countStore.count}}
    </button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/index.js';

export default {
  // setup() {
  //   const countStore = useCounterStore();
  //   return {countStore}
  // },
  data(){
    return {
      countStore: useCounterStore()
    }
  }
};

</script>

<style scoped>
.counter-button {
  font-size: 3.125rem;
}
</style>