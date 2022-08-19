<template>
  <div>Sign Up</div>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <form @submit.prevent="signUp">
    <div>
      <p>monica.g.calleja@gmail.com</p>
      <label for="email">Email</label>
      <input type="text" placeholder="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" placeholder="Password" v-model="password" required/>
    </div>
    <div>
      <label for="password">Confirm Password</label>
      <input type="password" placeholder="Password" v-model="confirmPassword" required/>
    </div>
    <input type="submit" />
    <p v-show="errorMsg">{{ errorMsg }}</p>
  </form>

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
const buttonText = "Test the Sign In Route";

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
    }
    catch (error) {
      // displays error message
      errorMsg.value = error.message;
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords are not the same :(";
};
</script>

<style></style>
