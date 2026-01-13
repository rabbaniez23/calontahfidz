<template>
  <div
    class="feature-card gradient-primary rounded-xl p-8 text-center text-neutral-white shadow-level-5 relative overflow-hidden hover-lift border border-white/10"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <!-- Pulse background animation -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div
        class="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-white opacity-10 pulse-animation"
      ></div>
    </div>

    <!-- Icon -->
    <div
      class="relative z-10 w-20 h-20 bg-neutral-white rounded-full mx-auto mb-5 flex items-center justify-center shadow-level-3"
    >
      <!-- Clock Icon -->
      <svg
        v-if="icon === 'clock'"
        class="w-10 h-10 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clip-rule="evenodd"
        />
      </svg>

      <!-- Teacher Icon -->
      <svg
        v-else-if="icon === 'teacher'"
        class="w-10 h-10 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
        />
      </svg>

      <!-- Video Icon -->
      <svg
        v-else-if="icon === 'video'"
        class="w-10 h-10 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
        />
      </svg>

      <!-- Certificate Icon -->
      <svg
        v-else-if="icon === 'certificate'"
        class="w-10 h-10 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
      <p class="text-base opacity-95 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator: (value) =>
      ["clock", "teacher", "video", "certificate"].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  aosDelay: {
    type: [String, Number],
    default: 0,
  },
});
</script>
