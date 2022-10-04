<template>
  <div>
    <div
      class="text-7xl lg:text-[200px] font-bold text-center text-white"
    >
      <h1>00:00</h1>
    </div>
    <div class="w-full flex justify-center gap-4 lg:gap-8">
      <button>
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/play-xxl_h3jgvv.png"
          alt="play"
          class="w-8 h-8 lg:w-14 lg:h-14 transition ease-in-out delay-150 hover:scale-125 duration-300"
        />
      </button>
      <button>
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/pause-xxl_yzs5fw.png"
          alt="pause"
          class="w-8 h-8 lg:w-14 lg:h-14 transition ease-in-out delay-150 hover:scale-125 duration-300"
        />
      </button>
      <button>
        <img
          src="https://res.cloudinary.com/dmcofgm8p/image/upload/v1664909705/final%20project/ICONS/settings-10-xxl_mhh2l2.png"
          alt="settings"
          class="w-8 h-8 lg:w-14 lg:h-14 transition ease-in-out delay-150 hover:scale-125 duration-300"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type"]);
const emit = defineEmits(["chooseTheme"]);
</script>
