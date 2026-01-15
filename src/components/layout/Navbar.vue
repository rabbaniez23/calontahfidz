<template>
  <nav
    class="fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
    :class="[
      isScrolled
        ? 'top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] lg:w-[85%] rounded-2xl py-3 neumorphic-scrolled'
        : 'top-0 left-0 right-0 bg-transparent py-6',
    ]"
  >
    <div
      class="container mx-auto px-6 flex items-center justify-between"
      :class="{ 'max-w-none': isScrolled }"
    >
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 group relative z-10">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
          :class="
            isScrolled
              ? 'neumorphic-icon text-primary'
              : 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl'
          "
        >
          <!-- Minimalist Quran Icon -->
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <!-- Book shape -->
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            ></path>
            <!-- Bookmark ribbon -->
            <path d="M12 6v12"></path>
            <path d="M10 8l2-2 2 2"></path>
          </svg>
        </div>
        <span
          class="text-xl font-bold tracking-tight transition-colors duration-300"
          :class="
            isScrolled ? 'text-primary' : 'text-primary-dark drop-shadow-sm'
          "
        >
          Calon Hafiz
        </span>
      </router-link>

      <!-- Desktop Navigation -->
      <!-- Initial State (Visible on White) -->
      <div
        class="hidden md:flex items-center bg-white/70 rounded-full p-1.5 backdrop-blur-md border border-white/20 shadow-lg relative z-10"
        v-if="!isScrolled"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
          :class="
            isActive(link.to)
              ? 'bg-primary text-white shadow-md'
              : 'text-primary-dark hover:bg-primary/5'
          "
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- Scrolled State (Neumorphic) -->
      <div class="hidden md:flex items-center space-x-4 relative z-10" v-else>
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300"
          :class="
            isActive(link.to)
              ? 'text-primary neumorphic-btn-active'
              : 'text-primary/70 hover:text-primary neumorphic-btn'
          "
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- CTA Button -->
      <!-- Initial -->
      <div v-if="!isScrolled" class="hidden md:block">
        <button
          class="group relative px-6 py-2.5 rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105 active:scale-95 bg-accent-gold text-neutral-text-dark"
        >
          <a
            :href="getWhatsAppContactLink()"
            target="_blank"
            class="relative z-10 font-bold text-sm flex items-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-lg"></i>
            Hubungi Kami
          </a>
        </button>
      </div>

      <!-- Scrolled (Neumorphic) -->
      <div v-else class="hidden md:block">
        <a
          :href="getWhatsAppContactLink()"
          target="_blank"
          class="neumorphic-btn px-6 py-2.5 rounded-full font-bold text-sm text-primary flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <i class="fa-brands fa-whatsapp text-lg text-[#25d366]"></i>
          <span>Hubungi Kami</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-xl transition-all relative z-10"
        :class="
          isScrolled
            ? 'neumorphic-btn text-primary'
            : 'text-primary hover:bg-primary/5'
        "
        aria-label="Toggle menu"
      >
        <i
          class="fa-solid"
          :class="isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'"
          style="font-size: 1.5rem"
        ></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform -translate-y-4 opacity-0 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-4 right-4 mt-4 rounded-3xl overflow-hidden origin-top z-40 p-6"
        :class="
          isScrolled
            ? 'neumorphic-mobile-menu'
            : 'bg-white shadow-2xl border border-neutral-100'
        "
      >
        <div class="space-y-4">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="closeMobileMenu"
            class="block py-4 px-6 rounded-2xl text-sm font-bold transition-all text-center"
            :class="[
              isActive(link.to)
                ? isScrolled
                  ? 'text-primary neumorphic-btn-active'
                  : 'bg-primary text-white shadow-md'
                : isScrolled
                ? 'text-neutral-text-dark/70 hover:text-primary neumorphic-btn'
                : 'text-neutral-text-dark hover:bg-neutral-50',
            ]"
          >
            {{ link.label }}
          </router-link>

          <a
            :href="getWhatsAppContactLink()"
            target="_blank"
            class="block text-center font-bold py-4 px-6 rounded-2xl mt-6 active:scale-95 transition-transform"
            :class="
              isScrolled
                ? 'neumorphic-btn text-primary'
                : 'bg-accent-gold text-neutral-text-dark shadow-lg'
            "
          >
            <i
              class="fa-brands fa-whatsapp mr-2"
              :class="isScrolled ? 'text-[#25d366]' : ''"
            ></i>
            Hubungi Kami
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { getWhatsAppContactLink } from "@/utils/whatsapp";

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/kelas", label: "Pilihan Kelas" },
];

const isActive = (path) => {
  return route.path === path;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/*
  NEUMORPHISM THEME
  Base Color: #e0f2f1 (Primary Light/Mint)
  Light Shadow: #ffffff
  Dark Shadow: #c1d9d7 (Darker Teal-Tinted Grey)
*/

.neumorphic-scrolled {
  background-color: #e0f2f1;
  box-shadow: 7px 7px 14px #c1d9d7, -7px -7px 14px #ffffff;
}

.neumorphic-btn {
  background: #e0f2f1;
  box-shadow: 5px 5px 10px #c1d9d7, -5px -5px 10px #ffffff;
  border-radius: 50px; /* Use large radius for pill shape */
}

.neumorphic-btn:hover {
  box-shadow: 3px 3px 6px #c1d9d7, -3px -3px 6px #ffffff;
  transform: translateY(-1px);
}

.neumorphic-btn:active {
  box-shadow: inset 5px 5px 10px #c1d9d7, inset -5px -5px 10px #ffffff;
}

.neumorphic-btn-active {
  background: #e0f2f1;
  box-shadow: inset 5px 5px 10px #c1d9d7, inset -5px -5px 10px #ffffff;
  border-radius: 50px;
}

.neumorphic-icon {
  background: #e0f2f1;
  box-shadow: 5px 5px 10px #c1d9d7, -5px -5px 10px #ffffff;
}

.neumorphic-mobile-menu {
  background-color: #e0f2f1;
  box-shadow: 20px 20px 60px #c1d9d7, -20px -20px 60px #ffffff;
}
</style>
