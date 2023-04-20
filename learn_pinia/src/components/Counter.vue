<template>
    <div class="count">
        {{countStore.count}}
    </div>
</template>

<script>
import { useCounterStore } from '@/stores/index.js';

export default {
  data() {
    return {
      countStore: useCounterStore()
    }
  }
};
</script>

<style>
  .count{
    font-size: 4rem;
    font-weight: bold;
  }
</style>