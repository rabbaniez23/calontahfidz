<template>
  <!-- Modern Dynamic Banner with Marquee -->
  <transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="transform -translate-y-20 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-20 opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-full max-w-7xl px-4"
    >
      <div
        class="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary to-white shadow-2xl backdrop-blur-md border border-primary/20"
        style="
          background-size: 200% 100%;
          animation: gradient-shift 3s ease infinite;
        "
      >
        <!-- Animated Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0 pattern-dots"></div>
        </div>

        <!-- Glow Effect -->
        <div
          class="absolute inset-0 bg-linear-to-b from-white/20 to-transparent"
        ></div>

        <div class="relative flex items-center py-3 px-4">
          <!-- Icon Badge -->
          <div class="shrink-0 mr-4 relative">
            <div
              class="absolute inset-0 bg-primary blur-lg opacity-30 animate-pulse"
            ></div>
            <div
              class="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-6 h-6 text-white animate-bounce-slow"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>

          <!-- Marquee Container -->
          <div class="flex-1 overflow-hidden">
            <div class="marquee-container">
              <div class="marquee-content">
                <!-- Badge -->
                <span
                  class="inline-flex items-center px-3 py-1 bg-primary text-white font-bold text-xs rounded-full mr-4 shadow-md"
                >
                  🎉 PROMO SPESIAL RAMADAN
                </span>

                <!-- Scrolling Text -->
                <span
                  class="text-neutral-text-dark font-bold text-sm md:text-base mr-8"
                >
                  ✨ Raih Pahala Berlipat dengan Menghafal Al-Qur'an di Bulan
                  Suci ✨
                </span>

                <span
                  class="text-neutral-text-dark/80 font-medium text-sm mr-8"
                >
                  💰 Diskon 30% untuk Pendaftaran Kelas Tahfizh
                </span>

                <span class="text-primary font-bold text-sm mr-8">
                  ⏰ TERBATAS! Hanya sampai akhir bulan
                </span>

                <!-- Duplicate for seamless loop -->
                <span
                  class="inline-flex items-center px-3 py-1 bg-primary text-white font-bold text-xs rounded-full mr-4 shadow-md"
                >
                  🎉 PROMO SPESIAL RAMADAN
                </span>

                <span
                  class="text-neutral-text-dark font-bold text-sm md:text-base mr-8"
                >
                  ✨ Raih Pahala Berlipat dengan Menghafal Al-Qur'an di Bulan
                  Suci ✨
                </span>

                <span
                  class="text-neutral-text-dark/80 font-medium text-sm mr-8"
                >
                  💰 Diskon 30% untuk Pendaftaran Kelas Tahfizh
                </span>

                <span class="text-primary font-bold text-sm mr-8">
                  ⏰ TERBATAS! Hanya sampai akhir bulan
                </span>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <a
            :href="ctaLink"
            target="_blank"
            class="shrink-0 ml-4 px-5 py-2.5 bg-primary text-white font-bold text-sm rounded-full hover:bg-primary-dark hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            <span>Daftar</span>
            <svg
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <!-- Close Button -->
          <button
            @click="dismiss"
            class="shrink-0 ml-2 w-8 h-8 rounded-full bg-neutral-text-dark/10 hover:bg-neutral-text-dark/20 flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <svg
              class="w-4 h-4 text-neutral-text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getWhatsAppContactLink } from "@/utils/whatsapp";

const isVisible = ref(false);

// WhatsApp link with pre-filled message
const ctaLink = getWhatsAppContactLink(
  "Halo, saya ingin mendaftar Kelas Spesial Ramadan dengan diskon 30%"
);

const dismiss = () => {
  isVisible.value = false;
  localStorage.setItem("ramadan-banner-dismissed", "true");
};

onMounted(() => {
  // const dismissed = localStorage.getItem("ramadan-banner-dismissed");

  // Always show for now (comment out to enable dismiss memory)
  // if (!dismissed) {
  setTimeout(() => {
    isVisible.value = true;
  }, 1000);
  // }
});
</script>

<style scoped>
/* Gradient Animation */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Marquee Animation */
.marquee-container {
  display: flex;
  overflow: hidden;
  user-select: none;
}

.marquee-content {
  display: flex;
  animation: marquee 25s linear infinite;
  white-space: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause on hover */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

/* Smooth bounce animation */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .marquee-content {
    animation-duration: 20s;
  }
}

/* Pattern Dots Background */
.pattern-dots {
  background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.05) 10px,
      rgba(255, 255, 255, 0.05) 20px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.05) 10px,
      rgba(255, 255, 255, 0.05) 20px
    );
}
</style>
