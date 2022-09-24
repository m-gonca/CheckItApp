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

onMounted(async() => {
  await taskStore.fetchTasks();
});
</script>
