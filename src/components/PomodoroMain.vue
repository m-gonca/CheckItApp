<template>
  <div class="w-full flex flex-col gap-10 2xl:w-2/3">
    <div
      class="flex flex-col lg:flex-row lg:items-baseline w-full m-auto lg:justify-center"
    >
      <div
        class="flex flex-col gap-4 lg:flex-row lg:pt-4 lg:justify-between lg:w-full"
      >
        <button
          @click="timerStore.setTimer('pomodoro')"
          class="w-full rounded-xl px-6 py-2 text-center font-medium text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 lg:text-xl xl:hover:text-2xl"
        >
          Pomodoro
        </button>
        <button
          @click="timerStore.setTimer('shortBreak')"
          class="w-full rounded-xl px-6 py-2 text-center font-semibold text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 lg:text-xl xl:hover:text-2xl"
        >
          Short Break
        </button>
        <button
          @click="timerStore.setTimer('longBreak')"
          class="w-full rounded-xl px-6 py-2 text-center font-semibold text-white text-2xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400 lg:text-xl xl:hover:text-2xl"
        >
          Long Break
        </button>
        <button
          @click="timer.showSettings = !timer.showSettings"
          class="w-full rounded-xl px-6 py-2 text-center font-normal text-white text-xl shadow-md duration-75 hover:bg-violet-400 bg-teal-400/80 lg:hidden"
        >
          Settings
        </button>
        <button
          @click="timer.showSettings = !timer.showSettings"
          class="hidden w-full rounded-xl font-semibold shadow-md duration-75 hover:bg-violet-400 bg-teal-400/80 lg:flex lg:justify-center lg:items-center lg:w-1/4 lg:px-4 lg:py-2"
        >
          <img
            src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/settings-10-xxl_mhh2l2.png"
            alt="settings"
            class="xl:w-10 transition ease-in-out delay-150 hover:scale-125 duration-300"
          />
        </button>
        <form
          v-if="timer.showSettings"
          @submit.prevent="timerStore.updateTimer()"
          class="text-white flex flex-col border-2 bg-violet-400/80 rounded-xl transition ease-in-out"
        >
          <div class="flex text-sm">
            <div class="flex flex-col justify-between w-1/3 p-2 gap-1">
              <label for="pomodoro">Pomodoro</label>
              <input
                type="number"
                id="pomodoro"
                max="1000"
                placeholder="25"
                v-model="pomodoro.min"
                class="pl-1 rounded-lg text-black"
              />
            </div>
            <div class="flex flex-col justify-between w-1/3 p-2 gap-1">
              <label for="shortBreak">Short Break</label>
              <input
                type="number"
                id="shortBreak"
                max="1000"
                placeholder="05"
                v-model="shortBreak.min"
                class="pl-1 rounded-lg text-black"
              />
            </div>
            <div class="flex flex-col justify-between w-1/3 p-2 gap-1">
              <label for="longBreak">Long Break</label>
              <input
                type="number"
                id="longBreak"
                max="1000"
                placeholder="20"
                v-model="longBreak.min"
                class="pl-1 rounded-lg text-black"
              />
            </div>
          </div>
          <div class="flex justify-between items-start p-2 text-sm">
            <button
              type="submit"
              class="flex w-1/3 justify-center text-center py-[2px] rounded-lg bg-teal-400/80"
            >
              Update
            </button>
            <div class="flex items-start gap-4 w-2/3 justify-end">
              <span class="text-white">Auto Break</span>
              <label
                for="checked-toggle"
                class="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="checked-toggle"
                  class="sr-only peer"
                  value=""
                  v-model="timer.autoBreak"
                />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-teal-600 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-400"
                ></div>
              </label>
            </div>
          </div>
        </form>
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
const { timer, pomodoro, shortBreak, longBreak } = storeToRefs(timerStore);
</script>
