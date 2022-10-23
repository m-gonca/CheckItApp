<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav />
    <div
      class="flex-auto flex-col items-center w-full bg-no-repeat bg-cover bg-center relative"
      :style="linkBgToggle ? chosenTheme.linkBg : defaultBg"
    >
      <div class="flex h-full m-auto justify-around">
        <!-- CHOOSING YOUR MOOD/BG AND MUSIC -->
        <div
          v-if="!moodChoice"
          class="flex flex-col justify-between items-center py-10 md:w-3/5 lg:py-4"
        >
          <div
            class="w-4/5 my-6 leading-normal rounded-3xl text-center flex m-auto p-2 md:w-4/5 md:p-4 flex-col text-4xl font-semilight text-white lg:my-[-10px]"
          >
            <h1>
              First things first, <br />
              what's your vibe today?
            </h1>
          </div>
          <PomodoroCards
            :theme="theme"
            v-for="(theme, index) in themes"
            :key="index"
          />

          <button
            @click="themesStore.showPomodoro()"
            class="text-white text-xl w-4/5 my-6 font-normal bg-teal-400/80 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center lg:text-xl lg:py-2"
          >
            Pomodoro Time!
          </button>
        </div>
        <!-- POMODORO DIV -->
        <div
          v-else
          class="flex flex-col items-center py-10 w-4/5 md:w-3/5 justify-around lg:w-2/3 lg:py-4 xl:w-3/5"
        >
          <PomodoroMain />
          <button
            @click="themesStore.showPomodoro()"
            class="text-white text-xl w-full my-6 font-normal bg-teal-400/80 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center lg:text-xl lg:py-2 2xl:w-2/3"
          >
            Change mood!
          </button>
        </div>
      </div>
      <p class="absolute bottom-2 left-3 text-slate-500/60">
        Art by {{ chosenTheme.artist }}
      </p>
      <button
        v-if="soundToggle"
        class="absolute bottom-2 right-3 rounded-xl font-semibold shadow-md duration-75 hover:bg-violet-400 bg-teal-400/80"
        @click="themesStore.mute()"
      >
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1666553971/final%20project/ICONS/icons8-audio-48_eee4y5.png"
          class="h-8 w-8 p-1"
          alt="sound on"
        />
      </button>
      <button
        v-else-if="!soundToggle"
        class="absolute bottom-2 right-3 rounded-xl font-semibold shadow-md duration-75 hover:bg-violet-400 bg-teal-400/80"
        @click="themesStore.unmute()"
      >
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1666553971/final%20project/ICONS/icons8-mute-48_t0ulzr.png"
          class="h-8 w-8 p-1"
          alt="sound off"
        />
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onBeforeUnmount } from "vue";
import { useTimerStore } from "../stores/timer";
import { useThemesStore } from "../stores/themes";
import { storeToRefs } from "pinia";
import Nav from "../components/Nav.vue";
import PomodoroMain from "../components/PomodoroMain.vue";
import PomodoroCards from "../components/PomodoroCards.vue";
import Footer from "../components/Footer.vue";

const themesStore = useThemesStore();
const timerStore = useTimerStore();
const {
  defaultBg,
  moodChoice,
  chosenTheme,
  themes,
  linkBgToggle,
  soundToggle,
} = storeToRefs(themesStore);

onBeforeUnmount(() => {
  themesStore.stopMusic();
  timerStore.resetTimer();
});
</script>
