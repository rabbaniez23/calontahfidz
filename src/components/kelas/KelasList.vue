<template>
  <section class="class-cards-section py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="container mx-auto max-w-7xl">
      <!-- Simple Heading -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-text-dark mb-4">
          Pilih <span class="text-primary">Paket Kelas</span>
        </h2>
      </div>

      <!-- Class Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DetailedClassCard
          v-for="(classItem, index) in classesData"
          :key="classItem.id"
          :image="classItem.image"
          :badge="classItem.badge"
          :title="classItem.title"
          :description="classItem.description"
          :details="classItem.details"
          :price="classItem.price"
          :cta-text="classItem.ctaText"
          :whatsapp-class="classItem.whatsappClass"
          :highlighted="classItem.highlighted"
          :aos-delay="index * 150"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import DetailedClassCard from "@/components/kelas/DetailedClassCard.vue";
import { classes } from "@/data/classes";

const classesData = classes;
</script>
