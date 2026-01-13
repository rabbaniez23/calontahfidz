<template>
  <section class="journey-section py-16 px-8 bg-neutral-off-white">
    <div class="container mx-auto max-w-4xl">
      <SectionHeading
        title="Perjalanan Kami"
        subtitle="Jejak langkah Calon Hafiz dalam membersamai umat"
      />

      <div class="relative pl-8 md:pl-0">
        <!-- Vertical Line -->
        <div
          class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"
        ></div>

        <!-- Timeline Items -->
        <div
          v-for="(item, index) in achievements"
          :key="index"
          class="relative mb-12 last:mb-0"
          data-aos="fade-up"
        >
          <!-- Dot -->
          <div
            class="absolute left-8 md:left-1/2 w-6 h-6 bg-accent-gold rounded-full border-4 border-white shadow-md -translate-x-1/2 mt-1.5 z-10"
          ></div>

          <div class="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
            <!-- Year (Left/Right alternating on desktop) -->
            <div
              class="w-full md:w-1/2 pl-12 md:pl-0 md:text-right"
              :class="{
                'md:order-1': index % 2 === 0,
                'md:order-2 md:pl-24': index % 2 !== 0,
              }"
            >
              <span
                class="inline-block px-4 py-1 bg-primary text-neutral-white rounded-full font-bold text-sm mb-2"
              >
                {{ item.year }}
              </span>
            </div>

            <!-- Content (Right/Left alternating on desktop) -->
            <div
              class="w-full md:w-1/2 pl-12 md:pl-0"
              :class="{
                'md:order-2 md:pl-24': index % 2 === 0,
                'md:order-1 md:text-right md:pr-24': index % 2 !== 0,
              }"
            >
              <h3 class="text-xl font-bold text-primary mb-2">
                {{ item.title }}
              </h3>
              <p class="text-neutral-text-dark opacity-80">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/common/SectionHeading.vue";
import { achievements } from "@/data/team";
</script>
