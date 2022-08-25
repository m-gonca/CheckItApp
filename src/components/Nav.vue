<template>
  <nav
    class="relative bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow-gradient-to-r"
    ></span>

    <div class="flex flex-wrap justify-between items-center mx-auto">
      <!-- LEFT SIDE -->
      <div class=" flex ">
        <!-- LOGO -->
        <router-link to="/" class="flex items-center">
          <img
            class="mr-3 sm:h-9 h-4 ml-3"
            src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129610/final%20project/Recurso_12_yu4gbt.png"
            alt="logo"
          />
          <span
            class=" items-center sm:text-3xl text-xl text-teal-400 font-semibold whitespace-nowrap dark:text-white"
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
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-teal-600 rounded md:bg-transparent md:text-teal-600 md:p-0 dark:text-white"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Clock</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Calendar</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- RIGHT SIDE-->
      <div class="flex md:order-2 gap-4">
        <!-- DATE -->
        <div
          class="hidden justify-between gap-2 items-center w-full lg:flex lg:w-auto lg:order-first"
        >
          <h3>Today is</h3>
          <h3 class="font-medium">{{ time }}</h3>
        </div>

        <!-- LOG OUT BUTTON -->
        <button
          type="button"
          @click="signOut"
          class="text-white text-sm font-medium bg-teal-400 hover:bg-violet-400 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0"
        >
          Log out
        </button>
        <!-- NAV BAR OPTIONS FOR MOBILE: HAMBURGUER MENU -->
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import moment from "moment";

// const where I can save the date

const time = moment().format("Do MMMM YYYY");

//constant to save a variable that will hold the use router method
// const route = "/";
// constant to save a variable that will get the user from store with a computed function imported from vue
const userStore = useUserStore();
// constant that calls user email from the useUSerStore
const email = userStore.user.email;
// constant that saves the user email and cleans out the @client from the user
const name = email.split("@");
// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();
const signOut = async () => {
  try {
    // calls the user store and signs out
    await useUserStore().signOut();
    // redirects user to the auth login
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    // displays error message
    errorMsg.value = error.message;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
