<template>
  <div class="tentang-kami-page">

    

    <!-- Visi & Misi Section -->
    <TentangVisiMisi />

    <!-- Team Section -->
    <TentangTeam />

    <!-- Core Values Section -->
    <TentangValues />

    <!-- Statistics Section -->
    <TentangStats />

    <!-- Journey/Timeline Section -->
    <TentangJourney />
  </div>
</template>

<script setup>
// Import section components
import TentangHeader from "@/components/tentang/TentangHeader.vue";
import TentangVisiMisi from "@/components/tentang/TentangVisiMisi.vue";
import TentangTeam from "@/components/tentang/TentangTeam.vue";
import TentangValues from "@/components/tentang/TentangValues.vue";
import TentangStats from "@/components/tentang/TentangStats.vue";
import TentangJourney from "@/components/tentang/TentangJourney.vue";
</script>
