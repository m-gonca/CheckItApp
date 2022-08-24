<template>
  <body>
    <section class="min-h-screen flex items-stretch text-white">
      <!-- LEFT COVER ON DESKTOP MODE -->
      <div
        class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style="
          background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129745/final%20project/02460614940ea24714c7dc28fc03438b_vpkhdu.jpg);
        "
      >
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div
          class="w-full px-24 z-10 divide-y divide-teal-400 border-b-4 border-teal-400"
        >
          <h1 class="text-5xl font-bold text-left tracking-wide">Note it.</h1>
          <h1 class="text-5xl font-bold text-left tracking-wide pt-4">
            Do it.
          </h1>
          <h1 class="text-5xl font-bold tracking-wide pt-4 text-justify">
            Check it. ✓
          </h1>
        </div>
      </div>
      <!-- SIGN UP -->
      <div
        class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style="background-color: #161616"
      >
        <!-- BACKGROUND IN MOBILE MODE -->
        <div
          class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-center"
          style="
            background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129745/final%20project/02460614940ea24714c7dc28fc03438b_vpkhdu.jpg);
          "
        >
          <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div class="w-full h-full py-6 z-20 flex flex-col justify-between">
          <!-- LOGO -->
          <div class="w-36 object-center mx-auto mb-6 mt-32">
            <img
              src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129610/final%20project/Recurso_12_yu4gbt.png"
              alt="logo"
            />
          </div>
          <!-- FORM -->
          <form
            @submit.prevent="signUp"
            class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
          >
            <div class="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                v-model="email"
                class="block w-full p-4 text-lg rounded-sm bg-black"
                required
              />
            </div>
            <div class="pb-2 pt-4">
              <input
                class="block w-full p-4 text-lg rounded-sm bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                v-model="password"
                required
              />
            </div>
            <div class="pb-2 pt-4">
              <input
                class="block w-full p-4 text-lg rounded-sm bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Confirm password"
                v-model="confirmPassword"
                required
              />
            </div>
            <div class="px-4 pb-2 pt-4">
              <button
                type="submit"
                class="uppercase block w-full p-4 text-lg rounded-full bg-teal-400 hover:bg-violet-400 focus:outline-none"
              >
                sign up
              </button>
              <!-- ERROR MESSAGE -->
              <p v-show="errorMsg" class="w-full text-red-400 bg-violet-500/50 mt-5 p-2 rounded-full">{{ errorMsg }}</p>
              <!-- LINK TO SIGN IN -->
              <p class="text-gray-100 mt-5">
                Already have an account?
                <PersonalRouter
                  class="text-teal-400 font-semibold hover:text-violet-400"
                  :route="route"
                  :buttonText="buttonText"
                />
              </p>
            </div>
          </form>
          <!-- CHECK SOCIALS -->
          <div
            class="p-4 h-30 text-center right-0 left-0 flex flex-col justify-between pt-10 "
          >
            <p class="font-extralight text-s">Like this? Check this out!</p>
            <div
              class="p-4 w-full placeholder:text-center right-0 left-0 flex justify-center space-x-4 "
            >
              <a href="https://www.linkedin.com/in/monica-gonzalez-calleja">
                <svg
                  fill="#fff"
                  class="hover:fill-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/kazehime_/">
                <svg
                  fill="#fff"
                  class="hover:fill-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script setup>
import PersonalRouter from "./PersonalRouter.vue";
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/login";
const buttonText = "Sign In!";

// Input Fields

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message

const errorMsg = ref("");

// Show hide password variable

const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

// Show hide confrimPassword variable
const hidePassword = ref(true);

// Router to push user once SignedUp to Log In

const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error

const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      // calls the user store and send the users info to backend to logIn
      await useUserStore().signUp(email.value, password.value);
      // redirects user to the homeView
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      // displays error message
      errorMsg.value = "There's been an error （◞‸◟ ）";
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords are not the same (ಠ_ʖಠ)";
  setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
};
</script>

<style></style>
