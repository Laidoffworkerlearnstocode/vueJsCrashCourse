<template>
    <header class="header">
        <h2>{{ title }}</h2>
        <Button @add-task="$emit('add-task')" text="Add Task" color="steelblue"></Button>
    </header>
</template>

<script>
    import Button from "./Button.vue";

    export default {
        name: "Header",
        props: {
            title: {
                type: String,
                required: true,
            },
        },
        components: {
            Button,
        },
        emits: ["add-task"],
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

</style>