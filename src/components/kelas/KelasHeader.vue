<template>
  <section
    class="page-header gradient-primary text-neutral-white py-20 px-6 text-center relative overflow-hidden"
  >
    <!-- Animated Floating Icons Background -->
    <div class="absolute inset-0 z-0 opacity-15">
      <!-- Book Icons -->
      <div class="floating-icon book-1">
        <svg
          class="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 4H7a2 2 0 00-2 2v13a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 18V6h14v12H7zM3 6v13c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2z"
          />
        </svg>
      </div>

      <div class="floating-icon book-2">
        <svg
          class="w-12 h-12 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 4H7a2 2 0 00-2 2v13a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 18V6h14v12H7zM3 6v13c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2z"
          />
        </svg>
      </div>

      <!-- Star Icons -->
      <div class="floating-icon star-1">
        <svg
          class="w-10 h-10 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>

      <div class="floating-icon star-2">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>

      <div class="floating-icon star-3">
        <svg
          class="w-6 h-6 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>

      <!-- Sparkle Icons -->
      <div class="floating-icon sparkle-1">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164-5.934-5.787 8.2-1.191z"
          />
        </svg>
      </div>

      <div class="floating-icon sparkle-2">
        <svg
          class="w-6 h-6 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164-5.934-5.787 8.2-1.191z"
          />
        </svg>
      </div>
    </div>

    <div
      class="container mx-auto max-w-5xl relative z-10"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <!-- Accent Line -->
      <div class="flex items-center justify-center mb-5">
        <div class="h-0.5 w-20 bg-accent-gold"></div>
      </div>

      <!-- Title with 3D Effect -->
      <h1 class="title-3d text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Paket Kelas Tahfizh Online
      </h1>

      <!-- Description -->
      <p
        class="text-base md:text-lg opacity-95 max-w-2xl mx-auto leading-relaxed"
      >
        Pilih paket yang sesuai dengan target dan kemampuan menghafal Anda
      </p>

      <!-- Breadcrumb -->
      <nav
        class="flex items-center justify-center gap-2 mt-8 text-sm opacity-80"
      >
        <router-link
          to="/"
          class="hover:opacity-100 hover:text-accent-gold transition-all duration-300"
        >
          Beranda
        </router-link>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-accent-gold font-medium">Kelas</span>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .page-header {
    min-height: 320px;
  }
}

/* 3D Text Effect with Glitch Animation */
.title-3d {
  color: #ffffff;
  text-shadow: 1px 1px 0 #0f5567, 2px 2px 0 #0f5567, 3px 3px 0 #0a3d4d,
    4px 4px 0 #0a3d4d, 5px 5px 10px rgba(0, 0, 0, 0.3),
    6px 6px 20px rgba(19, 111, 136, 0.5);
  position: relative;
  display: inline-block;
}

/* Glitch Effect Layers */
.title-3d::before,
.title-3d::after {
  content: "Paket Kelas Tahfizh Online";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title-3d::before {
  color: #00ffff;
  z-index: -1;
  animation: glitch-1 2s infinite;
  text-shadow: 2px 0 #00ffff;
}

.title-3d::after {
  color: #ff00ff;
  z-index: -2;
  animation: glitch-2 2.5s infinite;
  text-shadow: -2px 0 #ff00ff;
}

.title-3d:hover::before {
  animation: glitch-1 0.5s infinite;
}

.title-3d:hover::after {
  animation: glitch-2 0.6s infinite;
}

/* Floating Animation Icons */
.floating-icon {
  position: absolute;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.book-1 {
  top: 15%;
  left: 10%;
  animation: float 6s infinite;
}

.book-2 {
  top: 60%;
  right: 8%;
  animation: float 7s infinite;
  animation-delay: -2s;
}

.star-1 {
  top: 25%;
  right: 15%;
  animation: float 5s infinite, twinkle 3s infinite;
  animation-delay: -1s;
}

.star-2 {
  bottom: 20%;
  left: 12%;
  animation: float 8s infinite, twinkle 4s infinite;
  animation-delay: -3s;
}

.star-3 {
  top: 70%;
  left: 25%;
  animation: float 6s infinite, twinkle 2.5s infinite;
  animation-delay: -1.5s;
}

.sparkle-1 {
  top: 40%;
  left: 5%;
  animation: float 7s infinite, rotate 10s linear infinite;
  animation-delay: -2.5s;
}

.sparkle-2 {
  bottom: 30%;
  right: 20%;
  animation: float 5.5s infinite, rotate 8s linear infinite;
  animation-delay: -4s;
}

/* Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-25px) translateX(5px);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes glitch-1 {
  0% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  10% {
    transform: translate(-5px, 2px);
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
  20% {
    transform: translate(3px, -1px);
    clip-path: polygon(0 20%, 100% 15%, 100% 85%, 0 80%);
  }
  30% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  40% {
    transform: translate(2px, 3px);
    clip-path: polygon(0 5%, 100% 10%, 100% 95%, 0 90%);
  }
  50% {
    transform: translate(-3px, -2px);
    clip-path: polygon(0 15%, 100% 5%, 100% 88%, 0 92%);
  }
  60% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  70% {
    transform: translate(-2px, 1px);
    clip-path: polygon(0 8%, 100% 12%, 100% 87%, 0 95%);
  }
  80% {
    transform: translate(4px, -3px);
    clip-path: polygon(0 18%, 100% 8%, 100% 92%, 0 85%);
  }
  90%,
  100% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  15% {
    transform: translate(4px, -2px);
    clip-path: polygon(0 12%, 100% 5%, 100% 93%, 0 88%);
  }
  25% {
    transform: translate(-2px, 3px);
    clip-path: polygon(0 8%, 100% 18%, 100% 82%, 0 90%);
  }
  35% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  45% {
    transform: translate(-5px, 1px);
    clip-path: polygon(0 20%, 100% 10%, 100% 88%, 0 95%);
  }
  55% {
    transform: translate(3px, -4px);
    clip-path: polygon(0 5%, 100% 15%, 100% 90%, 0 85%);
  }
  65% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  75% {
    transform: translate(2px, 2px);
    clip-path: polygon(0 15%, 100% 8%, 100% 85%, 0 92%);
  }
  85% {
    transform: translate(-3px, -1px);
    clip-path: polygon(0 10%, 100% 20%, 100% 92%, 0 88%);
  }
  95%,
  100% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
