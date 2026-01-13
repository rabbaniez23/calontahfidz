<template>
  <div class="kelas-page">
   

    <!-- Class Cards Section -->
    <KelasList />

    <!-- Benefits Section -->
    <KelasBenefits />

    <!-- How It Works Section -->
    <KelasHowItWorks />
  </div>
</template>

<script setup>
// Import section components
import KelasHeader from "@/components/kelas/KelasHeader.vue";
import KelasList from "@/components/kelas/KelasList.vue";
import KelasBenefits from "@/components/kelas/KelasBenefits.vue";
import KelasHowItWorks from "@/components/kelas/KelasHowItWorks.vue";
</script>
