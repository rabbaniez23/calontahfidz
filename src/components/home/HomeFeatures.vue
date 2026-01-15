<template>
  <section
    id="about"
    class="py-24 bg-gradient-to-b from-white via-[#f0f9f9] to-white relative overflow-hidden"
  >
    <!-- Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
    ></div>
    <div
      class="absolute top-20 right-0 -mr-32 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 left-0 -ml-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" data-aos="fade-up">
        <span
          class="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4"
        >
          Keunggulan Kami
        </span>
        <h2
          class="text-3xl lg:text-5xl font-extrabold mb-6 text-neutral-text-dark tracking-tight"
        >
          Mengapa Memilih
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark"
            >Calon Hafiz?</span
          >
        </h2>
        <p
          class="max-w-2xl mx-auto text-neutral-text-dark/60 text-lg leading-relaxed"
        >
          Kami berkomitmen memberikan pengalaman menghafal Al-Qur'an terbaik
          dengan fasilitas dan metode yang terukur.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:gap-10">
        <!-- Feature 1 -->
        <div
          class="p-1 rounded-[2.5rem] bg-gradient-to-b from-white to-white/50 hover:from-accent-gold/20 hover:to-primary/20 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:shadow-primary/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="h-full bg-white rounded-[2.3rem] p-8 lg:p-10 flex flex-col items-start relative overflow-hidden group-hover:bg-white/90 transition-colors"
          >
            <!-- Icon -->
            <div class="mb-8 relative ">
              <div
                class="absolute inset-0 bg-accent-gold/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fff9c4] to-[#fff176] flex items-center justify-center text-accent-gold-dark shadow-inner shadow-white/50 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 "
              >
                <svg
                  class="w-8 h-8 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <h3
              class="text-2xl font-bold mb-4 text-neutral-text-dark group-hover:text-primary transition-colors"
            >
              Waktu Fleksibel
            </h3>
            <p
              class="text-neutral-text-dark/70 leading-relaxed group-hover:text-neutral-text-dark transition-colors"
            >
              Atur jadwal hafalanmu sendiri sesuai waktu luang, memberikan
              kebebasan penuh bagi pelajar maupun pekerja untuk tetap istiqomah.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div
          class="p-1 rounded-[2.5rem] bg-gradient-to-b from-white to-white/50 hover:from-accent-gold/20 hover:to-primary/20 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:shadow-primary/5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="h-full bg-white rounded-[2.3rem] p-8 lg:p-10 flex flex-col items-start relative overflow-hidden group-hover:bg-white/90 transition-colors"
          >
            <!-- Icon -->
            <div class="mb-8 relative">
              <div
                class="absolute inset-0 bg-accent-gold/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fff9c4] to-[#fff176] flex items-center justify-center text-accent-gold-dark shadow-inner shadow-white/50 relative z-10 group-hover:-translate-y-2 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  />
                </svg>
              </div>
            </div>

            <h3
              class="text-2xl font-bold mb-4 text-neutral-text-dark group-hover:text-primary transition-colors"
            >
              Privat & Kelompok
            </h3>
            <p
              class="text-neutral-text-dark/70 leading-relaxed group-hover:text-neutral-text-dark transition-colors"
            >
              Pilih metode yang paling nyaman untukmu, baik bimbingan intensif
              satu-lawan-satu atau semangat kebersamaan dalam kelompok.
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div
          class="p-1 rounded-[2.5rem] bg-gradient-to-b from-white to-white/50 hover:from-accent-gold/20 hover:to-primary/20 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:shadow-primary/5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="h-full bg-white rounded-[2.3rem] p-8 lg:p-10 flex flex-col items-start relative overflow-hidden group-hover:bg-white/90 transition-colors"
          >
            <!-- Icon -->
            <div class="mb-8 relative">
              <div
                class="absolute inset-0 bg-accent-gold/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fff9c4] to-[#fff176] flex items-center justify-center text-accent-gold-dark shadow-inner shadow-white/50 relative z-10 group-hover:-translate-y-2 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <h3
              class="text-2xl font-bold mb-4 text-neutral-text-dark group-hover:text-primary transition-colors"
            >
              Sertifikat Resmi
            </h3>
            <p
              class="text-neutral-text-dark/70 leading-relaxed group-hover:text-neutral-text-dark transition-colors"
            >
              Validasi pencapaianmu dengan sertifikat resmi yang diakui, menjadi
              bukti otentik setiap kali menyelesaikan level hafalan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
