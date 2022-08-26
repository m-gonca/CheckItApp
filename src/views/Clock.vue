<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav />
    <div
      class="flex-auto flex-col items-center w-full bg-no-repeat bg-cover bg-center relative"
      style="
        background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661464697/final%20project/romain-courtois-periurbancrepuscule-gif-x4_xszikg.gif);
      "
    >
      <div class="bg-slate-200/20 h-full flex items-center justify-center">
        <div
          class="bg-teal-200/40 h-4/5 lg:h-auto w-4/5 lg:w-auto p-5 rounded-xl flex flex-col lg:flex-row  justify-around divide-y-4 lg:divide-none lg:gap-x-5"
        >
          <div class="flex gap-x-3 h-full items-start">
            <p
              class="w-2/3 text-white font-bold text-right text-8xl md:text-[200px]"
              v-text="currentHour"
            ></p>
            <p class="text-4xl w-1/2 text-white pt-4 lg:pt-10  md:pt-8 h-full md:text-[50px]">Hour</p>
          </div>
          <div class="flex gap-x-3 h-full items-start">
            <p
              class="w-2/3 text-white font-bold text-right text-8xl md:text-[200px]"
              v-text="currentMin"
            ></p>
            <p class="text-4xl w-1/2 text-white pt-4 lg:pt-10 md:pt-8 h-full md:text-[50px]">Min</p>
          </div>
          <div class="flex gap-x-3 h-full items-start">
            <p
              class="w-2/3 text-white font-bold text-right text-8xl md:text-[200px]"
              v-text="currentSec"
            ></p>
            <p class="text-4xl w-1/2 text-white pt-4 lg:pt-10 md:pt-8 h-full md:text-[50px]">Sec</p>
          </div>
        </div>
      </div>
      <p class="absolute bottom-2 left-3 text-gray-400/50">
        Art by @romain_courtois_artist
      </p>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import moment from "moment";

// const where I can save the date

const currentHour = ref("");
const currentMin = ref("");
const currentSec = ref("");

//function to update the time

const updateCurrentTime = () => {
  currentHour.value = moment().format("h");
  currentMin.value = moment().format("mm");
  currentSec.value = moment().format("ss");
};

//call the function every second

setInterval(updateCurrentTime, 1000);
</script>

<style></style>
