<template>
  <Navbar />
  <main class="container">
    <RouterView/>
  </main>
  <footer></footer>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>
