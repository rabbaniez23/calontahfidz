<template>
  <section class="class-cards-section py-16 px-8 gradient-soft">
    <div class="container mx-auto max-w-6xl">
      <!-- Section Heading -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2
          class="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight"
        >
          Pilih Paket Sesuai Kebutuhanmu
        </h2>
        <p class="text-lg text-neutral-text-dark opacity-80 max-w-2xl mx-auto">
          Investasi terbaik untuk perjalanan menghafal Al-Qur'an
        </p>
      </div>

      <!-- Class Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ClassCard
          v-for="(classItem, index) in classesData"
          :key="classItem.id"
          v-bind="classItem"
          :aos-delay="index * 150"
        />
      </div>

      <!-- Info Box -->
      <div
        class="p-8 bg-neutral-white rounded-xl border border-primary/20 shadow-level-3 hover:shadow-level-5 transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="flex items-start gap-8">
          <div
            class="shrink-0 w-12 h-12 bg-primary text-neutral-white rounded-xl flex items-center justify-center shadow-level-2"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-xl text-primary mb-4">
              Yang Kamu Dapatkan
            </h3>
            <p class="text-base text-neutral-text-dark leading-relaxed">
              <strong class="text-primary">Semua paket kelas include:</strong>
              Bimbingan personal one-on-one dengan ustadz berpengalaman, Kajian
              motivasi Al-Qur'an rutin, E-Sertifikat hafalan resmi, dan
              Konsultasi gratis sebelum memulai. Jadwal fleksibel disesuaikan
              dengan kesepakatan guru dan murid.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ClassCard from "@/components/common/ClassCard.vue";
import { classes } from "@/data/classes";

const classesData = classes;
</script>
