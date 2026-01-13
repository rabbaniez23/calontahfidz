<template>
  <section class="benefits-section py-16 px-8 bg-neutral-white">
    <div class="container mx-auto max-w-6xl">
      <SectionHeading
        title="Keunggulan Belajar di Calon Hafiz"
        subtitle="Fasilitas dan layanan terbaik untuk perjalanan tahfizh kamu"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon="clock"
          title="Waktu Fleksibel"
          description="Sesuai kesepakatan guru dan murid"
          :aos-delay="0"
        />

        <FeatureCard
          icon="teacher"
          title="Guru Berpengalaman"
          description="Lulusan pondok pesantren berkompeten"
          :aos-delay="100"
        />

        <FeatureCard
          icon="video"
          title="One-on-One Video"
          description="Setoran langsung via WhatsApp"
          :aos-delay="200"
        />

        <FeatureCard
          icon="certificate"
          title="E-Sertifikat"
          description="Sertifikat hafalan untuk setiap program"
          :aos-delay="300"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/common/SectionHeading.vue";
import FeatureCard from "@/components/common/FeatureCard.vue";
</script>
