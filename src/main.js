import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/styles/main.css";
import App from "./App.vue";

// Import views
import HomePage from "./views/HomePage.vue";
import KelasPage from "./views/KelasPage.vue";
import TentangKamiPage from "./views/TentangKamiPage.vue";

// Router configuration
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: "Beranda - Calon Tahfidzh Indonesia" },
  },
  {
    path: "/kelas",
    name: "Kelas",
    component: KelasPage,
    meta: { title: "Paket Kelas - Calon Tahfidzh Indonesia" },
  },
  {
    path: "/tentang-kami",
    name: "TentangKami",
    component: TentangKamiPage,
    meta: { title: "Tentang Kami - Calon Tahfidzh Indonesia" },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Update page title on route change
router.afterEach((to) => {
  document.title = to.meta.title || "Calon Tahfidzh Indonesia";
});

// Create Vue app
const app = createApp(App);

// Use router
app.use(router);

// Mount app
app.mount("#app");

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false, // Animation replays every time on scroll
  offset: 100, // Trigger point from bottom of viewport
  delay: 100,
  disable: false, // Set to true to disable on mobile
  mirror: true, // Animate out while scrolling past element
});

// Refresh AOS on route change
router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});
