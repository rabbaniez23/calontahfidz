<template>
  <div
    class="section-heading text-center mb-12 px-4 md:px-0"
    :class="alignmentClass"
    data-aos="fade-up"
  >
    <h2 class="text-3xl lg:text-4xl font-bold text-primary mb-5 leading-tight">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="text-lg text-neutral-text-dark opacity-80 max-w-2xl mx-auto leading-relaxed"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  alignment: {
    type: String,
    default: "center",
    validator: (value) => ["left", "center", "right"].includes(value),
  },
});

const alignmentClass = computed(() => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return alignments[props.alignment];
});
</script>
