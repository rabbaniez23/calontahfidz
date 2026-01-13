<template>
  <section class="values-section py-16 px-8 bg-neutral-white">
    <div class="container mx-auto max-w-6xl">
      <SectionHeading
        title="Nilai-Nilai Kami"
        subtitle="Prinsip yang kami pegang dalam mendidik generasi Qur'ani"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(value, index) in coreValues"
          :key="index"
          class="bg-neutral-off-white p-8 rounded-xl text-center hover:bg-primary-light transition-colors group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div
            class="w-16 h-16 rounded-full bg-white mx-auto mb-5 flex items-center justify-center shadow-level-2 group-hover:scale-110 transition-transform"
          >
            <!-- Integrity Icon (Shield Check) -->
            <svg
              v-if="value.icon === 'integrity'"
              class="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>

            <!-- Excellence Icon (Star) -->
            <svg
              v-else-if="value.icon === 'excellence'"
              class="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <!-- Commitment Icon (Heart) -->
            <svg
              v-else-if="value.icon === 'commitment'"
              class="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>

            <!-- Compassion Icon (Hand Heart) -->
            <svg
              v-else-if="value.icon === 'compassion'"
              class="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="font-bold text-lg text-primary mb-4">
            {{ value.title }}
          </h3>
          <p class="text-sm text-neutral-text-dark opacity-90 leading-relaxed">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/common/SectionHeading.vue";
import { coreValues } from "@/data/team";
</script>
