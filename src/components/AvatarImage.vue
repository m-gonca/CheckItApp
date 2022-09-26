<template>
    <img
      v-if="user.avatar_url_temp != null"
      :src="user.avatar_url_temp"
      alt="Avatar"
      class="h-10 w-10 rounded-full border-5"
    />
    <img
      v-else
      src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1663600832/final%20project/basicprofile_jy2efd.png"
      class="h-10 w-10 rounded-full"
    />
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";


const userStore = useUserStore();
const { user } = storeToRefs(userStore);

</script>
