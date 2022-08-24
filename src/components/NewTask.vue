<template>
  <div
    class="py-20 flex flex-col items-center gap-20 bg-opacity-75"
  >
    <div class="w-full flex flex-col gap-4 text-center">
      <h1 class="self-center text-4xl font-light">Wellcome back</h1>
      <h1 class="self-center text-4xl font-semibold">{{ name[0] }}</h1>
    </div>
    <div class="w-1/2 bg-teal-200/20 rounded-xl">
    <p class="my-4 font-normal text-center text-white">Have anything to do?</p>
    <p class="mb-4 font-semibold text-center text-lg text-white">Add it to the list!</p>
      <form @submit.prevent="newTaskEmit" class="grid gap-4">
        <div class="flex justify-between">
          <input
            type="text"
            maxlength="200"
            placeholder="task title"
            v-model="taskTitle"
            class="bg-teal-100 w-full"
          />
        </div>
        <div class="flex justify-between">
          <textarea
            type="text"
            maxlength="500"
            rows="3"
            placeholder="task description"
            v-model="taskDescription"
            class="bg-teal-100 w-full"
          />
        </div>

        <div v-if="showError === true" class="w-full text-center text-red-400 bg-violet-500/50 mt-5 px-5 py-2 rounded-full">{{ errorMsg }}</div>

        <input
          type="submit"
          value="Save Task"
          class="bg-teal-400 text-gray-700 rounded-xl mt-4 pt-2 pb-2 pl-4 pr-4"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
// import moment from "moment";
import { useUserStore } from "../stores/user";

// constant to save a variable that will get the user from store with a computed function imported from vue
const userStore = useUserStore();
// constant that calls user email from the useUSerStore
const email = userStore.user.email;
// constant that saves the user email and cleans out the @client from the user
const name = email.split("@");
// constant to save a variable that holds the value of the title input field of the new task
const taskTitle = ref("");
// constant to save a variable that holds the value of the description input field of the new task
const taskDescription = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showError = ref("");
// const constant to save a variable that holds the value of the error message
const errorMsg = ref("");

// const where I can save the date

// const time = moment().format("Do MMMM YYYY, h:mm:ss a");


// constant to save a variable that defines the custom event that will be emitted to the homeView
const emit = defineEmits(["new-task"]);

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

const newTaskEmit = () => {
  if (taskTitle.value.length === 0 || taskDescription.value.length === 0) {
    errorMsg.value = "What's the task you wanna save ?(-ᴥ-ʋ)";
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

<style></style>
