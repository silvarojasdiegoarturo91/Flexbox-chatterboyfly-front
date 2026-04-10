<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-pattern"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <span class="hero-badge">✨ Potencia tu negocio con IA</span>
        <h1 class="hero-title">
          Chatbots Inteligentes que
          <span class="gradient-text">Transforman</span>
          tu Comunicación
        </h1>
        <p class="hero-subtitle">
          Automatiza tu atención al cliente, aumenta ventas y genera leads
          mientras duermes. Nuestros chatbots aprenden de tu negocio.
        </p>
        <div class="hero-buttons">
          <a href="#demo" class="btn-primary">
            <span>Ver Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </a>
          <a href="#features" class="btn-secondary">Características</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">Satisfacción</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Disponibilidad</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">50K+</span>
            <span class="stat-label">Conversaciones</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="chatbot-mockup">
          <div class="mockup-header">
            <div class="mockup-dots">
              <span></span><span></span><span></span>
            </div>
            <span class="mockup-title">ChatterBotFly AI</span>
          </div>
          <div class="mockup-body">
            <div class="message bot-message">
              <div class="avatar">
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
              </div>
              <div class="message-content">
                ¡Hola! Soy ChatterBotFly. ¿En qué puedo ayudarte hoy?
              </div>
            </div>
            <div class="message user-message">
              <div class="message-content">
                Necesito un chatbot para mi tienda online
              </div>
            </div>
            <div class="message bot-message">
              <div class="avatar">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
                  />
                </svg>
              </div>
              <div class="message-content">
                ¡Perfecto! Te muestro nuestras soluciones...
              </div>
            </div>
            <div class="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <div class="floating-element element-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            />
          </svg>
        </div>
        <div class="floating-element element-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll para explorar</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const ease = "power3.out";

  gsap.from(".hero-badge", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease,
    delay: 0.1,
  });
  gsap.from(".hero-title", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease,
    delay: 0.3,
  });
  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease,
    delay: 0.5,
  });
  gsap.from(".hero-buttons", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease,
    delay: 0.65,
  });
  gsap.from(".hero-stats", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease,
    delay: 0.8,
  });
  gsap.from(".hero-visual", {
    opacity: 0,
    x: 50,
    duration: 1.0,
    ease,
    delay: 0.3,
  });
  gsap.from(".floating-element", {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    stagger: 0.15,
    delay: 1.0,
    ease: "back.out(1.7)",
  });
});
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;

  &.orb-1 {
    width: 600px;
    height: 600px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    top: -200px;
    right: -100px;
    animation-delay: 0s;
  }

  &.orb-2 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    bottom: -100px;
    left: -100px;
    animation-delay: -7s;
  }

  &.orb-3 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #f472b6, #a855f7);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -14s;
    opacity: 0.3;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.hero-content {
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
  }
}

.hero-badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  color: #818cf8;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #818cf8, #c084fc, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);

    svg {
      animation: play 0.5s ease;
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
}

@keyframes play {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  color: #fff;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    width: 60px;
    height: 1px;
  }
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
}

.chatbot-mockup {
  width: 380px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.mockup-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mockup-dots {
  display: flex;
  gap: 6px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &:nth-child(1) {
      background: #ef4444;
    }
    &:nth-child(2) {
      background: #eab308;
    }
    &:nth-child(3) {
      background: #22c55e;
    }
  }
}

.mockup-title {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.mockup-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 320px;
}

.message {
  display: flex;
  gap: 10px;
  animation: messageIn 0.4s ease forwards;

  &.bot-message {
    align-self: flex-start;

    .message-content {
      background: rgba(99, 102, 241, 0.2);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 4px 20px 20px 20px;
    }
  }

  &.user-message {
    align-self: flex-end;
    flex-direction: row-reverse;

    .message-content {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 20px 4px 20px 20px;
    }
  }
}

@keyframes messageIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: #fff;
  }
}

.message-content {
  padding: 12px 16px;
  font-size: 14px;
  color: #fff;
  line-height: 1.5;
  max-width: 260px;
}

.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 20px 20px 20px 4px;
  width: fit-content;

  span {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: typing 1.4s ease infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
}

.floating-element {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatElement 6s ease-in-out infinite;

  svg {
    width: 28px;
    height: 28px;
    color: #818cf8;
  }

  &.element-1 {
    top: 10%;
    right: 0;
    animation-delay: 0s;
  }

  &.element-2 {
    bottom: 20%;
    left: 0;
    animation-delay: -3s;
  }
}

@keyframes floatElement {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  animation: bounce 2s ease infinite;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  animation: scroll 2s ease infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(8px);
  }
}
</style>
