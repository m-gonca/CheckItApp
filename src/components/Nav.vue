<template>
  <nav>
    <div>
      <router-link to="/"
        ><img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1660918953/final%20project/preview_je22pk.png"
          alt="logo"
      /></router-link>
    </div>
    <div class="row">
      <h3>Wellcome back <strong>{{ name[0] }}</strong></h3>
      <button @click="signOut">Log out</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

//constant to save a variable that will hold the use router method
const route = "/";
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
  };
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  /* border: 1px solid black; */
}

img {
  width: auto;
  height: 100%;
}

button {
  background-color: rgb(174, 190, 245);
  width: 100px;
  height: 100%;
}

.row{
  display: flex;
  justify-content: space-between;
  align-content: baseline;
  width: 300px;
  /* border: 1px solid black; */
}
</style>
