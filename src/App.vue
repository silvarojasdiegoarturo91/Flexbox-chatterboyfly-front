<template>
  <div class="app">
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <a href="#" class="nav-logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
            />
            <circle cx="8" cy="14" r="1" />
            <circle cx="16" cy="14" r="1" />
          </svg>
          <span>ChatterBotFly</span>
        </a>

        <div class="nav-links" :class="{ active: mobileMenuOpen }">
          <a href="#features">Características</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Precios</a>
        </div>

        <div class="nav-actions">
          <a href="#contact" class="nav-cta">Comenzar</a>
          <button
            class="nav-mobile-toggle"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <main>
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <CTASection />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./components/HeroSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import DemoSection from "./components/DemoSection.vue";
import PricingSection from "./components/PricingSection.vue";
import CTASection from "./components/CTASection.vue";

gsap.registerPlugin(ScrollTrigger);

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
let lenis: Lenis | null = null;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // Único punto de actualización: gsap.ticker sincroniza Lenis con ScrollTrigger
  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  lenis.on("scroll", ScrollTrigger.update);

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  lenis?.destroy();
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  background: #0a0a0f;
  color: #fff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(10, 10, 15, 0.9);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 12px 0;
  }
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  svg {
    width: 32px;
    height: 32px;
    color: #818cf8;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
}

.nav-links {
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 24px;
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &.active {
      transform: translateY(0);
    }
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-cta {
  padding: 10px 24px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.nav-mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 24px;
    height: 2px;
    background: #fff;
    transition: all 0.3s ease;
  }
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
