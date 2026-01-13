<template>
  <section id="faq" class="relative py-24 overflow-hidden bg-primary-light/30">
    <!-- 3D Background Motion Blobs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-multiply"
      ></div>
      <div
        class="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"
      ></div>
      <div
        class="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-accent-gold/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"
      ></div>
    </div>

    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl lg:text-5xl font-extrabold mb-4 text-center text-primary tracking-tight"
        data-aos="fade-up"
      >
        Pertanyaan Populer
      </h2>
      <p
        class="text-center text-neutral-text-dark/60 mb-12 max-w-lg mx-auto"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Informasi yang mungkin Anda butuhkan sebelum bergabung.
      </p>

      <div class="space-y-6">
        <div
          v-for="(faq, index) in faqsData.slice(0, 5)"
          :key="faq.id"
          class="relative group perspective"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          @click="toggle(index)"
        >
          <!-- 3D Shadow/Platform Layer -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform translate-y-2 translate-x-0 transition-all duration-300 group-hover:translate-y-4 group-hover:blur-sm"
          ></div>

          <!-- Main Card Layer -->
          <div
            class="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/60 cursor-pointer transition-all duration-300 transform-gpu"
            :class="[
              activeIndex === index
                ? 'translate-y-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] border-primary/20 bg-white/90'
                : 'hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:bg-white/90',
            ]"
          >
            <div class="flex justify-between items-center gap-6">
              <h4
                class="font-bold text-lg text-neutral-text-dark group-hover:text-primary transition-colors flex-1"
              >
                {{ faq.question }}
              </h4>
              <div
                class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm border border-neutral-100"
                :class="{
                  'rotate-180 bg-primary text-white border-primary shadow-inner scale-110':
                    activeIndex === index,
                  'group-hover:scale-110 group-hover:border-primary/30':
                    activeIndex !== index,
                }"
              >
                <i
                  class="fa-solid fa-chevron-down text-sm"
                  :class="activeIndex === index ? 'text-white' : 'text-primary'"
                ></i>
              </div>
            </div>

            <div
              v-show="activeIndex === index"
              class="grid grid-rows-[0fr] transition-all duration-300"
              :class="{
                'grid-rows-[1fr] mt-4 pt-4 border-t border-dashed border-primary/10':
                  activeIndex === index,
              }"
            >
              <div class="overflow-hidden">
                <p
                  class="text-neutral-text-dark/80 leading-relaxed text-sm lg:text-base"
                >
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { faqs } from "@/data/faq";

const faqsData = faqs;
const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
