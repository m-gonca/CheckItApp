<template>
  <div class="py-20 flex flex-col items-center gap-20 bg-opacity-75">
    <div class="w-full flex flex-col gap-4 text-center">
      <h1 class="self-center text-4xl font-light text-white">Welcome back</h1>
      <h1 class="self-center text-4xl font-semibold text-teal-400">
        {{ username }}
      </h1>
    </div>

    <div class="w-1/2 flex flex-col bg-teal-200/20 rounded-xl">
      <p class="my-4 font-normal text-center text-white">
        Have anything to do?
      </p>
      <!-- FORM -->
      <div v-if="showAddForm">
        <form
          @submit.prevent="newTaskEmit"
          class="grid gap-4 mb-8 w-4/5 m-auto"
        >
          <div class="flex justify-between">
            <input
              type="text"
              maxlength="200"
              placeholder="task title"
              v-model="taskTitle"
              class="bg-teal-100 w-full rounded-xl px-2 py-1"
            />
          </div>
          <div class="flex justify-between">
            <textarea
              type="text"
              maxlength="500"
              rows="3"
              placeholder="task description"
              v-model="taskDescription"
              class="bg-teal-100 w-full rounded-xl px-2 py-1"
            />
          </div>

          <div
            v-if="showError === true"
            class="w-full text-center text-lg font-semibold text-red-200 bg-violet-500/50 mt-5 px-5 py-2 rounded-xl"
          >
            {{ errorMsg }}
          </div>

          <input
            type="submit"
            value="Save Task"
            class="bg-teal-400 text-white font-semibold rounded-xl hover:bg-violet-400 my-2 pt-2 pb-2 pl-4 pr-4"
          />
        </form>
      </div>
      <div
        class="w-full bg-teal-100/50 py-4 text-center items-center flex flex-col md:flex-row md:px-5 gap-5 justify-center rounded-b-lg"
      >
        <button
          @click="showAddTask"
          class="text-white font-semibold bg-teal-400 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center"
        >
          <p v-if="!showAddForm">Add it to the list!</p>
          <p v-else>Close this</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";

// constant to save a variable that will get the user from store with a computed function imported from vue
const userStore = useUserStore();



//constant to save the username
// const username = userStore.user.username;
const username = ref("");
console.log("hola");
console.log(userStore.user.username);

// constant to save a variable that holds the value of the title input field of the new task
const taskTitle = ref("");

// constant to save a variable that holds the value of the description input field of the new task
const taskDescription = ref("");

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showError = ref("");

// const constant to save a variable that holds the value of the error message
const errorMsg = ref("");

//boolean to toggle the display of the edit inputs
const showAddForm = ref("");

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
    showAddForm.value = !showAddForm.value;
  }
};

//function to show the edit bar

const showAddTask = () => {
  showAddForm.value = !showAddForm.value;
};


//calling the user and profile to get the username in the user store

onMounted(() => {
  userStore.fetchUser();
  userStore.getProfile();
  username.value = userStore.user.username;
});

</script>

<style></style>
