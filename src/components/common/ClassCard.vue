<template>
  <div
    class="class-card rounded-xl overflow-hidden shadow-level-3 transition-all duration-300 hover:shadow-level-5 hover:-translate-y-2 border border-primary-extra-light"
    :class="[
      highlighted
        ? 'gradient-primary text-neutral-white scale-105 shadow-level-5'
        : 'bg-neutral-white',
    ]"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <!-- Badge -->
    <div class="px-8 pt-6 pb-4">
      <span
        class="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wide"
        :class="
          highlighted
            ? 'bg-accent-gold text-neutral-text-dark shadow-accent'
            : 'bg-primary-light text-primary'
        "
      >
        {{ badge }}
      </span>
    </div>

    <!-- Content -->
    <div class="px-8 pb-8">
      <!-- Title & Price -->
      <h3
        class="text-feature font-extrabold mb-sm"
        :class="highlighted ? 'text-neutral-white' : 'text-primary'"
      >
        {{ title }}
      </h3>

      <div class="mb-md">
        <span class="text-4xl font-extrabold">{{ price }}</span>
        <span class="text-lg opacity-90 font-medium">/{{ period }}</span>
      </div>

      <p
        class="text-base mb-lg leading-relaxed"
        :class="
          highlighted ? 'opacity-95' : 'text-neutral-text-dark opacity-90'
        "
      >
        {{ tagline }}
      </p>

      <!-- Features List -->
      <ul class="space-y-4 mb-8 text-left">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-3 text-sm font-medium"
          :class="highlighted ? 'text-neutral-white' : 'text-neutral-text-dark'"
        >
          <!-- Checkmark Icon -->
          <div
            class="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            :class="highlighted ? 'bg-white/20' : 'bg-primary-light'"
          >
            <svg
              class="w-3.5 h-3.5"
              :class="highlighted ? 'text-accent-gold' : 'text-primary'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="leading-relaxed">{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <a
        :href="whatsappLink"
        target="_blank"
        class="block w-full text-center font-bold py-4 px-6 rounded-full shadow-level-2 hover:shadow-level-4 hover:-translate-y-1 transition-all duration-300 transform"
        :class="
          highlighted
            ? 'bg-neutral-white text-primary'
            : 'bg-accent-gold text-neutral-text-dark'
        "
      >
        {{ ctaText }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { generateWhatsAppLink } from "@/utils/whatsapp";

const props = defineProps({
  badge: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    default: "Bulan",
  },
  tagline: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  ctaText: {
    type: String,
    required: true,
  },
  whatsappClass: {
    type: String,
    required: true,
  },
  highlighted: {
    type: Boolean,
    default: false,
  },
  aosDelay: {
    type: [String, Number],
    default: 0,
  },
});

const whatsappLink = computed(() => generateWhatsAppLink(props.whatsappClass));
</script>
