<template>
  <section class="py-12 bg-white" ref="sectionRef">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="bg-primary rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500"
        data-aos="fade-up"
      >
        <!-- Decorative Background -->
        <div
          class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        ></div>

        <!-- Grid Content -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center text-white"
        >
          <div v-for="(stat, index) in stats" :key="index" class="group">
            <h3 class="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
              {{ stat.displayValue }}{{ stat.suffix }}
            </h3>
            <p
              class="text-primary-light font-medium text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity"
            >
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const sectionRef = ref(null);
const hasAnimated = ref(false);

const stats = ref([
  {
    label: "Ustadz Pengajar",
    target: 500,
    currentValue: 0,
    displayValue: "0",
    suffix: "+",
    isFloat: false,
  },
  {
    label: "Negara Terjangkau",
    target: 16,
    currentValue: 0,
    displayValue: "0",
    suffix: "+",
    isFloat: false,
  },
  {
    label: "Lulusan Tahfidzh",
    target: 1000,
    currentValue: 0,
    displayValue: "0",
    suffix: "+",
    isFloat: false,
    formatK: true,
  },
  {
    label: "Rating Kepuasan",
    target: 4.9,
    currentValue: 0,
    displayValue: "0",
    suffix: "",
    isFloat: true,
  },
]);

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);

    const current = start + (end - start) * easeOutQuart;

    obj.currentValue = current;

    if (obj.formatK && current >= 1000) {
      obj.displayValue = (current / 1000).toFixed(1).replace(".0", "") + "k";
    } else if (obj.isFloat) {
      obj.displayValue = current.toFixed(1);
    } else {
      obj.displayValue = Math.floor(current).toString();
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      // Ensure final value is exact
      if (obj.formatK && end >= 1000) {
        obj.displayValue = (end / 1000).toFixed(0) + "k"; // e.g. 1k
      } else if (obj.isFloat) {
        obj.displayValue = end.toFixed(1);
      } else {
        obj.displayValue = end.toString();
      }
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
          stats.value.forEach((stat) => {
            animateValue(stat, 0, stat.target, 2000); // 2 second animation
          });
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
