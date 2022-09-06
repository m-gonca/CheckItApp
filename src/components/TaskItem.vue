<template>
  <!-- component -->
  <div class="lg:w-1/3 w-full">
    <div
      class="h-full flex flex-col justify-between items-center hover:scale-105 hover:shadow-xl duration-300 shadow-md overflow-hidden bg-teal-200/30 rounded-xl mx-5 relative"
    >
      <div class="absolute">
        <!-- WORKING ON IT/DONE ICON -->
        <svg
          v-if="doneBoolean"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto mt-8 h-14 w-14 text-white bg-teal-400 rounded-full p-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- DONE ICON -->
        <svg
          v-if="!doneBoolean"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto mt-8 h-14 w-14 text-white bg-red-400 rounded-full p-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- TITLE AND DESCRIPTION -->
      <div class="w-full flex flex-col items-center mt-20 ">
        <h1 class="mt-6 w-4/5 text-center text-2xl font-bold text-white">
          {{ task.title }}
        </h1>
        <p
          class="my-4 w-4/5 text-justify break-all text-m text-white mb-6"
        >
          {{ task.description }}
        </p>
        <!-- EDIT BAR -->
        <div v-if="showEditBar" class="w-4/5">
          <form
            @submit.prevent="editTask"
            class="flex flex-col gap-y-6 items-center mb-8"
          >
            <input
              type="text"
              maxlength="200"
              v-model="taskTitle"
              class="bg-teal-100 w-full rounded-xl px-2 py-1 border-2"
            />
            <textarea
              type="text"
              maxlength="500"
              rows="3"
              v-model="taskDescription"
              class="bg-teal-100 w-full rounded-xl px-2 py-1"
            />
            <div
              v-if="showError === true"
              class="w-full text-center text-lg font-semibold text-red-200 bg-violet-500/50 mt-5 px-5 py-2 rounded-xl"
            >
              {{ errorMsg }}
            </div>
            <input
              type="submit"
              value="Update task"
              class="bg-teal-400 w-full text-white font-semibold rounded-xl pt-2 pb-2 pl-4 pr-4"
            />
          </form>
        </div>
      </div>
      <!-- BUTTONS -->
      <div
        class="w-full bg-teal-100/50 py-8 text-center flex flex-col 2xl:flex-row 2xl:px-5 gap-5 items-center"
      >
        <button
          @click="doneTask"
          class="w-4/5 rounded-xl bg-teal-400 px-6 py-2 font-semibold text-white shadow-md duration-75"
          :class="doneBoolean ? 'hover:bg-green-700' : 'hover:bg-green-400'"
        >
          <p v-if="!doneBoolean">Check</p>
          <p v-else>Uncheck</p>
        </button>
        <button
          @click="showEdit"
          class="w-4/5 rounded-xl bg-teal-400 active:bg-violet-400 px-6 py-2 font-semibold text-white shadow-md duration-75 hover:bg-violet-400"
        >
          Edit
        </button>
         <button
          @click="deleteTask"
          class="w-4/5 rounded-xl bg-teal-400 px-6 py-2 font-semibold text-white shadow-md duration-75 hover:bg-red-400 relative"
        >
        <div></div>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from 'sweetalert2'

//constants to save the variable that holds the value
//of the title and description from the edit inputs
const taskTitle = ref("");
const taskDescription = ref("");

//boolean with false for the remainder
const doneBoolean = ref("");

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showError = ref("");

// const constant to save a variable that holds the value of the error message
const errorMsg = ref("");

//boolean to toggle the display of the edit inputs
const showEditBar = ref("");

//we define the emits that are passed on to the father and that
//we are going to use to trigger the different functionalities
const emit = defineEmits(["childDelete", "childDone", "childEdit"]);

//we define here the prop that is going to be used
//in the father to store each task from the array
const props = defineProps(["task"]);

//function to emit de deletefunction if confirmed and
//passes with it the task.id inside the prop

//old way with ugly alert
// const deleteTask = () => {
//   if (confirm("are u sure u want to delete?")) {
//     console.log(props.task.id);
//     emit("childDelete", props.task.id);
//   }
// };

const deleteTask = ()=>{
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    emit("childDelete", props.task.id);
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
};

//function that emits the childDone emit to update the tick sign
//in home. To know from which task, it passes with it the
//task.id inside the prop
const doneTask = (id) => {
  emit("childDone", props.task.id);
  doneBoolean.value = !doneBoolean.value;
};

//function to show the edit bar

const showEdit = () => {
  showEditBar.value = !showEditBar.value;
  taskTitle.value =  props.task.title;
  taskDescription.value =  props.task.description;
};

//function to edit a task's title and description. We will
//have to create an object with the object's id and the
//title and description value coming from the edit inputs
const editTask = () => {
  if (taskTitle.value.length === 0 || taskDescription.value.length === 0) {
    errorMsg.value = "What's the task you wanna save ?(-ᴥ-ʋ)";
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 5000);
  } else {
    const newTask = {
      id: props.task.id,
      title: taskTitle.value,
      description: taskDescription.value,
    };
    emit("childEdit", newTask);
    (taskTitle.value = ""), (taskDescription.value = "");
    showEditBar.value = !showEditBar.value;
  }
};

//me falta una funcion to handle errors
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
