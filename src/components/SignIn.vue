<template>
  <!-- <div>Sign In</div>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <form @submit.prevent="signIn">
    <div>
      <p>monica.g.calleja@gmail.com</p>
      <label for="email">Email</label>
      <input type="text" placeholder="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
    </div>
    <input type="submit" />
    <p v-show="errorMsg">{{ errorMsg }}</p>
  </form> -->

 
  <body>
    <section class="min-h-screen flex items-stretch text-white">
      <div
        class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style="
          background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129745/final%20project/02460614940ea24714c7dc28fc03438b_vpkhdu.jpg);
        "
      >
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="w-full px-24 z-10 divide-y divide-teal-400 border-b-4 border-teal-400">
          <h1 class="text-5xl font-bold text-left tracking-wide">Note it.</h1>
          <h1 class="text-5xl font-bold text-left tracking-wide pt-4">Do it.</h1>
          <h1 class="text-5xl font-bold tracking-wide pt-4 text-justify">Check it. ✓</h1>
        </div>
      </div>
      <div
        class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style="background-color: #161616"
      >
        <div
          class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-center"
          style="
            background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129745/final%20project/02460614940ea24714c7dc28fc03438b_vpkhdu.jpg);
          "
        >
          <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div class="w-full py-6 z-20">
          <div
          class="w-36 object-center mx-auto mb-6 ">
            <img
              src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1661129610/final%20project/Recurso_12_yu4gbt.png"
              alt="logo"
            />
          </div>
          <form
            @submit.prevent="signIn"
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
            <!-- SEND A RECOVERY EMAIL IF PASSWORD IS LOST
            <div
              class="text-right text-gray-400 hover:underline hover:text-gray-100"
            >
              <a href="#">Forgot your password?</a>
            </div> -->
            <div class="px-4 pb-2 pt-4">
              <button
                type="submit"
                class="uppercase block w-full p-4 text-lg rounded-full bg-teal-400 hover:bg-indigo-600 focus:outline-none"
              >
                sign in
              </button>
              <p v-show="errorMsg">{{ errorMsg }}</p>
              <p class="text-gray-100 mt-5">
                Don't have an account?
                <PersonalRouter class="text-teal-400 font-semibold" :route="route" :buttonText="buttonText" />
              </p>
            </div>

            <div
              class="p-4 text-center right-0 left-0 flex justify-center space-x-4  pt-10"
            >
              <a href="https://www.linkedin.com/in/monica-gonzalez-calleja">
                <svg
                  fill="#fff"
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
          </form>
        </div>
      </div>
    </section>
  </body>

  <!-- support me by buying a coffee -->
  <!-- <a href="https://www.buymeacoffee.com/danimai" target="_blank" class="bg-purple-600 p-2 rounded-lg text-white fixed right-0 bottom-0">
        Support me
    </a> -->
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Sign Up!";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
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

<style>
/* .wu-text {
  color: black;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
} */
</style>
