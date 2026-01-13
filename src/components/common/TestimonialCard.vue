<template>
  <div
    class="testimonial-card bg-neutral-white rounded-xl p-lg shadow-level-3 border border-neutral-gray-light/30 hover:shadow-level-5 transition-all duration-300"
    :class="{ 'p-md': compact }"
    data-aos="zoom-in"
    :data-aos-delay="aosDelay"
  >
    <!-- Header: Photo & Info -->
    <div class="flex items-start gap-md mb-md">
      <!-- Photo -->
      <img
        :src="photo"
        :alt="name"
        class="w-14 h-14 rounded-full object-cover shrink-0"
      />

      <!-- Info -->
      <div class="grow">
        <h4 class="font-semibold text-base text-neutral-text-dark">
          {{ name }}
        </h4>
        <p class="text-sm text-neutral-text-dark opacity-75">{{ classType }}</p>

        <!-- Star Rating -->
        <div class="flex items-center gap-1 mt-1">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-4 h-4"
            :class="
              star <= rating ? 'text-accent-gold' : 'text-neutral-gray-light'
            "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Testimonial Text -->
    <div class="relative">
      <!-- Quote Icon -->
      <svg
        class="absolute -top-2 -left-2 w-8 h-8 text-primary opacity-20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
        />
      </svg>

      <p
        class="text-sm text-neutral-text-dark leading-relaxed italic pl-6"
        :class="{ 'line-clamp-3': compact }"
      >
        "{{ testimonial }}"
      </p>
    </div>

    <!-- Achievement Badge (if not compact) -->
    <div
      v-if="achievement && !compact"
      class="mt-md pt-md border-t border-primary-extra-light"
    >
      <span
        class="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        {{ achievement }}
      </span>
    </div>

    <!-- Date -->
    <p v-if="date" class="text-xs text-neutral-text-dark opacity-60 mt-md">
      {{ date }}
    </p>
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
  classType: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1 && value <= 5,
  },
  testimonial: {
    type: String,
    required: true,
  },
  achievement: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  compact: {
    type: Boolean,
    default: false,
  },
  aosDelay: {
    type: [String, Number],
    default: 0,
  },
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
