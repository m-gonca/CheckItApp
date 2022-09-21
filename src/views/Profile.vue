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
import { onMounted, ref } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import Nav from "../components/Nav.vue";
import Avatar from "../components/Avatar.vue";
import Footer from "../components/Footer.vue";

const userStore = useUserStore();
const loading = ref(true);
const newUsername = ref("");
const newName = ref("");
const newSurname = ref("");
const newAvatar = ref("");

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
    const update = {};
    if (newUsername.value.length !== 0) update.username = newUsername.value;
    if (newName.value.length !== 0) update.name = newName.value;
    if (newSurname.value.length !== 0) update.surname = newSurname.value;
    if (newAvatar.value.length !== 0) update.avatar_url = newAvatar.value;
    await useUserStore().updateProfile(update);
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

onMounted(async() => {
  await userStore.getProfile();
  newAvatar.value = userStore.user.avatar_url;
  console.log("este es el new avatar", newAvatar);
});
</script>
