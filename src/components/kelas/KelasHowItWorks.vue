<template>
  <section class="how-it-works-section py-16 px-8 gradient-soft">
    <div class="container mx-auto max-w-4xl">
      <SectionHeading
        title="Cara Bergabung"
        subtitle="Mudah dan cepat, hanya 3 langkah"
      />

      <div class="space-y-10">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex items-start gap-8 group"
          data-aos="fade-right"
          :data-aos-delay="index * 100"
        >
          <!-- Number Badge -->
          <div
            class="shrink-0 w-14 h-14 bg-primary text-neutral-white rounded-xl flex items-center justify-center text-xl font-bold shadow-level-3 group-hover:scale-110 transition-transform duration-300"
          >
            {{ index + 1 }}
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h3
              class="text-xl font-bold text-primary mb-4 group-hover:text-primary-dark transition-colors"
            >
              {{ step.title }}
            </h3>
            <p class="text-base text-neutral-text-dark leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/common/SectionHeading.vue";

const steps = [
  {
    title: "Pilih Paket Kelas",
    description:
      "Pilih paket kelas yang sesuai dengan target dan kemampuan menghafal kamu. Bisa juga konsultasi dulu via WhatsApp untuk rekomendasi.",
  },
  {
    title: "Daftar via WhatsApp",
    description:
      'Klik tombol "Daftar" pada paket yang dipilih. Kamu akan diarahkan ke WhatsApp untuk proses pendaftaran dan konfirmasi detail.',
  },
  {
    title: "Mulai Belajar",
    description:
      "Setelah pembayaran dan penjadwalan, kamu akan langsung bisa memulai perjalanan menghafal Al-Qur'an bersama mentor terbaik kami.",
  },
];
</script>
