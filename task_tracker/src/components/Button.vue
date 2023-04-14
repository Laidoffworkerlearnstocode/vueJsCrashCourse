<template>
    <button @click="$emit('add-task')" :style="{background:color}" class="btn">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
        },
        methods: {
            onClick() {
                console.log("click");
            },
        },
        emits: ["add-task"],
    }
</script>

<style scoped>

</style>