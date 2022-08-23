<template>
  <div class="flex flex-wrap">
    <div class="flex flex-col w-1/4 bg-slate-50">
      <div class="flex flex-col">
        <h2 class="bg-slate-50 rounded-lg">{{ task.title }}</h2>
        <p class="bg-slate-50 rounded-lg">{{ task.description }}</p>
      </div>

      <div v-if="showError === true">{{ errorMsg }}</div>

      <div>
        <button
          @click="doneTask"
          class="bg-teal-400 rounded-xl mt-4 pt-2 pb-2 pl-4 pr-4"
        >
          Done
        </button>
        <button
          @click="editTask"
          class="bg-teal-400 rounded-xl mt-4 pt-2 pb-2 pl-4 pr-4"
        >
          Edit
        </button>
        <button
          @click="deleteTask"
          class="bg-teal-400 rounded-xl mt-4 pt-2 pb-2 pl-4 pr-4"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useTaskStore } from "../stores/task";

const taskStore = useTaskStore();

//boolean with false for the remainder
  const remainder = ref("");
//error message
  const errorMsg = ref("");
  const showError = ref("");
//boolean to toggle the display of the edit inputs
  const showEdit = ref("");

//we define the emits that are passed on to the father and that
//we are going to use to trigger the different functionalities 
const emit = defineEmits(["childDelete", "childDone", "childEdit"]);

//we define here the prop that is going to be used
//in the father to store each task from the array
const props = defineProps(["task"]);

//function to emit de deletefunction if confirmed and
//passes with it the task.id inside the prop
const deleteTask = (id) => {
  if(confirm("are u sure u want to delete?")){
    console.log(props.task.id);
    emit("childDelete", props.task.id);
  }
};

//function to emit the reminder update if confirmed and
//passes with it the task.id inside the prop
const doneTask = (id) => {
  emit("childDone", props.task.id);
};


  // else{
  //   errorMsg.value = "I couldn't delete that sorri";
  //   showError.value = true;
  //   setTimeout(() => {
  //     showError.value = false;
  //   }, 5000);
  // }
</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
