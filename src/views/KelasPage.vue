<template>
  <div class="kelas-page">
    <!-- Header -->
    <KelasHeader />

    <!-- Class Cards Section -->
    <KelasList />

    <!-- FAQ Section -->
    <HomeFAQ />

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-off-white">
      <div class="container mx-auto max-w-4xl">
        <div
          class="bg-linear-to-r from-primary via-primary-dark to-primary rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden"
          data-aos="fade-up"
        >
          <!-- Decorative Background -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
          ></div>

          <!-- Content -->
          <div class="relative z-10">
            <div class="mb-6">
              <span
                class="inline-block bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4"
              >
                💬 Konsultasi Gratis
              </span>
            </div>

            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Masih Bingung Pilih Paket yang Tepat?
            </h2>

            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda memilih program tahfizh yang sesuai
              dengan kebutuhan dan target Anda
            </p>

            <a
              href="https://wa.me/6282117735816?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20program%20tahfizh"
              target="_blank"
              class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-neutral-off-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <i class="fa-brands fa-whatsapp text-2xl text-whatsapp"></i>
              <span>Hubungi Kami Sekarang</span>
            </a>

            <p class="text-sm text-white/70 mt-6">
              <i class="fa-solid fa-clock mr-2"></i>
              Respon cepat dalam 5 menit
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import section components
import KelasHeader from "@/components/kelas/KelasHeader.vue";
import KelasList from "@/components/kelas/KelasList.vue";
import HomeFAQ from "@/components/home/HomeFAQ.vue";
</script>
