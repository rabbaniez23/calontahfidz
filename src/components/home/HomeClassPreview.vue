<template>
  <section id="program" class="bg-neutral-off-white py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Centered Heading -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-primary">
          Program Unggulan
        </h2>
        <p
          class="text-neutral-text-dark opacity-70 max-w-2xl mx-auto leading-relaxed"
        >
          Pilihan terbaik untuk perjalanan menghafal Al-Qur'an Anda.
        </p>
      </div>

      <!-- Class Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Kelas Muroja'ah -->
        <div
          class="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative h-56">
            <img
              :src="images.class1"
              alt="Kelas Muroja'ah"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4">
              <span
                class="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-xs shadow-sm"
              >
                Muroja'ah
              </span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow">
            <h3 class="text-2xl font-bold text-neutral-text-dark mb-2">
              Kelas Muroja'ah
            </h3>
            <p class="text-sm text-neutral-text-dark opacity-60 mb-6">
              Cocok untuk menjaga dan melancarkan hafalan yang sudah Anda
              miliki.
            </p>

            <div class="space-y-3 mb-8 grow">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <i class="fa-regular fa-calendar-check"></i>
                </div>
                <div>
                  <p class="text-sm font-bold text-neutral-text-dark">
                    20x Pertemuan
                  </p>
                  <p class="text-xs opacity-60">5x sepekan</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <div>
                  <p class="text-sm font-bold text-neutral-text-dark">
                    Target 5 Lembar
                  </p>
                  <p class="text-xs opacity-60">Per setoran (maksimal)</p>
                </div>
              </div>
            </div>

            <div
              class="pt-6 border-t border-neutral-100 flex items-center justify-between"
            >
              <div>
                <p class="text-xs opacity-60">Biaya/Bulan</p>
                <p class="text-2xl font-bold text-primary">125K</p>
              </div>
              <router-link
                to="/kelas"
                class="px-6 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm"
              >
                Daftar
              </router-link>
            </div>
          </div>
        </div>

        <!-- Kelas Ziyadah Intensif -->
        <div
          class="bg-white rounded-[2rem] overflow-hidden shadow-2xl relative transform md:-translate-y-4 border-2 border-accent-gold/30 flex flex-col z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 bg-accent-gold text-neutral-text-dark font-bold px-4 py-1 rounded-b-xl text-xs shadow-md z-20"
          >
            TERPOPULER
          </div>
          <div class="relative h-56">
            <img
              :src="images.class2"
              alt="Kelas Intensif"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4">
              <span
                class="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-xs shadow-sm"
              >
                Intensif
              </span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow">
            <h3 class="text-2xl font-bold text-neutral-text-dark mb-2">
              Ziyadah Intensif
            </h3>
            <p class="text-sm text-neutral-text-dark opacity-60 mb-6">
              Program akselerasi untuk Anda yang punya target khatam cepat 30
              Juz.
            </p>

            <div class="space-y-3 mb-8 grow">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-neutral-text-dark"
                >
                  <i class="fa-regular fa-calendar-check"></i>
                </div>
                <div>
                  <p class="text-sm font-bold text-neutral-text-dark">
                    20x Pertemuan
                  </p>
                  <p class="text-xs opacity-60">4x Setoran + 1x Muroja'ah</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-neutral-text-dark"
                >
                  <i class="fa-solid fa-person-running"></i>
                </div>
                <div>
                  <p class="text-sm font-bold text-neutral-text-dark">
                    Target 2 Lembar
                  </p>
                  <p class="text-xs opacity-60">Per setoran (maksimal)</p>
                </div>
              </div>
            </div>

            <div
              class="pt-6 border-t border-neutral-100 flex items-center justify-between"
            >
              <div>
                <p class="text-xs opacity-60">Biaya/Bulan</p>
                <p class="text-2xl font-bold text-primary">100K</p>
              </div>
              <router-link
                to="/kelas"
                class="px-6 py-2 rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition-colors text-sm shadow-lg hover:shadow-xl"
              >
                Daftar
              </router-link>
            </div>
          </div>
        </div>

        <!-- Kelas Ziyadah Reguler -->
        <div
          class="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="relative h-56">
            <img
              :src="images.class3"
              alt="Kelas Reguler"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4">
              <span
                class="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-xs shadow-sm"
              >
                Reguler
              </span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow">
            <h3 class="text-2xl font-bold text-neutral-text-dark mb-2">
              Ziyadah Reguler
            </h3>
            <p class="text-sm text-neutral-text-dark opacity-60 mb-6">
              Pilihan tepat bagi pemula yang baru mulai menghafal Al-Qur'an.
            </p>

            <div class="space-y-3 mb-8 grow">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <i class="fa-regular fa-calendar-check"></i>
                </div>
                <div>
                  <p class="text-sm font-bold text-neutral-text-dark">
                    16x Pertemuan
                  </p>
                  <p class="text-xs opacity-60">3x Setoran + 1x Muroja'ah</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <i class="fa-solid fa-leaf"></i>
                </div>
                <div>
                  <p class="text-sm font-bold text-neutral-text-dark">
                    Target 1 Lembar
                  </p>
                  <p class="text-xs opacity-60">Per setoran (maksimal)</p>
                </div>
              </div>
            </div>

            <div
              class="pt-6 border-t border-neutral-100 flex items-center justify-between"
            >
              <div>
                <p class="text-xs opacity-60">Biaya/Bulan</p>
                <p class="text-2xl font-bold text-primary">75K</p>
              </div>
              <router-link
                to="/kelas"
                class="px-6 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm"
              >
                Daftar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { images } from "@/data/images";
</script>
