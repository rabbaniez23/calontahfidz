<template>
  <div
    class="team-member-card bg-white rounded-2xl overflow-hidden shadow-level-3 hover:shadow-level-5 transition-all duration-300 group"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <!-- Header with Gradient Background -->
    <div class="relative gradient-primary p-8 pb-16">
      <!-- Decorative Elements -->
      <div
        class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"
      ></div>

      <!-- Photo Container -->
      <div class="relative z-10 flex justify-center">
        <div class="relative">
          <div
            class="absolute inset-0 bg-accent-gold rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
          ></div>
          <img
            :src="photo"
            :alt="name"
            class="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="px-6 pb-6 -mt-8 relative">
      <!-- Role Badge -->
      <div class="flex justify-center mb-4">
        <span
          class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary text-sm font-bold rounded-full border-2 border-white shadow-md"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
            />
          </svg>
          {{ role }}
        </span>
      </div>

      <!-- Name -->
      <h3
        class="text-xl font-bold text-primary text-center mb-3 group-hover:text-primary-dark transition-colors"
      >
        {{ name }}
      </h3>

      <!-- Education with Icon -->
      <div
        class="flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-neutral-off-white rounded-lg"
      >
        <svg
          class="w-5 h-5 text-accent-gold shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
          />
        </svg>
        <span class="text-sm text-neutral-text-dark font-medium">{{
          education
        }}</span>
      </div>

      <!-- Bio with better line height -->
      <p
        class="text-sm text-neutral-text-dark leading-relaxed text-center opacity-80"
      >
        {{ bio }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  aosDelay: {
    type: [String, Number],
    default: 0,
  },
});
</script>
