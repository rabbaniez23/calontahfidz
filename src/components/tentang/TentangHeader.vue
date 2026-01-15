<template>
  <section
    class="page-header gradient-primary text-neutral-white py-12 px-8 text-center relative overflow-hidden"
  >
    <!-- Animated Overlay -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      ></div>
    </div>

    <div class="container mx-auto max-w-4xl relative z-10" data-aos="fade-down">
      <h1 class="text-4xl md:text-5xl font-bold mb-5">Tentang Kami</h1>
      <p class="text-lg md:text-xl opacity-95 leading-relaxed">
        Mengenal lebih dekat visi dan tim di balik Calon Tahfidz Indonesia
      </p>

      <!-- Breadcrumb -->
      <nav
        class="flex items-center justify-center gap-2 mt-8 text-sm opacity-90"
      >
        <router-link to="/" class="hover:opacity-100 transition-opacity"
          >Beranda</router-link
        >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Tentang Kami</span>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
