<template>
  <section
    class="class-cards-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-off-white to-white relative overflow-hidden"
  >
    <!-- Decorative Background -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
    ></div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Section Heading -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block mb-4">
          <span
            class="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold"
          >
            💎 Paket Pilihan
          </span>
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold text-neutral-text-dark mb-6 leading-tight"
        >
          Pilih <span class="text-primary">Paket Terbaik</span
          ><br class="hidden sm:block" />untuk Perjalanan Hafalanmu
        </h2>
        <p
          class="text-lg text-neutral-text-dark/70 max-w-3xl mx-auto leading-relaxed"
        >
          Setiap paket dirancang khusus untuk mendukung target hafalanmu dengan
          bimbingan ustadz profesional dan metode yang terbukti efektif
        </p>
      </div>

      <!-- Class Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <DetailedClassCard
          v-for="(classItem, index) in classesData"
          :key="classItem.id"
          :image="classItem.image"
          :badge="classItem.badge"
          :title="classItem.title"
          :description="classItem.description"
          :details="classItem.details"
          :price="classItem.price"
          :cta-text="classItem.ctaText"
          :whatsapp-class="classItem.whatsappClass"
          :highlighted="classItem.highlighted"
          :aos-delay="index * 150"
        />
      </div>

      <!-- Additional Benefits Section -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Info Card 1 -->
        <div
          class="p-8 bg-white rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex items-start gap-6">
            <div
              class="shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <i class="fa-solid fa-gift text-2xl"></i>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl text-neutral-text-dark mb-3">
                Yang Kamu Dapatkan
              </h3>
              <ul class="space-y-2 text-neutral-text-dark/80">
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-check text-primary mt-1 flex-shrink-0"
                  ></i>
                  <span
                    >Bimbingan personal one-on-one dengan ustadz
                    berpengalaman</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-check text-primary mt-1 flex-shrink-0"
                  ></i>
                  <span>Kajian motivasi Al-Qur'an rutin setiap pekan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-check text-primary mt-1 flex-shrink-0"
                  ></i>
                  <span
                    >E-Sertifikat hafalan resmi setelah menyelesaikan
                    target</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-check text-primary mt-1 flex-shrink-0"
                  ></i>
                  <span>Konsultasi gratis sebelum memulai program</span>
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-check text-primary mt-1 flex-shrink-0"
                  ></i>
                  <span>Jadwal fleksibel sesuai kesepakatan bersama</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Info Card 2 -->
        <div
          class="p-8 bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex items-start gap-6">
            <div
              class="shrink-0 w-14 h-14 bg-accent-gold text-neutral-text-dark rounded-2xl flex items-center justify-center shadow-lg"
            >
              <i class="fa-solid fa-star text-2xl"></i>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl text-neutral-text-dark mb-3">
                Kenapa Harus Pilih Kami?
              </h3>
              <ul class="space-y-2 text-neutral-text-dark/80">
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-certificate text-accent-gold mt-1 flex-shrink-0"
                  ></i>
                  <span
                    >Ustadz bersertifikat dengan pengalaman mengajar 5+
                    tahun</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-certificate text-accent-gold mt-1 flex-shrink-0"
                  ></i>
                  <span>Metode pembelajaran yang sudah terbukti efektif</span>
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-certificate text-accent-gold mt-1 flex-shrink-0"
                  ></i>
                  <span>Komunitas santri yang suportif dan motivatif</span>
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-certificate text-accent-gold mt-1 flex-shrink-0"
                  ></i>
                  <span>Progress tracking dan evaluasi berkala</span>
                </li>
                <li class="flex items-start gap-2">
                  <i
                    class="fa-solid fa-certificate text-accent-gold mt-1 flex-shrink-0"
                  ></i>
                  <span>Harga terjangkau dengan kualitas terbaik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div
        class="relative bg-linear-to-r from-primary via-primary-dark to-primary rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <!-- Decorative Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold rounded-full translate-y-1/2 -translate-x-1/2"
          ></div>
        </div>

        <div class="relative z-10 text-center text-white">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Masih Bingung Pilih Paket yang Mana?
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis dengan tim kami untuk mendapatkan rekomendasi
            paket yang paling sesuai dengan kondisi dan target hafalanmu
          </p>
          <a
            href="https://wa.me/6282117735816?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20program%20tahfizh"
            target="_blank"
            class="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent-gold hover:text-neutral-text-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <i class="fa-brands fa-whatsapp text-xl"></i>
            <span>Konsultasi Gratis Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DetailedClassCard from "@/components/kelas/DetailedClassCard.vue";
import { classes } from "@/data/classes";

const classesData = classes;
</script>
