<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav />
    <div
      class="flex-auto flex-col items-center w-full bg-no-repeat bg-cover bg-center relative"
      :style="linkBg ? linkTheme : linkDefault"
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
            @chooseTheme="setBackground"
          />

          <button
            @click="showPomodoro"
            class="text-white text-2xl w-4/5 my-6 font-semibold bg-teal-400 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center lg:text-xl lg:py-2"
          >
            Now, take me to Pomodoro!
          </button>
        </div>
        <!-- POMODORO DIV -->
        <div
          v-else
          class="flex flex-col items-center py-10 md:w-3/5 lg:py-4 border-4 border-red-600"
        >
            <PomodoroMain class="border-4 w-4/5 m-auto flex flex-col justify-start gap-8 h-full"/>
            <button
              @click="showPomodoro"
              class="text-white text-2xl m-auto w-4/5 my-6 font-semibold bg-teal-400 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center lg:text-xl"
            >
              Wanna change background!
            </button>
        </div>
      </div>
      <p class="absolute bottom-2 left-3 text-slate-500/60">
        Art by {{ artist }}
      </p>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "../components/Nav.vue";
import PomodoroMain from "../components/PomodoroMain.vue";
import PomodoroCards from "../components/PomodoroCards.vue";
import Footer from "../components/Footer.vue";

const theme1 = {
  title: "Peaceful Island",
  link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664671112/final%20project/MOODS/4c8d3596afb21e3bd148e8b6f7ef06b8_cop_iao79o.gif",
  artist: "@paulodosreisart",
};
const theme2 = {
  title: "Tropical Night",
  link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664318407/final%20project/MOODS/86d75a902dda5a4c6ac4b95d8a5afba4_s0nqp5.gif",
  artist: "@setamo.pixel",
};
const theme3 = {
  title: "Fall Sunset",
  link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664315183/final%20project/MOODS/c6a1c9f91f82c3fe5af6c5d83cc0bf7e_qn8sz0.gif",
  artist: "@vaneella",
};
const theme4 = {
  title: "Cotton Candy",
  link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1661464590/final%20project/MOODS/1b46992047537f3a4b80c301db31c1da_untrbz.gif",
  artist: "@ghibli",
};
const theme5 = {
  title: "Late Night",
  link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664672299/final%20project/MOODS/38d30ecfe41c21551c043443d330d6372222_seoeh5.gif",
  artist: "@pixeljeff_design",
};

const themes = [theme1, theme2, theme3, theme4, theme5];
const linkDefault =
  "background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661506013/final%20project/97e7c21b1e9ba1725b150f6b40c2192c55555new_juhasf.gif);";
const moodChoice = ref(false);
const linkBg = ref(false);
const linkTheme = ref("");
const artist = ref("");

const setBackground = (link) => {
  linkTheme.value = "background-image: url(" + link + ");`";
  //console.log(linkTheme.value);
  const chosenTheme = themes.filter((theme) => theme.link === link);
  artist.value = chosenTheme[0].artist;
  //console.log(artist.value);
  linkBg.value = true;
};

const showPomodoro = () => {
  moodChoice.value = !moodChoice.value;
};
</script>
