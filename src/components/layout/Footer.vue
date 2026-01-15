<template>
  <footer
    class="footer bg-linear-to-br from-primary to-[#0d7a73] text-white pt-20 pb-10 relative overflow-hidden"
  >
    <!-- Decorative Circle -->
    <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div
              class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shrink-0 shadow-lg overflow-hidden"
            >
              <img
                src="/logo.jpeg"
                alt="Calon Tahfidzh Logo"
                class="w-full h-full object-contain p-1"
              />
            </div>
            <span
              class="text-2xl font-bold tracking-tight text-white drop-shadow-sm"
              >Calon Tahfidzh</span
            >
          </div>
          <p class="text-white/80 mb-8 leading-relaxed text-sm">
            Platform belajar mengaji dan menghafal Al-Qur'an online terpercaya
            di Indonesia dengan visi mencetak generasi Qurani yang berakhlak
            mulia.
          </p>
          <div class="flex gap-4">
            <!-- Social Media Icons (Twitter/X placeholder for 'Instagram' slot just for variety or keep Instagram) -->
            <a
              href="https://www.instagram.com/calon_hafiz/"
              class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group"
            >
              <i
                class="fa-brands fa-instagram text-lg group-hover:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group"
            >
              <i
                class="fa-brands fa-facebook-f text-lg group-hover:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group"
            >
              <i
                class="fa-brands fa-youtube text-lg group-hover:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group"
            >
              <i
                class="fa-brands fa-tiktok text-lg group-hover:scale-110 transition-transform"
              ></i>
            </a>
          </div>
        </div>

        <!-- Program -->
        <div>
          <h5
            class="text-white font-bold mb-6 text-lg tracking-wide border-b border-white/20 pb-2 inline-block"
          >
            Program Kami
          </h5>
          <ul class="space-y-4">
            <li v-for="link in programLinks" :key="link.to">
              <router-link
                :to="link.to"
                class="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <i
                  class="fa-solid fa-chevron-right text-xs text-accent-gold opacity-0 hover:opacity-100 transition-opacity"
                ></i>
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Link Penting -->
        <div>
          <h5
            class="text-white font-bold mb-6 text-lg tracking-wide border-b border-white/20 pb-2 inline-block"
          >
            Link Penting
          </h5>
          <ul class="space-y-4">
            <li v-for="link in usefulLinks" :key="link.to">
              <template v-if="link.internal">
                <router-link
                  :to="link.to"
                  class="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm"
                >
                  <i
                    class="fa-solid fa-chevron-right text-xs text-accent-gold opacity-0 hover:opacity-100 transition-opacity"
                  ></i>
                  {{ link.label }}
                </router-link>
              </template>
              <template v-else>
                <a
                  :href="link.to"
                  class="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm"
                >
                  <i
                    class="fa-solid fa-chevron-right text-xs text-accent-gold opacity-0 hover:opacity-100 transition-opacity"
                  ></i>
                  {{ link.label }}
                </a>
              </template>
            </li>
          </ul>
        </div>

        <!-- Hubungi Kami -->
        <div>
          <h5
            class="text-white font-bold mb-6 text-lg tracking-wide border-b border-white/20 pb-2 inline-block"
          >
            Hubungi Kami
          </h5>
          <ul class="space-y-6 text-white/80 text-sm">
            <li class="flex items-start gap-4 group">
              <div
                class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold group-hover:text-primary transition-colors"
              >
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <span class="leading-relaxed">bangka</span>
            </li>
            <li class="flex items-center gap-4 group">
              <div
                class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold group-hover:text-primary transition-colors"
              >
                <i class="fa-solid fa-phone"></i>
              </div>
              <span>085339915411</span>
            </li>
            <li class="flex items-center gap-4 group">
              <div
                class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold group-hover:text-primary transition-colors"
              >
                <i class="fa-solid fa-envelope"></i>
              </div>
              <span>calontahfidz.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t-2 border-white/10 pt-8 text-center md:flex-row justify-between items-center gap-4 text-xs text-white/60"
      >
        <p class="text-center">
          &copy; {{ currentYear }} Calon Tahfidzh Indonesia. All rights
          reserved.
        </p>
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
  { label: "Kelas", to: "#", internal: false },
  { label: "Tentang Kami", to: "#", internal: false },
];
</script>
