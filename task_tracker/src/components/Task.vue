<template>
    <div v-bind:class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{task.text}}
            <i v-on:click="onDelete(task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{task.day}}</p> 
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: {
            task: {
                type: Object,
                required: true,
            },
        },
        methods: {
            onDelete(id) {
                this.$emit("delete-task", id);
            },
        },
        emits: ["delete-task"],
    };
    
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 0.3em;
  padding: 0.65em 1.25em;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>