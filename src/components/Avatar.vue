<template>
  <div>
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="h-40 w-40 rounded-full border-5"
    />
    <img
      v-else
      src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1663600832/final%20project/basicprofile_jy2efd.png"
      class="h-40 w-40 rounded-full"
    />

    <div 
    class="border-2 bg-purple-500 w-40 h-10 rounded-md text-center"
    :style="{ width: size }">
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
  </div>
</template>

<script>
import { onMounted, ref, toRefs, watch } from "vue";
import { supabase } from "../supabase";

export default {
  props: {
    path: String,
  },
  emits: ["upload", "update:path"],
  setup(prop, { emit }) {
    const { path } = toRefs(prop);
    const uploading = ref(false);
    const src = ref("");
    const files = ref();

    console.log(path.value);
    const downloadImage = async () => {
      try {
        console.log(path.value);
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path.value);
        if (error) throw error;
        src.value = URL.createObjectURL(data);
      } catch (error) {
        console.error("Error downloading image: ", error.message);
      }
    };


    const uploadAvatar = async (evt) => {
      files.value = evt.target.files;
      try {
        uploading.value = true;
        if (!files.value || files.value.length === 0) {
          throw new Error("You must select an image to upload.");
        }

        const file = files.value[0];
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file);

        if (uploadError) throw uploadError;
        emit("update:path", filePath);
        emit("upload");
      } catch (error) {
        alert(error.message);
      } finally {
        uploading.value = false;
      }
    };

    watch(path, () => {
      if (path.value) downloadImage();
    });

    onMounted(() => {
      downloadImage();
    });

    return {
      uploading,
      src,
      files,

      uploadAvatar,
    };
  },
};
</script>
