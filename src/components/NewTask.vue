<template>
  <div class="container">
    <h1>Add a new task</h1>
    <h3>Today is the day you start organizing your shit :D</h3>
    <h3>aaand today is DATE</h3>
    <form>
      <label>task</label>
      <div>
        <input
          type="text"
          placeholder="task title"
          v-model="taskTitle"
          required
        />
      </div>
      <label>description</label>
      <div>
        <input
          type="text"
          placeholder="task description"
          v-model="taskDescription"
          required
        />
      </div>    
      <div v-if="showError">{{ errorMsg }}</div> 
      <button @click="newTaskCheckAndEmit">Add</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from "vue";

// constant to save a variable that defines the custom event that will be emitted to the homeView
const emit = defineEmits(["new-task"])
// constant to save a variable that holds the value of the title input field of the new task
const taskTitle = ref("");
// constant to save a variable that holds the value of the description input field of the new task
const taskDescription = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showError = false;
// const constant to save a variable that holds the value of the error message
const errorMsg = ref("");
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

const newTaskCheckAndEmit = async () => {
  if(!taskTitle.value || !taskDescription.value){
    alert("Yo yo yo, you best believe this aint gonna work homie! ");
    errorMsg.value = "Don't you need something to work on to use this app?";
    showError = true;
    setTimeout(() => {
           showError = false;
    }, 5000);
  }
  else{
    this.$emit('new-task', taskTitle, taskDescription)
    (taskTitle.value = ""), (taskDescription.value = "");
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
h1 {
  font-size: 40px;
}
</style>
