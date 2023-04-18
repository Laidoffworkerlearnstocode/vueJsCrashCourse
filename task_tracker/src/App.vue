<template>
  <Header 
  @add-task="toggleAddTask" 
  title="Task Tracker"
  :addTaskShow="showAddTask">
  </Header>
  <router-view :ShowAddTask="showAddTask"></router-view>
  <Footer></Footer>        
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
    data(){
      return {
        showAddTask: false,
      }
    },
    methods: {
      toggleAddTask(){
        this.showAddTask = !this.showAddTask;
      },
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
