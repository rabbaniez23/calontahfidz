<template>
  <section
    class="stats-section py-16 px-8 bg-primary text-neutral-white relative overflow-hidden"
  >
    <!-- Pattern Overlay -->
    <div class="absolute inset-0 opacity-10 pattern-grid"></div>

    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCard
          number="500"
          suffix="+"
          label="Santri Aktif"
          icon="users"
          :aos-delay="0"
          :enable-count-up="true"
        />
        <StatsCard
          number="50"
          suffix="+"
          label="Pengajar Tahfidzh"
          icon="certificate"
          :aos-delay="100"
          :enable-count-up="true"
        />
        <StatsCard
          number="1000"
          suffix="+"
          label="Jam Mengajar/Bulan"
          icon="calendar"
          :aos-delay="200"
          :enable-count-up="true"
        />
        <StatsCard
          number="98"
          suffix="%"
          label="Tingkat Kelulusan"
          icon="star"
          :aos-delay="300"
          :enable-count-up="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import StatsCard from "@/components/common/StatsCard.vue";
</script>

<style scoped>
.pattern-grid {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
