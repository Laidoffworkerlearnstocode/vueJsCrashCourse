<template>
    <form class="add-form">
        <div class="add-form">
            <label>Task</label>
            <input type="text" placeholder="Add Task" name="text">
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" name="day">
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" name="reminder">
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>

<script>
export default{
    name: "AddTask",
}

</script>

<style scoped>
.add-form{
    max-width: 500px;
    margin: auto;
    background: #f4f4f4;
    padding: 20px;
}

.add-form label{
    display: block;
    text-align: left;
    margin: 5px;
}

.add-form input{
    display: block;
    width: 100%;
    padding: 5px 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.add-form input[type="submit"]{
    background: black;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.add-form input[type="submit"]:hover{
    background: #333;
    color: #fff;
}

</style>
