<template>
  <footer
    class="footer bg-linear-to-br from-primary via-[#0a9488] to-[#0d7a73] text-white pt-20 pb-10 relative overflow-hidden"
  >
    <!-- Decorative Elements -->
    <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <!-- Decorative Pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute top-10 right-20 text-6xl">✨</div>
      <div class="absolute top-32 left-16 text-4xl">📖</div>
      <div class="absolute bottom-20 right-32 text-5xl">🕌</div>
      <div class="absolute bottom-32 left-24 text-3xl">⭐</div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shrink-0 shadow-lg overflow-hidden ring-2 ring-white/20"
            >
              <img
                src="/logo.jpeg"
                alt="Calon Hafiz Logo"
                class="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <span
                class="text-2xl font-bold tracking-tight text-white drop-shadow-sm block"
                >Calon Hafiz</span
              >
              <span class="text-xs text-white/70"
                >🌟 Platform Tahfizh Online</span
              >
            </div>
          </div>
          <p class="text-white/80 mb-8 leading-relaxed text-sm">
            Platform belajar mengaji dan menghafal Al-Qur'an online terpercaya
            di Indonesia dengan visi mencetak generasi Qurani yang berakhlak
            mulia.
          </p>

          <!-- Social Media dengan Gradient Background -->
          <div class="flex gap-3">
            <a
              href="https://www.instagram.com/calon_hafiz/"
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:from-white hover:to-white/90 hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              <i
                class="fa-brands fa-instagram text-lg group-hover:rotate-12 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:from-white hover:to-white/90 hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              <i
                class="fa-brands fa-facebook-f text-lg group-hover:rotate-12 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:from-white hover:to-white/90 hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              <i
                class="fa-brands fa-youtube text-lg group-hover:rotate-12 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:from-white hover:to-white/90 hover:text-primary hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              <i
                class="fa-brands fa-tiktok text-lg group-hover:rotate-12 transition-transform"
              ></i>
            </a>
          </div>
        </div>

        <!-- Program -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-accent-gold rounded-full"></div>
            <h5 class="text-white font-bold text-lg tracking-wide">
              <i class="fa-solid fa-book-quran text-accent-gold mr-2"></i>
              Pilihan Kelas
            </h5>
          </div>
          <ul class="space-y-4">
            <li v-for="link in programLinks" :key="link.to">
              <router-link
                :to="link.to"
                class="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 text-sm group"
              >
                <div
                  class="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent-gold group-hover:scale-110 transition-all"
                >
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </div>
                <span class="group-hover:font-medium">{{ link.label }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Link Penting -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-accent-gold rounded-full"></div>
            <h5 class="text-white font-bold text-lg tracking-wide">
              <i class="fa-solid fa-link text-accent-gold mr-2"></i>
              Link Penting
            </h5>
          </div>
          <ul class="space-y-4">
            <li v-for="link in usefulLinks" :key="link.to">
              <template v-if="link.internal">
                <router-link
                  :to="link.to"
                  class="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 text-sm group"
                >
                  <div
                    class="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent-gold group-hover:scale-110 transition-all"
                  >
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                  </div>
                  <span class="group-hover:font-medium">{{ link.label }}</span>
                </router-link>
              </template>
              <template v-else>
                <a
                  :href="link.to"
                  class="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 text-sm group"
                >
                  <div
                    class="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent-gold group-hover:scale-110 transition-all"
                  >
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                  </div>
                  <span class="group-hover:font-medium">{{ link.label }}</span>
                </a>
              </template>
            </li>
          </ul>
        </div>

        <!-- Hubungi Kami -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-accent-gold rounded-full"></div>
            <h5 class="text-white font-bold text-lg tracking-wide">
              <i class="fa-solid fa-headset text-accent-gold mr-2"></i>
              Hubungi Kami
            </h5>
          </div>
          <ul class="space-y-5 text-white/80 text-sm">
            <li class="flex items-start gap-4 group">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center shrink-0 group-hover:from-accent-gold group-hover:to-accent-gold/80 group-hover:text-primary transition-all shadow-md"
              >
                <i class="fa-solid fa-location-dot text-base"></i>
              </div>
              <span
                class="leading-relaxed group-hover:text-white transition-colors pt-2"
                >Bangka Belitung, Indonesia</span
              >
            </li>
            <li class="flex items-start gap-4 group">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center shrink-0 group-hover:from-accent-gold group-hover:to-accent-gold/80 group-hover:text-primary transition-all shadow-md"
              >
                <i class="fa-solid fa-phone text-base"></i>
              </div>
              <a
                href="tel:085339915411"
                class="leading-relaxed group-hover:text-white transition-colors pt-2 hover:underline"
                >085339915411</a
              >
            </li>
            <li class="flex items-start gap-4 group">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center shrink-0 group-hover:from-accent-gold group-hover:to-accent-gold/80 group-hover:text-primary transition-all shadow-md"
              >
                <i class="fa-solid fa-envelope text-base"></i>
              </div>
              <a
                href="mailto:info@calontahfidz.com"
                class="leading-relaxed group-hover:text-white transition-colors pt-2 hover:underline"
                >calontahfidz.com</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section with Divider -->
      <div class="border-t-2 border-white/10 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-center md:text-left text-sm text-white/70">
            <i class="fa-solid fa-heart text-red-400 mx-1"></i>
            &copy; {{ currentYear }}
            <span class="font-semibold text-white">Calon Hafiz Indonesia</span>.
            All rights reserved.
          </p>
          <div class="flex items-center gap-4 text-xs text-white/60">
            <a href="#" class="hover:text-white transition-colors"
              >Privacy Policy</a
            >
            <span>•</span>
            <a href="#" class="hover:text-white transition-colors"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());

const programLinks = [
  { label: "Kelas Murojaah", to: "/kelas" },
  { label: "Kelas Ziyadah Intensif", to: "/kelas" },
  { label: "Kelas Ziyadah Reguler", to: "/kelas" },
];

const usefulLinks = [
  { label: "Tentang Kami", to: "/tentang-kami", internal: true },
  { label: "FAQ", to: "/#faq", internal: false },
  { label: "Testimoni", to: "/#testimoni", internal: false },
];
</script>
