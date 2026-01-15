<template>
  <section class="py-12 bg-white" ref="sectionRef">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="bg-primary rounded-[3rem] py-10 px-8 shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500 max-w-md mx-auto"
        data-aos="fade-up"
      >
        <!-- Decorative Background -->
        <div
          class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        ></div>

        <!-- Single Stat Content -->
        <div class="relative z-10 text-center text-white">
          <h3 class="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
            {{ stat.displayValue }}{{ stat.suffix }}
          </h3>
          <p
            class="text-primary-light font-medium text-base md:text-lg opacity-90"
          >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const sectionRef = ref(null);
const hasAnimated = ref(false);

const stat = ref({
  label: "Negara Terjangkau",
  target: 16,
  currentValue: 0,
  displayValue: "0",
  suffix: "+",
});

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);

    const current = start + (end - start) * easeOutQuart;
    obj.currentValue = current;
    obj.displayValue = Math.floor(current).toString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.displayValue = end.toString();
    }
  };
  window.requestAnimationFrame(step);
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true;
          animateValue(stat.value, 0, stat.value.target, 2000);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>
