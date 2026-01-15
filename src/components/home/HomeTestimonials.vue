<template>
  <section id="testimoni" class="py-24 bg-primary-light/40 overflow-hidden">
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"
      data-aos="fade-up"
    >
      <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-primary">
        Apa Kata Mereka?
      </h2>
      <p class="text-neutral-text-dark opacity-70">
        Ulasan jujur dari para santri dan orang tua santri Calon Hafiz.
      </p>
      <div class="flex items-center justify-center gap-2 mt-4">
        <span class="text-2xl font-bold text-neutral-text-dark">4.9</span>
        <div class="flex text-yellow-500 text-lg">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <span class="text-sm text-neutral-text-dark opacity-60"
          >(500+ Reviews)</span
        >
      </div>
    </div>

    <!-- Marquee Container -->
    <div class="relative w-full overflow-hidden mask-fade-sides">
      <div class="flex gap-6 w-max animate-marquee hover:pause-animation">
        <!-- Original Set -->
        <div
          v-for="(item, index) in testimonials"
          :key="`orig-${index}`"
          class="w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 flex-shrink-0 select-none"
        >
          <!-- G-Maps Header -->
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <img
                  :src="item.photo"
                  alt="Avatar"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-bold text-neutral-text-dark text-sm">
                  {{ item.name }}
                </h4>
                <div
                  class="flex text-xs text-neutral-text-dark opacity-60 items-center gap-1"
                >
                  <span>{{
                    ["1 bulan lalu", "3 minggu lalu", "2 bulan lalu"][index % 3]
                  }}</span>
                </div>
              </div>
            </div>
            <img
              src="./logo.jpeg"
              alt="Google"
              class="w-5 h-5 opacity-70"
            />
          </div>

          <!-- Stars -->
          <div class="flex text-yellow-500 text-xs mb-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>

          <!-- Text -->
          <p
            class="text-sm text-neutral-text-dark leading-relaxed line-clamp-4"
          >
            {{ item.testimonial }}
          </p>
        </div>

        <!-- Duplicate Set for Loop -->
        <div
          v-for="(item, index) in testimonials"
          :key="`dup-${index}`"
          class="w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 flex-shrink-0 select-none"
        >
          <!-- G-Maps Header -->
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <img
                  :src="item.photo"
                  alt="Avatar"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-bold text-neutral-text-dark text-sm">
                  {{ item.name }}
                </h4>
                <div
                  class="flex text-xs text-neutral-text-dark opacity-60 items-center gap-1"
                >
                  <span>{{
                    ["1 bulan lalu", "3 minggu lalu", "2 bulan lalu"][index % 3]
                  }}</span>
                </div>
              </div>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              class="w-5 h-5 opacity-70"
            />
          </div>

          <!-- Stars -->
          <div class="flex text-yellow-500 text-xs mb-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>

          <!-- Text -->
          <p
            class="text-sm text-neutral-text-dark leading-relaxed line-clamp-4"
          >
            {{ item.testimonial }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from "@/data/testimonials";
// Duplicating data effectively done in template by rendering the list twice
</script>

<style scoped>
.animate-marquee {
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move half the width (one full set) */
  }
}

.pause-animation:hover {
  animation-play-state: paused;
}

.mask-fade-sides {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
}
</style>
