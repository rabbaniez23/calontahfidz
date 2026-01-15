<template>
  <div
    class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    :class="[
      highlighted
        ? 'border-2 border-accent-gold/50 relative scale-105'
        : 'border border-neutral-100',
    ]"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <!-- Popular Badge -->
    <div
      v-if="highlighted"
      class="absolute top-0 left-1/2 -translate-x-1/2 bg-accent-gold text-neutral-text-dark font-bold px-6 py-2 rounded-b-xl text-sm shadow-lg z-20"
    >
      ⭐ TERPOPULER
    </div>

    <!-- Image Section -->
    <div class="relative h-56 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <!-- Badge Overlay -->
      <div class="absolute top-4 right-4">
        <span
          class="bg-white/95 backdrop-blur-sm text-primary font-bold px-4 py-2 rounded-full text-sm shadow-lg"
        >
          {{ badge }}
        </span>
      </div>
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
      ></div>
    </div>

    <!-- Content Section -->
    <div class="p-8 flex flex-col grow">
      <!-- Title & Description -->
      <h3 class="text-2xl font-bold text-neutral-text-dark mb-3">
        {{ title }}
      </h3>
      <p class="text-sm text-neutral-text-dark/70 mb-6 leading-relaxed">
        {{ description }}
      </p>

      <!-- Details Grid -->
      <div class="space-y-4 mb-8 grow">
        <div
          v-for="(detail, index) in details"
          :key="index"
          class="flex items-start gap-3"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            :class="
              highlighted
                ? 'bg-accent-gold/20 text-neutral-text-dark'
                : 'bg-primary/10 text-primary'
            "
          >
            <i :class="detail.icon" class="text-lg"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-bold text-neutral-text-dark">
              {{ detail.title }}
            </p>
            <p class="text-xs text-neutral-text-dark/60">
              {{ detail.subtitle }}
            </p>
          </div>
        </div>
      </div>

      <!-- Price & CTA -->
      <div class="pt-6 border-t border-neutral-100">
        <div class="flex items-center justify-between mb-6">
          <div>
            <p class="text-xs text-neutral-text-dark/60 mb-1">Biaya/Bulan</p>
            <div class="flex items-baseline gap-1">
              <span class="text-3xl font-bold text-primary">{{ price }}</span>
              <span class="text-sm text-neutral-text-dark/60">/bulan</span>
            </div>
          </div>
          <div
            v-if="highlighted"
            class="bg-accent-gold/10 text-accent-gold px-4 py-2 rounded-full text-xs font-bold"
          >
            Best Value
          </div>
        </div>

        <!-- CTA Button -->
        <a
          :href="whatsappLink"
          target="_blank"
          class="block w-full text-center font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          :class="
            highlighted
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'bg-neutral-text-dark text-white hover:bg-primary'
          "
        >
          <i class="fa-brands fa-whatsapp mr-2"></i>
          {{ ctaText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { generateWhatsAppLink } from "@/utils/whatsapp";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ctaText: {
    type: String,
    default: "Daftar Sekarang",
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
