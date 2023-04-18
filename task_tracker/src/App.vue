
<template>
  <Header 
  @add-task="toggleAddTask" 
  title="Task Tracker"
  :addTaskShow="showAddTask">
</Header>
  <div v-if="showAddTask">
    <AddTask @add-task="addTask"></AddTask>
  </div>
  <Tasks :tasks="this.tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" ></Tasks>
  <Footer></Footer>        
</template>

<script>
  import Header from './components/Header.vue';
  import Tasks from './components/Tasks.vue';
  import AddTask from './components/AddTask.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Tasks,
      AddTask,
      Footer,
    },
    data(){
      return {
        tasks:[],
        showAddTask: false,
      }
    },
    methods: {
      async deleteTask(id){
        if(confirm('Are you sure?')){
          try{
            const response = await fetch(`api/tasks/${id}`, {
              method: 'DELETE',
            });
            response.status === 200 ?(
              this.tasks = this.tasks.filter(_task => _task.id !== id)
            ) : alert('Error Deleting Task');
          }
          catch(err){
            console.log(err);
          }
        }
      },
      async toggleReminder(id){
        try{
          const updateReminder = !this.tasks.find(_task => _task.id === id).reminder;
          const updateTask = {...this.tasks.find(_task => _task.id === id), reminder: updateReminder};
          const response = await fetch(`api/tasks/${id}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            }, 
            body: JSON.stringify(updateTask)
          });
          response.status === 200 ? (
            this.tasks = this.tasks.map( _task => _task.id === id ? {..._task, reminder: updateReminder} : _task)
          ) : alert('Error Updating Task');
        }
        catch(err){
          console.log(err);
        };
      },
      async addTask(newTask){
        try{
          const response = await fetch('api/tasks', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
          });

          const data = await response.json();
          this.tasks.push(data);
          this.showAddTask = false;
        }catch(err){
          console.log(err);
        }
      },
      toggleAddTask(){
        this.showAddTask = !this.showAddTask;
      },
      async fetchTasks(){
        try{
          const response = await fetch('api/tasks');
          const data = await response.json();
          this.tasks = data;
        }catch(err){
          console.log(err);
        }
      },
      async fetchTask(id){
        const response = await fetch(`api/tasks/${id}`);
        const data = await response.json();
        return data;
      }

    },
    created(){
      this.fetchTasks();
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
