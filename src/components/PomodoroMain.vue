<template>
  <div >
    <div
    class=" flex flex-col gap-4 lg:flex-row lg:pt-4"
    >
      <button
        @click="timerStore.setTimer(pomodoro)"
        class="w-full rounded-xl  px-6 py-2 text-center font-medium  text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400"
      >
        Pomodoro
      </button>
      <button
        @click="timerStore.setTimer(shortBreak)"
        class="w-full rounded-xl  px-6 py-2 text-center font-semibold  text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400"
      >
        Short Break
      </button>
      <button
        @click="timerStore.setTimer(longBreak)"
        class="w-full rounded-xl px-6 py-2 text-center font-semibold  text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400"
      >
        Long Break
      </button>
  </div>
    <PomodoroTimer
    class="flex flex-col items-center gap-4" />
</div>
</template>

<script setup>
import { ref } from "vue";
import { useTimerStore } from "../stores/timer";
import PomodoroTimer from "./PomodoroTimer.vue";

const timerStore = useTimerStore();

</script>
