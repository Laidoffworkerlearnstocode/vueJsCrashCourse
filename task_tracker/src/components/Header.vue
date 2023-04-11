<template>
    <header class="header">
        <h2>{{ title }}</h2>
        <Button text="Add Task" color="steelblue"></Button>
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