<template>
  <div class="py-20 flex flex-col items-center gap-20 bg-opacity-75">
    <div class="w-full flex flex-col gap-4 text-center">
      <h1 class="self-center text-4xl font-light text-white">Welcome back</h1>
      <h1 class="self-center text-4xl font-semibold text-teal-400">
        {{ user.username }}
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
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);


const taskTitle = ref("");
const taskDescription = ref("");
const showError = ref("");
const errorMsg = ref("");
const showAddForm = ref("");
const emit = defineEmits(["new-task"]);

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

const showAddTask = () => {
  showAddForm.value = !showAddForm.value;
};

</script>
