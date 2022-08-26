<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav/>
    <div
      class="flex-auto flex-col items-center w-full bg-no-repeat bg-cover bg-center relative"
      style="
        background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661506013/final%20project/97e7c21b1e9ba1725b150f6b40c2192c55555new_juhasf.gif)
      "
    >
      <p
        class="text-white text-7xl font-semibold bg-slate-200/10 h-full flex items-center justify-center"
      >
        calendar in the future here
      </p>
      <p class="absolute bottom-2 left-3 text-gray-400/50">Art by ni idea</p>
    </div>
    <Footer/>
  </div>
</template>

<script setup>

import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

</script>

<style></style>
