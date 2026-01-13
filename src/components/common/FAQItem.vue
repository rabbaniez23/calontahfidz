<template>
  <div
    class="faq-item bg-neutral-off-white rounded-faq p-lg mb-md border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer"
    @click="toggle"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <!-- Question -->
    <div class="flex items-start justify-between gap-md">
      <h4 class="font-semibold text-base text-neutral-text-dark grow">
        {{ question }}
      </h4>

      <!-- Chevron Icon -->
      <svg
        class="w-5 h-5 text-primary shrink-0 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Answer (Expandable) -->
    <transition name="expand">
      <div
        v-if="isOpen"
        class="mt-md pt-md border-t border-primary-extra-light"
      >
        <p class="text-sm text-neutral-text-dark opacity-90 leading-relaxed">
          {{ answer }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  aosDelay: {
    type: [String, Number],
    default: 0,
  },
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
