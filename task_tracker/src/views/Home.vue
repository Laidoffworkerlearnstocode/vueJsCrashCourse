<template>
    <div>
    <AddTask v-if="ShowAddTask" @add-task="addTask"></AddTask>
    </div>
    <Tasks :tasks="this.tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" ></Tasks>
</template>

<script>
    import Tasks from '../components/Tasks.vue';
    import AddTask from '../components/AddTask.vue';
    export default {
        name: 'Home',
        components: {
            Tasks,
            AddTask
        },
        data(){
            return {
                tasks: [],
            }
        },
        props: {
            ShowAddTask: {
                type: Boolean,
                required: true,
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