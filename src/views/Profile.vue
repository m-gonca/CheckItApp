<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav />
    <div
      class="flex-auto flex-col w-full bg-no-repeat bg-cover bg-bottom "
      style="
        background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661440928/final%20project/02460614940ea24714c7dc28fc03438b_ifxyk1.jpg);
      "
    >
    <div class="h-full flex flex-col justify-between  md:h-4/5 md:my-18"> 
      <div class="flex flex-col text-center my-4 md:my-6 w-3/5 m-auto md:mt-10">
        <h1 class="self-center text-4xl font-light text-white">
          Update your profile
        </h1>
      </div>
      <!-- AVATAR IMAGE UPDATE -->
      <div class="grid gap-5 w-3/5 m-auto mb-6  md:w-2/5 md:mt-8">
        <AvatarImage class="h-40 w-40 m-auto md:h-60 md:w-60" />
        <div class="text-white md:mt-2 lg:w-2/5 font-semibold bg-teal-400 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center m-auto ">
          <label for="single">
            {{ uploading ? "Uploading ..." : "Choose a pic" }}
          </label>
          <input
            class="hidden"
            type="file"
            id="single"
            accept="image/*"
            @change="uploadAvatar"
            :disabled="uploading"
          />
        </div>
      </div>

      <!-- REST OF THE FORM -->
      <form class="grid gap-5 w-3/5 md:mt-4 m-auto md:w-2/5 mb-8 " @submit.prevent="updateData">
        <div class="flex justify-between ">
          <input
            class="bg-teal-100 w-full rounded-xl px-4 py-3"
            type="text"
            placeholder="Wanna tell us your alias?"
            v-model="newUsername"
          />
        </div>
        <div class="flex justify-between">
          <input
            class="bg-teal-100 w-full rounded-xl px-4 py-3"
            type="text"
            placeholder="What about your name?"
            v-model="newName"
          />
        </div>
        <div class="flex justify-between">
          <input
            class="bg-teal-100 w-full rounded-xl px-4 py-3"
            type="text"
            placeholder="And your surname?"
            v-model="newSurname"
          />
        </div>
        <div class="flex justify-between">
          <input
          class="text-white w-full m-auto font-semibold bg-teal-400 hover:bg-violet-400 rounded-xl px-5 py-2.5 text-center"
            type="submit"
            :value="loading ? 'Loading ...' : 'Update'"
            :disabled="loading"
          />
        </div>
      </form>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import Nav from "../components/Nav.vue";
import AvatarImage from "../components/AvatarImage.vue";
import Footer from "../components/Footer.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const loading = ref(false);
const uploading = ref(false);
const newUsername = ref("");
const newName = ref("");
const newSurname = ref("");
const newAvatar = ref("");
const files = ref();

const uploadAvatar = async (evt) => {
  files.value = evt.target.files;
  try {
    uploading.value = true;
    //abrimos el finder del ordenador para coger una archivo
    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    //creamos el nombre del archivo
    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    //subimos al bucket la imagen
    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    //le decimos que la descargue para actualizarla
    await userStore.downloadImage(filePath);
    await userStore.updateProfile({ avatar_url: filePath });
  } catch (error) {
    alert(error.message);
  } finally {
    uploading.value = false;
  }
};

const updateData = async () => {
  try {
    loading.value = true;
    const update = {};
    if (newUsername.value.length !== 0) update.username = newUsername.value;
    if (newName.value.length !== 0) update.name = newName.value;
    if (newSurname.value.length !== 0) update.surname = newSurname.value;

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
</script>
