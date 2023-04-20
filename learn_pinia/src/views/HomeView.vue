<template>
  <div class="home">
    <div class="count">
      {{countStore.count}}
    </div>
    <div>
      <button 
      @click="countStore.decrement()" 
      class="button"
      >-</button>
      <button 
      @click="countStore.increment()"  
      class="button"
      >+</button>
    </div>
    <hr>
    <div>
      {{countStore.oddOrEven}}
    </div>
    <hr>
    <input 
    type="text" 
    placeholder="Adjust Count Here"
    v-model="countStore.count"
    >
  </div>
</template>

<script>
import { useCounterStore } from '../stores/index.js';

  export default {
    setup() {
      const countStore = useCounterStore();
      return {countStore}
    },
  };

</script>

<style scoped>
  .count{
    font-size: 4rem;
    font-weight: bold;
  }

  .button{
    margin: 1rem;
    width: 2rem;
    font-size: 1.5rem;
  }

  input{
    font-size: 1rem;
    margin-top: 1rem;
  }

</style>
