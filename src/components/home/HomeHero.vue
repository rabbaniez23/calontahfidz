<template>
  <section
    class="hero-section relative pt-4 pb-20 overflow-hidden bg-background-light dark:bg-background-dark"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-5">
        <!-- Content -->
        <div class="flex-1 text-center lg:text-left z-10" data-aos="fade-right">
          <span
            class="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary font-bold text-sm mb-6 shadow-sm"
          >
            #1 Platform Tahfidzh Online
          </span>
          <h1
            class="text-5xl lg:text-4xl font-extrabold leading-tight mb-6 text-neutral-text-dark"
          >
            Apa itu
            <span class="text-primary"
              >{{ typedText }}<span class="typing-cursor">|</span></span
            >
          </h1>
          <p
            class="text-md text-neutral-text-dark opacity-80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Sebuah platform online yang memudahkan teman-teman kita di luar sana
            untuk menghafal Al-Qur'an secara online. Melalui kelas ini kami
            berharap bisa membantu teman-teman yang ingin menghafal Al-Qur'an
            yang terkendala oleh tidak adanya guru dan tempat menghafal, Calon
            Tahfidzh hadir untuk membantu teman-teman semua.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <router-link
              to="/kelas"
              class="border-2 border-primary text-neutral-text-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-level-3 hover:shadow-level-4 hover:bg-primary transition duration-300"
            >
              Daftar Sekarang
            </router-link>
            <a
              href="#video-profil"
              class="flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-neutral-gray-light hover:bg-neutral-off-white transition-colors text-neutral-text-dark"
            >
              <svg
                class="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              Lihat Pilihan Kelas
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="flex-1 relative" data-aos="fade-left">
          <div
            class="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform -translate-y-12 scale-90"
          ></div>
          <img
            :src="images.heroBg"
            alt="Santri Menghafal"
            class="relative rounded-3xl shadow-2xl z-10 border-8 border-white object-cover h-[450px] w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { images } from "@/data/images";

const typedText = ref("");
const fullText = "Calon Hafiz?";
let typeIndex = 0;
let isDeleting = false;
let typeSpeed = 150; // ms per character

const typeEffect = () => {
  if (!isDeleting && typeIndex <= fullText.length) {
    // Typing
    typedText.value = fullText.substring(0, typeIndex);
    typeIndex++;
    setTimeout(typeEffect, typeSpeed);
  } else if (!isDeleting && typeIndex > fullText.length) {
    // Pause before deleting
    isDeleting = true;
    setTimeout(typeEffect, 2000); // Pause 2 seconds
  } else if (isDeleting && typeIndex > 0) {
    // Deleting
    typeIndex--;
    typedText.value = fullText.substring(0, typeIndex);
    setTimeout(typeEffect, typeSpeed / 2); // Delete faster
  } else if (isDeleting && typeIndex === 0) {
    // Restart
    isDeleting = false;
    setTimeout(typeEffect, 500); // Short pause before retyping
  }
};

onMounted(() => {
  setTimeout(typeEffect, 1000); // Start after 1 second
});
</script>

<style scoped>
/* Blinking Cursor */
.typing-cursor {
  display: inline-block;
  color: var(--color-primary);
  animation: blink 0.7s infinite;
  font-weight: 300;
  margin-left: 2px;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
</style>
