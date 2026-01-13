<template>
  <div class="home-page font-sans">
    <HomeHero />
    <HomeStats />
    <HomeFeatures />
    <HomeClassPreview />
    <HomeTestimonials />
    <HomeFAQ />
  </div>
</template>

<script setup>
import { getWhatsAppContactLink } from "@/utils/whatsapp";

// Page Components
import HomeHero from "@/components/home/HomeHero.vue";
import HomeStats from "@/components/home/HomeStats.vue";
import HomeFeatures from "@/components/home/HomeFeatures.vue";
import HomeClassPreview from "@/components/home/HomeClassPreview.vue";
import HomeTestimonials from "@/components/home/HomeTestimonials.vue";
import HomeFAQ from "@/components/home/HomeFAQ.vue";

// Shared Components
</script>
