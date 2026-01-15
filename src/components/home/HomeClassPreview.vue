<template>
  <section id="program" class="py-16 md:py-20 relative overflow-hidden">
    <!-- Background Gradient -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary/5 via-accent-gold/5 to-neutral-off-white"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <!-- Left Side - Copywriting -->
        <div class="space-y-8" data-aos="fade-right">
          <!-- Badge -->
          <div class="inline-block">
            <span
              class="bg-accent-gold/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
            >
              ✨ Program Unggulan Kami
            </span>
          </div>

          <!-- Heading -->
          <div>
            <h2
              class="text-4xl md:text-5xl lg:text-5xl font-extrabold text-neutral-text-dark leading-[1.2] mb-6"
            >
              Wujudkan Impian Menjadi
              <span class="text-primary block mt-3">Penghafal Al-Qur'an</span>
            </h2>

            <p
              class="text-base md:text-lg text-neutral-text-dark/70 leading-relaxed max-w-xl"
            >
              Pilih program yang sesuai dengan kemampuan dan targetmu. Mulai
              dari kelas reguler untuk pemula, intensif untuk yang ingin cepat
              khatam, hingga muroja'ah untuk menjaga hafalan.
            </p>
          </div>

          <!-- Feature Items -->
          <div class="space-y-5 pt-2">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0"
              >
                <i class="fa-solid fa-check text-xl"></i>
              </div>
              <div class="flex-1 pt-1">
                <h4 class="font-bold text-neutral-text-dark text-lg mb-1.5">
                  Bimbingan Personal
                </h4>
                <p class="text-sm text-neutral-text-dark/65 leading-relaxed">
                  Sesi one-on-one dengan ustadz berpengalaman
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0"
              >
                <i class="fa-solid fa-check text-xl"></i>
              </div>
              <div class="flex-1 pt-1">
                <h4 class="font-bold text-neutral-text-dark text-lg mb-1.5">
                  Jadwal Fleksibel
                </h4>
                <p class="text-sm text-neutral-text-dark/65 leading-relaxed">
                  Sesuaikan dengan waktu dan kesibukanmu
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0"
              >
                <i class="fa-solid fa-check text-xl"></i>
              </div>
              <div class="flex-1 pt-1">
                <h4 class="font-bold text-neutral-text-dark text-lg mb-1.5">
                  Harga Terjangkau
                </h4>
                <p class="text-sm text-neutral-text-dark/65 leading-relaxed">
                  Investasi terbaik untuk akhiratmu, mulai dari 75K/bulan
                </p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <router-link
              to="/kelas"
              class="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold text-base rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Lihat Semua Program</span>
              <i class="fa-solid fa-arrow-right"></i>
            </router-link>
          </div>
        </div>

        <!-- Right Side - Visual Element -->
        <div class="relative" data-aos="fade-left" data-aos-delay="200">
          <!-- Stats Cards -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
              >
                <i class="fa-solid fa-users text-xl"></i>
              </div>
              <div class="text-3xl font-bold text-primary mb-1">3</div>
              <div class="text-sm text-neutral-text-dark/60">Paket Program</div>
            </div>

            <!-- Card 2 -->
            <div
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center text-neutral-text-dark mb-4"
              >
                <i class="fa-solid fa-book-quran text-xl"></i>
              </div>
              <div class="text-3xl font-bold text-primary mb-1">1-5</div>
              <div class="text-sm text-neutral-text-dark/60">Lembar/Hari</div>
            </div>

            <!-- Card 3 - Spans 2 columns -->
            <div
              class="col-span-2 bg-linear-to-r from-primary to-primary-dark p-6 rounded-2xl shadow-xl text-white"
            >
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm opacity-90 mb-2">Mulai Dari</div>
                  <div class="text-4xl font-bold">
                    75K<span class="text-xl">/bulan</span>
                  </div>
                </div>
                <div
                  class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <i class="fa-solid fa-tag text-2xl"></i>
                </div>
              </div>
            </div>

            <!-- Card 4 -->
            <div
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
              >
                <i class="fa-solid fa-calendar-check text-xl"></i>
              </div>
              <div class="text-3xl font-bold text-primary mb-1">16-20x</div>
              <div class="text-sm text-neutral-text-dark/60">Per Bulan</div>
            </div>

            <!-- Card 5 -->
            <div
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center text-neutral-text-dark mb-4"
              >
                <i class="fa-solid fa-certificate text-xl"></i>
              </div>
              <div class="text-3xl font-bold text-primary mb-1">✓</div>
              <div class="text-sm text-neutral-text-dark/60">E-Sertifikat</div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No imports needed for this simplified version
</script>
