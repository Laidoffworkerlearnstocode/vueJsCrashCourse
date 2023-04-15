<template>
    <button @click="toggleAddTask" 
    :class="[showAddTask ? 'active':'deactive', 'btn']" >
        {{ button.text[showAddTask ? 1 : 0] }}
    </button>
</template>

<script>
    export default {
        name: "Button",
        data() {
            return {
                button: {
                    text: ["Add Task", "Close"],
                    color: "steelblue",
                },
            };
        },
        props: {
            showAddTask: {
                type: Boolean,
                required: true,
            },
        },
        methods: {
            toggleAddTask() {
                this.$emit("add-task");
                this.button.active = !this.button.active;
                console.log(this.button.active);
            },
        },
        emits: ["add-task"],
    }
</script>

<style scoped>
    .deactive {
        background: steelblue;
    }
    .active {
        background: red;
    }

</style>