<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Navbar />

    <!-- Add padding-top to account for fixed navbar -->
    <main class="flex-grow pt-20">
      <router-view />
    </main>

    <Footer />

    <WhatsAppFloat />
  </div>
</template>

<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import WhatsAppFloat from "./components/layout/WhatsAppFloat.vue";
</script>

<style scoped>
/* Additional global styles can go here */
</style>
