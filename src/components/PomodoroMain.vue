<template>
  <div >
    <div
    class="border-4 border-blue-500 flex flex-col gap-4"
    >
      <button
        @click="setTimer"
        class="w-full rounded-xl  px-6 py-2 text-center font-medium  text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400"
      >
        Pomodoro
      </button>
      <button
        @click="setTimer"
        class="w-full rounded-xl  px-6 py-2 text-center font-semibold  text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400"
      >
        Short Break
      </button>
      <button
        @click="setTimer"
        class="w-full rounded-xl px-6 py-2 text-center font-semibold  text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400"
      >
        Long Break
      </button>
  </div>
    <PomodoroTimer :type="timerType"
    class="flex flex-col items-center gap-4 border-2 border-violet-800" />
</div>
</template>

<script setup>
import { ref } from "vue";
import PomodoroTimer from "./PomodoroTimer.vue";

const timerType = ref("Pomodoro");
</script>
