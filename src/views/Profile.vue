<template>
  <div>
    <Nav />
    <h1>Update your profile</h1>
    <form class="form-widget" @submit.prevent="updateData">
      <Avatar v-model:path="newAvatar" @upload="updateData" />
      <!-- <div>
        <p>Current Email: {{ email }}</p>
        <input
          class="bg-teal-400"
          type="text"
          placeholder="new email"
          v-model="newEmail"
        />
      </div> -->
      <div>
        <p>Username</p>
        <input
          class="bg-teal-400"
          type="text"
          placeholder="new username"
          v-model="newUsername"
        />
      </div>
      <div>
        <p>Name</p>
        <input
          class="bg-teal-400"
          type="text"
          placeholder="your name"
          v-model="newName"
        />
      </div>
      <div>
        <p>Surname</p>
        <input
          class="bg-teal-400"
          type="text"
          placeholder="your surname"
          v-model="newSurname"
        />
      </div>

      <!-- <div>
        <p>Profile image</p>
        <input
          class="bg-teal-400"
          type="text"
          placeholder="paste a url"
          v-model="newAvatar"
        />
      </div> -->

      <div>
        <input
          type="submit"
          :value="loading ? 'Loading ...' : 'Update'"
          :disabled="loading"
        />
      </div>

      <!-- <div>
      <button class="button block" @click="deleteAccount" :disabled="loading">
        Delete Account
      </button>
    </div> -->
    </form>
    <Footer />
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import Nav from "../components/Nav.vue";
import Avatar from "../components/Avatar.vue";
import Footer from "../components/Footer.vue";

// constant to save a variable that will get the user from store with a computed function imported from vue
const userStore = useUserStore();

onBeforeMount(() => {
  console.log("he entrado aqui");
  userStore.fetchUser();
  console.log("he pasado fetch user");
  const prueba = userStore.user;
  console.log(prueba);
  userStore.getProfile();
  console.log("he pasado get Profile");
  //constant to save the avatar file path
  const newAvatar = userStore.user.avatar_url;
  console.log("este es el new avatar" + newAvatar);

});

// constant that calls user email from the useUSerStore
const email = userStore.user.email;

// constant that saves the user email and cleans out the @client from the user
const username = email.split("@")[0];

const loading = ref(true);
// const newEmail = ref("");
const newUsername = ref("");
const newName = ref("");
const newSurname = ref("");

const getUser = async () => {
  try {
    loading.value = true;
    await useUserStore().getProfile();
    loading.value = false;
  } catch (error) {
    errorMsg.value = "There's been an error getting your profile（◞‸◟ ）";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

const updateData = async () => {
  try {
    loading.value = true;

    //hacemos un objeto solo con los keys que se han cambiado, si no se ha cambiado no debe estar en el objeto
    const update = {};

    if (newUsername.value.length !== 0) update.username = newUsername.value;
    if (newName.value.length !== 0) update.name = newName.value;
    if (newSurname.value.length !== 0) update.surname = newSurname.value;
    if (newAvatar.value.length !== 0) update.avatar_url = newAvatar.value;

    await useUserStore().updateProfile(update);

    //resteo de los inputs
    newUsername.value = "";
    newName.value = "";
    newSurname.value = "";
    newAvatar.value = "";

    loading.value = false;
  } catch (error) {
    errorMsg.value = "There's been an error updating your profile （◞‸◟ ）";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>
