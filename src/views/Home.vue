<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav />
    <div
      class="flex-auto flex-col w-full bg-no-repeat bg-cover bg-bottom"
      style="
        background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661440928/final%20project/02460614940ea24714c7dc28fc03438b_ifxyk1.jpg);
      "
    >
      <NewTask @new-task="addToDo" />
      <div class="w-4/5 m-auto flex flex-row flex-wrap gap-y-10 mb-20">
        <TaskItem
          :task="task"
          v-for="task in taskStore.tasks"
          :key="task.id"
          @childDelete="deleteToDo"
          @childDone="toggleComplete"
          @childEdit="editToDo"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Nav from "../components/Nav.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { useTaskStore } from "../stores/task";

const taskStore = useTaskStore();

//another option is to save the array in a const with ref
//to use it on the v-for of the template instead
//of using it from the store

// const tasks = ref([]);

//here we create a fetch function that stores the fetched tasks
//in the previous array and afterwards we call it to work

// const fetchTasks = async () => {
//   tasks.value = await taskStore.fetchTasks();
// };
// fetchTasks();

const addToDo = async (newTask) => {
  const res = await taskStore.addTask(newTask.title, newTask.description);
  taskStore.fetchTasks();
};

const deleteToDo = async (id) => {
  const res = await taskStore.deleteTask(id);
  taskStore.fetchTasks();
};

const toggleComplete = async (id) => {
  const res = await taskStore.updateTaskComplete(id);
  taskStore.fetchTasks();
};

const editToDo = async (newTask) => {
  const res = await taskStore.updateTaskEdit(
    newTask.id,
    newTask.title,
    newTask.description
  );
  taskStore.fetchTasks();
};

onMounted(() => {
  taskStore.fetchTasks();
});
</script>

<style scoped></style>

<!-- 
**Hints**
1. ref() is used here!
2. (NewTask, TaskItem, Footer, Nav) components are used here! 
3. Tasks are going to be contained in an array here!
4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will contain the tasks value which will be used to store the fetchTasks method which lives inside the userTaskStore. This function needs to be called within the setUp script in order to run within the first instance of this component lifecycle.
5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this async function will call the taskStore that calls the addTask function from the store that pushes the info of the task to the backEnd. This is possible by passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask Component. 
7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem component. TaskItem will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show either a text or an icon to display if the task is completed or not completed. 1 customEevent for removing/deleting the task out of the array. 1 customEvent for editing the task title and description. This function needs to call the function mentioned on hint4.
7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument will be used to define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the value that checks wether this task is_complete. 1 of this constants will take of calling the id of this specific task in order to call the right id. 
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to call the deleteTaskmethod which will take the param/argument's id in order to delete the task. This function needs to call the function mentioned on hint4. 
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to take in 2 constants. 1 constant will take in the param/argument newValue. 1 constant will be used to get the param/argument oldValue id. These 2 constants will be sent to the backend via the useTaskStore which holds an editTask method. This function needs to call the function mentioned on hint4.
-->
