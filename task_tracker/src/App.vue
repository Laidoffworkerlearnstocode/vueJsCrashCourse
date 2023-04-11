
<template>
  <Header title="Task Tracker"></Header>  
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header
    },
    data(){
      return {
        tasks:[],
      }
    },
    created(){
      this.tasks = [
        {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true,
        },
        {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30pm',
          reminder: true,
        },
        {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
        },
      ]
    }
  }
</script>

<style>
.btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 0.3em 0.6em;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  font-family: inherit;
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  opacity: 0.7;
}

.btn:active {
  transform: scale(0.95);
}

.btn-block {
  display: block;
  width: 100%;
}


</style>
