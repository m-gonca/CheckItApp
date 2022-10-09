<template>
  <div class="w-full flex flex-col gap-10 2xl:w-2/3 ">
    <div class="flex flex-col lg:flex-row lg:items-baseline w-full m-auto lg:justify-center ">
      <div class="flex flex-col gap-4 lg:flex-row lg:pt-4 lg:justify-between lg:w-full">
        <button
          @click="timerStore.setTimer(pomodoro)"
          class="w-full rounded-xl px-6 py-2 text-center font-medium text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 lg:text-xl xl:hover:text-2xl"
        >
          Pomodoro
        </button>
        <button
          @click="timerStore.setTimer(shortBreak)"
          class="w-full rounded-xl px-6 py-2 text-center font-semibold text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 lg:text-xl xl:hover:text-2xl"
        >
          Short Break
        </button>
        <button
          @click="timerStore.setTimer(longBreak)"
          class="w-full rounded-xl px-6 py-2 text-center font-semibold text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 lg:text-xl xl:hover:text-2xl"
        >
          Long Break
        </button>
        <button
          @click="timer.showSettings = true"
          class="w-full rounded-xl px-6 py-2 text-center font-normal text-white text-xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400/80 lg:hidden"
        >
          Settings
        </button>
        <button
          @click="timer.showSettings = true"
          class="hidden w-full rounded-xl font-semibold  shadow-md duration-75 hover:bg-violet-400 bg-teal-400/80 lg:flex lg:justify-center lg:items-center lg:w-1/4 lg:px-4 lg:py-2"
        >
          <img
            src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/settings-10-xxl_mhh2l2.png"
            alt="settings"
            class="xl:w-10 transition ease-in-out delay-150 hover:scale-125 duration-300"
          />
        </button>
      </div>
    </div>
    <PomodoroTimer class="flex flex-col items-center gap-4" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTimerStore } from "../stores/timer";
import { storeToRefs } from "pinia";
import PomodoroTimer from "./PomodoroTimer.vue";

const timerStore = useTimerStore();
const { timer } = storeToRefs(timerStore);
</script>
