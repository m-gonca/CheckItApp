<template>
  <div
    class="flex flex-col w-4/5 my-4 hover:scale-105 hover:shadow-xl duration-300 shadow-md lg:my-[20px]"
  >
    <button @click="chooseTheme" class="relative flex flex-col bg-white rounded-lg h-16 shadow-xl p-5">
 
        <p class="text-md pl-16 font-medium text-slate-700 lg:m-auto lg:pl-0 lg:text-lg">
          {{ theme.title }}
        </p>

        <img
          class="rounded-full object-cover object-center absolute -top-5 left-3 h-[65px] w-[65px] shadow-md lg:left-12  lg:h-24 lg:w-24"
          :src="theme.link"
          alt="theme image"
        />
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["theme"]);
const emit = defineEmits(["chooseTheme"]);

const chooseTheme = () => {
  //console.log("he entrado en choosetheme en una card");
  //console.log(props.theme.link);
  emit("chooseTheme", props.theme.link);
};

</script>
