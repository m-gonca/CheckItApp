<template>
  <div class="container">
    <h1>Add a new task</h1>
    <h3>Today is the day you start organizing your shit :D</h3>
    <h3>aaand today is DATE</h3>
    <form>
      <input type="text" placeholder="task title" v-model="task" required>
      <input type="text" placeholder="task description" v-model="taskDescription" required>
      <button @click="submit">Add</button>
    </form>
  </div>
</template>

<script setup>
// constant to save a variable that define the custom event that will be emitted to the homeView
// const event = ref("");
// constant to save a variable that holds the value of the title input field of the new task
// const task = ref("");
// constant to save a variable that holds the value of the description input field of the new task
// const taskDescription = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
// const showError = false;
// const constant to save a variable that holds the value of the error message
// const errorMsg = ref("");
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

// const newTask =  () => {

//   };
</script>

<style scoped>
.container{
  margin:20px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
h1{
  font-size: 40px;
}

</style>
