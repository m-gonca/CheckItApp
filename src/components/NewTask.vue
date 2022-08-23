<template>
  <div class="m-20 flex flex-col text-center">
    <h1>CHECK IT</h1>
    <h3 class="mb-8">Today is the day you start organizing your shit :D</h3>
    <h3>{{ time }}</h3>

    <form @submit.prevent="newTaskEmit" class="grid gap-4">
      <div class="flex justify-between">
        <label class="w-1/5 border-solid border-4 border-teal-400 rounded-xl">New Task</label>
        <input
          type="text"
          placeholder="task title"
          v-model="taskTitle"
          class="bg-teal-100 w-full"
        />
      </div>
      <div class="flex justify-between">
        <label  class="w-1/5 border-solid border-4 border-teal-400 rounded-xl">What do you need to do?</label>
        <input
          type="text"
          placeholder="task description"
          v-model="taskDescription"
          class="bg-teal-100 w-full"
        />
      </div>

      <div v-if="showError === true">{{ errorMsg }}</div>
     
      <input type="submit" value="Save Task" class="bg-teal-400 rounded-xl mt-4 pt-2 pb-2 pl-4 pr-4" />
    </form>
    
  </div>
</template>

<script setup>

import { ref, defineEmits } from "vue";
import moment from "moment";

// constant to save a variable that holds the value of the title input field of the new task
const taskTitle = ref("");
// constant to save a variable that holds the value of the description input field of the new task
const taskDescription = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showError = ref("");
// const constant to save a variable that holds the value of the error message
const errorMsg = ref("");

// const where I can save the date

const time = moment().format("Do MMMM YYYY, h:mm:ss a");

// constant to save a variable that defines the custom event that will be emitted to the homeView
const emit = defineEmits(["new-task"]);

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

const newTaskEmit = () => {
  if (taskTitle.value.length === 0 || taskDescription.value.length === 0) {
    errorMsg.value = "Don't you need something to work on to use this app?";
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 5000);
  } else {
    const newTask = {
      title: taskTitle.value,
      description: taskDescription.value,
    };
    emit("new-task", newTask);
    (taskTitle.value = ""), (taskDescription.value = "");
  }
};
</script>

<style scoped>

h1 {
  font-size: 40px;
}
</style>
