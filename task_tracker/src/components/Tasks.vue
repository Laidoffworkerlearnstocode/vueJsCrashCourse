<template>
    <div v-for="task in tasks" :key="tasks.id">
        <Task @toggle-reminder="$event => $emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task"></Task>
    </div>
    
</template>

<script>
    import Task from "./Task.vue";

    export default {
        name: "Tasks",
        props: {
            tasks: {
                type: Array,
                required: true,
            },
        },
        components: {
            Task,
        },
        emits: ["delete-task", "toggle-reminder"],
    };
</script>

<style scoped>

</style>