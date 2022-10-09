<template>
  <div class="gap-10">
    <div class="text-7xl lg:text-[200px] font-bold text-center text-white">
      <h1>{{ timer.formatMin }}:{{ timer.formatSec }}</h1>
    </div>
    <div class="w-full flex justify-center gap-4 lg:gap-8">
      <button @click="timerStore.startTimer()">
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/play-xxl_h3jgvv.png"
          alt="play"
          class="w-8 h-8 lg:w-14 lg:h-14 transition ease-in-out delay-150 hover:scale-125 duration-300"
        />
      </button>
      <button @click="timerStore.stopTimer()">
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/pause-xxl_yzs5fw.png"
          alt="pause"
          class="w-8 h-8 lg:w-14 lg:h-14 transition ease-in-out delay-150 hover:scale-125 duration-300"
        />
      </button>
      <button @click="timerStore.resetTimer()">
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1665273250/final%20project/ICONS/stop-256_lg6j8k.png"
          alt="reset"
          class="w-8 h-8 lg:w-14 lg:h-14 transition ease-in-out delay-150 hover:scale-125 duration-300"
        />
      </button>
    </div>
    <div class="flex">
      <p class="text-white text-xl font-light">{{ timer.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTimerStore } from "../stores/timer";
import { storeToRefs } from "pinia";

const timerStore = useTimerStore();
const { timer } = storeToRefs(timerStore);

// const formatSec = ref(timer.sec.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
</script>
