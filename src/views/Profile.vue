<template>
  <div>
    <Nav />
    <h1>Update your profile</h1>
    <!-- AVATAR IMAGE UPDATE -->
    <AvatarImage class="h-40 w-40" />
    <div class="border-2 bg-purple-500 w-40 h-10 rounded-md text-center">
      <label class="button primary block" for="single">
        {{ uploading ? "Uploading ..." : "Upload" }}
      </label>
      <input
        style="visibility: hidden; position: absolute"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
    <form class="form-widget" @submit.prevent="updateData">
      <!-- REST OF THE FORM -->
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

      <div>
        <input
          type="submit"
          :value="loading ? 'Loading ...' : 'Update'"
          :disabled="loading"
        />
      </div>
    </form>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import Nav from "../components/Nav.vue";
import AvatarImage from "../components/AvatarImage.vue";
import Footer from "../components/Footer.vue";
import { storeToRefs } from "pinia";


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
    await userStore.updateProfile({avatar_url: filePath});


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
