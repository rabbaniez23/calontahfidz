<template>
  <section class="about-section py-20 px-8 bg-neutral-white">
    <div class="container mx-auto max-w-6xl">
      <SectionHeading
        title="Kenalan dengan Calon Tahfidzh Indonesia"
        subtitle="Platform tahfizh online terpercaya yang telah dipercaya ratusan santri"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div data-aos="fade-right">
          <img
            :src="images.aboutImage"
            alt="Tentang Calon Tahfidzh"
            class="rounded-xl shadow-level-5 w-full"
          />
        </div>

        <!-- Content -->
        <div data-aos="fade-left" data-aos-delay="200">
          <p class="text-base text-neutral-text-dark leading-relaxed mb-md">
            Yayasan Calon Tahfidzh Indonesia adalah lembaga pendidikan Al-Qur'an
            yang berfokus pada program tahfizh online. Kami hadir untuk
            memudahkan siapa saja yang ingin menghafal Al-Qur'an dengan metode
            yang terbukti efektif.
          </p>

          <p class="text-base text-neutral-text-dark leading-relaxed mb-8">
            Dengan pengajar berpengalaman lulusan pondok pesantren ternama, kami
            memberikan bimbingan personal one-on-one melalui video call untuk
            memastikan setiap santri mendapat perhatian maksimal.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-md">
            <div class="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div class="text-3xl font-bold text-primary">500+</div>
              <div class="text-sm text-neutral-text-dark opacity-75">
                Santri Aktif
              </div>
            </div>
            <div class="text-center" data-aos="zoom-in" data-aos-delay="400">
              <div class="text-3xl font-bold text-primary">95%</div>
              <div class="text-sm text-neutral-text-dark opacity-75">
                Kepuasan
              </div>
            </div>
            <div class="text-center" data-aos="zoom-in" data-aos-delay="500">
              <div class="text-3xl font-bold text-primary">50+</div>
              <div class="text-sm text-neutral-text-dark opacity-75">
                Alumni Tahfidzh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/common/SectionHeading.vue";
import { images } from "@/data/images";
</script>
