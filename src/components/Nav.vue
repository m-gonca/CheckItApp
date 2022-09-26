<template>
  <nav
    class="relative bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow-gradient-to-r"
    ></span>

    <div class="flex flex-wrap justify-between items-center mx-auto">
      <!-- LEFT SIDE -->
      <div class="flex ">
        <!-- LOGO -->
        <router-link to="/" class="flex items-center">
          <img
            class="mr-3 h-12 sm:h-9 ml-3"
            src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129610/final%20project/Recurso_12_yu4gbt.png"
            alt="logo"
          />
          <span
            class="items-center sm:text-3xl text-2xl text-teal-400 font-semibold whitespace-nowrap dark:text-white"
            >Check it</span
          >
        </router-link>

        <!-- NAV BAR OPTIONS FOR DESKTOP-->
        <div
          class="hidden ml-10 justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-m md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 pr-4 pl-3 text-white bg-teal-600 rounded md:bg-transparent md:text-teal-600 md:p-0 dark:text-white"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/clock"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Clock</router-link
              >
            </li>
            <li>
              <router-link
                to="/pomodoro"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Pomodoro</router-link
              >
            </li>
            <li>
              <router-link
                to="/calendar"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Calendar</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- RIGHT SIDE-->
      <div class="flex align-baseline px-[10px] md:order-2 gap-4">
        <!-- DATE FOR DESKTOP-->
        <div
          class="hidden justify-between gap-2 items-center w-full lg:flex lg:w-auto lg:order-first"
        >
          <h3>Today is</h3>
          <h3 class="font-medium">{{ time }}</h3>
        </div>

        <!-- PROFILE PIC -->
        <router-link
          to="/profile"
          class="block py-2 pr-4 text-white rounded md:bg-transparent md:text-teal-600 md:p-0 dark:text-white"
          aria-current="page"
        >
          <AvatarImage />
        </router-link>

        <!-- LOG OUT BUTTON FOR DESKTOP-->
        <button
          type="button"
          @click="signOut"
          class="hidden md:flex text-white text-sm font-medium bg-teal-400 hover:bg-violet-400 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0"
        >
          Log out
        </button>

        <!-- NAV BAR OPTIONS FOR MOBILE-->
        <div class="flex justify-center -ml-4 items-center  md:hidden">
          <button
            @click="changeClickBurger"
            class="w-[40px] h-[40px] py-[5px] flex flex-col justify-around items-center bg-none"
          >
            <span
              class="w-[30px] h-[4px] bg-teal-600"
            ></span>
            <span
              class="w-[30px] h-[4px] bg-teal-600 "
            ></span>
            <span
              class="w-[30px] h-[4px] bg-teal-600 "
            ></span>
          </button>

          <nav
            :class="clickBurger ? 'top-[30px]' : 'hidden'"
            class="bg-teal-200/80 absolute left-0 w-full mt-[40px] z-[50] transition ease-in-out duration-300"
          >
            <ul
              class="flex flex-col items-center  bg-teal-600/50 list-none text-white py-2 divide-y"
            >
              <li class="p-3 text-lg">
                <router-link to="/">Home</router-link>
              </li>

              <li class="p-3 text-lg">
                <router-link to="/clock">Clock</router-link>
              </li>

              <li class="p-3 text-lg ">
                <router-link to="/pomodoro">Pomodoro</router-link>
              </li>

              <li class="p-3 text-lg ">
                <router-link to="/calendar">Calendar</router-link>
              </li>
              <li>
                <button
                type="button"
                @click="signOut"
                class="text-white text-lg font-semibold text-center mt-2  py-2 md:mr-0 "
              >
                Log out
              </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import AvatarImage from "../components/AvatarImage.vue";
import moment from "moment";

const time = moment().format("Do MMMM YYYY");
const redirect = useRouter();
const userStore = useUserStore();
const clickBurger = ref(false);
const errorMsg = ref("");

const changeClickBurger = () => {
  clickBurger.value = !clickBurger.value;
};

const signOut = async () => {
  try {
    await userStore.signOut();
    redirect.push({ path: "/auth" });
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>
