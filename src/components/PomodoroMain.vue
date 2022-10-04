<template>
  <div class="w-full h-full border-2 flex flex-col justify-around my-4">
    <div class="flex flex-col justify-between text-center items-center border-2 w-full">
      <button
        @click="setTimer"
        class="w-4/5 rounded-xl relative px-6 py-2 text-center font-medium my-4 text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 "
      >
        Pomodoro
      </button>
      <button
        @click="setTimer"
        class="w-4/5 rounded-xl relative px-6 py-2 text-center font-semibold my-4 text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 "
      >
        Short Break
      </button>
      <button
        @click="setTimer"
        class="w-4/5 rounded-xl relativepx-6 py-2 text-center font-semibold my-4 text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 "
      >
        Long Break
      </button>
    </div>
    <PomodoroTimer :type="timerType" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import PomodoroTimer from "./PomodoroTimer.vue";

const timerType = ref("Pomodoro");
</script>
