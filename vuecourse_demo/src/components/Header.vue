<template>
    <header>
        <h1>{{ title }}</h1>
        <Button text="Add Task" color="green"></Button>
        <Button text="Update Task" color="steelblue"></Button>
        <Button text="Delete Task" color="red"></Button>     
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>