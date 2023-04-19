<template>
  <div class="home">
    <div class="count">
      {{count}}
    </div>
    <div>
      <button 
      @click="decrement()" 
      class="button"
      >-</button>
      <button 
      @click="increment()"  
      class="button"
      >+</button>
    </div>
    <hr>
    <div>
      {{oddOrEven}}
    </div>
    <hr>
    <input 
    type="text" 
    placeholder="Adjust Count Here"
    v-model="count"
    >
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

  export default {
    name: 'HomeView',
    data(){
      return {
        count: 0
      }
    },
    methods: {
      increment(){
        this.count++
      },
      decrement(){
        this.count--
      }
    },
    computed:{
      oddOrEven(){
        return this.count % 2 === 0 ? 'This is a even counter' : 'This is a odd counter'
      }
    }
  }

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
