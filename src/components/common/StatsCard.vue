<template>
  <div
    class="stats-card text-center"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <!-- Icon -->
    <div v-if="icon" class="mb-6">
      <!-- Users Icon -->
      <svg
        v-if="icon === 'users'"
        class="w-12 h-12 mx-auto text-accent-gold"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
        />
      </svg>

      <!-- Star Icon -->
      <svg
        v-else-if="icon === 'star'"
        class="w-12 h-12 mx-auto text-accent-gold"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>

      <!-- Certificate Icon -->
      <svg
        v-else-if="icon === 'certificate'"
        class="w-12 h-12 mx-auto text-accent-gold"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>

      <!-- Calendar Icon -->
      <svg
        v-else-if="icon === 'calendar'"
        class="w-12 h-12 mx-auto text-accent-gold"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Number with count-up animation -->
    <div class="text-5xl font-bold text-white mb-4">
      <span ref="numberRef">{{ displayNumber }}</span>
      <span v-if="suffix">{{ suffix }}</span>
    </div>

    <!-- Label -->
    <p class="text-base text-white opacity-90 font-medium">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  number: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  suffix: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
    validator: (value) =>
      !value || ["users", "star", "certificate", "calendar"].includes(value),
  },
  aosDelay: {
    type: [String, Number],
    default: 0,
  },
  enableCountUp: {
    type: Boolean,
    default: true,
  },
});

const numberRef = ref(null);
const displayNumber = ref(props.enableCountUp ? "0" : props.number);

// Simple count-up animation
onMounted(() => {
  if (!props.enableCountUp) return;

  const targetNumber = parseInt(props.number.toString().replace(/\D/g, ""));
  if (isNaN(targetNumber)) {
    displayNumber.value = props.number;
    return;
  }

  const duration = 2000; // 2 seconds
  const steps = 60;
  const increment = targetNumber / steps;
  const stepDuration = duration / steps;
  let currentNumber = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            displayNumber.value = props.number;
            clearInterval(interval);
          } else {
            displayNumber.value = Math.floor(currentNumber).toString();
          }
        }, stepDuration);

        observer.disconnect();
      }
    });
  });

  if (numberRef.value) {
    observer.observe(numberRef.value);
  }
});
</script>
