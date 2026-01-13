<template>
  <section class="visi-misi-section py-16 px-8 bg-neutral-white">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- Visi -->
        <div data-aos="fade-right">
          <div
            class="bg-primary-light rounded-xl p-8 h-full border border-primary/10 hover:shadow-level-3 transition-shadow"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 rounded-full bg-primary text-neutral-white flex items-center justify-center shrink-0"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 111.772.954l-2.439 4.569 1.94 1.94a1 1 0 01-1.414 1.414l-1.5-1.5.028.176A6 6 0 015 15.65V18a1 1 0 11-2 0v-2.35a6.002 6.002 0 011.002-11.775V3a1 1 0 011-1zm0 5a4.002 4.002 0 00-3.921 3.12 1 1 0 01.442.062l5.772-2.31A3.996 3.996 0 0010 7z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-primary">Visi Kami</h2>
            </div>
            <p
              class="text-base text-neutral-text-dark leading-relaxed font-medium"
            >
              "{{ visiMisi.visi }}"
            </p>
          </div>
        </div>

        <!-- Misi -->
        <div data-aos="fade-left" data-aos-delay="200">
          <div
            class="bg-neutral-white rounded-xl p-8 h-full border border-neutral-gray-light/50 hover:shadow-level-3 transition-shadow"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 rounded-full bg-accent-gold text-neutral-text-dark flex items-center justify-center shrink-0"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-primary">Misi Kami</h2>
            </div>
            <ul class="space-y-4">
              <li
                v-for="(misi, index) in visiMisi.misi"
                :key="index"
                class="flex items-start gap-3"
              >
                <svg
                  class="w-5 h-5 text-accent-gold mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-neutral-text-dark leading-relaxed">{{
                  misi
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { visiMisi } from "@/data/team";
</script>
