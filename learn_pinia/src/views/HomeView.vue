<template>
  <div class="home">
    <Counter></Counter>
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
import { useCounterStore } from '@/stores/index.js';
import Counter from '@/components/Counter.vue';

export default {
  data() {
    return {
      countStore: useCounterStore()
    }
  },
  components: {
    Counter
  }
};

</script>

<style scoped>

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
