<template>
    <header class="header">
        <h2>{{ title }}</h2>
        <Button 
        @add-task="$emit('add-task')"
        :showAddTask="addTaskShow"
        v-if="showButton"
        ></Button>
    </header>
</template>

<script>
    import Button from "./Button.vue";

    export default {
        name: "Header",
        data() {
            return {
                showButton: true,
            };
        },
        props: {
            title: {
                type: String,
                required: true,
            },
            addTaskShow: {
                type: Boolean,
                required: true,
            },
        },
        components: {
            Button,
        },
        computed: {
            showButton() {
                return this.$route.path === "/";
            },
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