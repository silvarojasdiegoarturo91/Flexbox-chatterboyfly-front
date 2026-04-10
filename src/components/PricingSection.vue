<template>
  <section ref="sectionRef" id="pricing" class="pricing-section">
    <div class="pricing-bg">
      <div class="pricing-orb orb-1"></div>
      <div class="pricing-orb orb-2"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Precios</span>
        <h2 class="section-title">
          Planes para cada
          <span class="highlight">negocio</span>
        </h2>
        <p class="section-subtitle">
          Elige el plan perfecto para tus necesidades
        </p>
      </div>

      <div class="pricing-grid">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="pricing-card"
          :class="{ featured: plan.featured }"
        >
          <div v-if="plan.featured" class="featured-badge">Más Popular</div>
          <div class="plan-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>
          <div class="plan-price">
            <span class="currency">$</span>
            <span class="amount">{{ plan.price }}</span>
            <span class="period">/mes</span>
          </div>
          <ul class="plan-features">
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ feature }}
            </li>
          </ul>
          <button class="plan-button" :class="{ primary: plan.featured }">
            {{ plan.buttonText }}
          </button>
        </div>
      </div>

      <div class="pricing-footer">
        <p>¿Necesitas un plan personalizado?</p>
        <a href="#contact" class="contact-link">Contáctanos →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);
let ctx: ReturnType<typeof gsap.context>;

const plans = [
  {
    name: "Básico",
    description: "Perfecto para pequeños negocios",
    price: 29,
    features: [
      "1 Chatbot",
      "500 conversaciones/mes",
      "Integración web",
      "Soporte por email",
      "Analíticas básicas",
    ],
    buttonText: "Comenzar Gratis",
    featured: false,
  },
  {
    name: "Profesional",
    description: "Para empresas en crecimiento",
    price: 79,
    features: [
      "3 Chatbots",
      "Conversaciones ilimitadas",
      "Todos los canales",
      "IA avanzada GPT-4",
      "Analíticas completas",
      "Soporte prioritario",
      "Personalización total",
    ],
    buttonText: "Comenzar Prueba",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Soluciones a medida",
    price: "Custom",
    features: [
      "Chatbots ilimitados",
      "Volume ilimitado",
      "Integraciones personalizadas",
      "API completa",
      "Gerente de cuenta",
      "SLA garantizado",
      "Onboarding especializado",
    ],
    buttonText: "Contactar Ventas",
    featured: false,
  },
];

onMounted(() => {
  ctx = gsap.context(() => {
    const ease = "power3.out";

    gsap.from(".section-header", {
      scrollTrigger: { trigger: ".pricing-section", start: "top 85%" },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease,
    });

    gsap.from(".pricing-card", {
      scrollTrigger: { trigger: ".pricing-grid", start: "top 85%" },
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.75,
      ease,
    });
  }, sectionRef);
});

onUnmounted(() => ctx?.revert());
</script>

<style lang="scss" scoped>
.pricing-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.pricing-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.pricing-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);

  &.orb-1 {
    width: 500px;
    height: 500px;
    background: rgba(139, 92, 246, 0.2);
    top: -100px;
    right: -100px;
  }

  &.orb-2 {
    width: 400px;
    height: 400px;
    background: rgba(236, 72, 153, 0.15);
    bottom: -100px;
    left: -100px;
  }
}

.container {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 80px;
}

.section-tag {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(236, 72, 153, 0.15);
  border: 1px solid rgba(236, 72, 153, 0.3);
  border-radius: 50px;
  color: #f472b6;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.highlight {
  color: #f472b6;
}

.section-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto 60px;
  }
}

.pricing-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
  }

  &.featured {
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.15),
      rgba(139, 92, 246, 0.15)
    );
    border-color: rgba(139, 92, 246, 0.3);
    transform: scale(1.05);

    @media (max-width: 1024px) {
      transform: none;
    }

    &:hover {
      transform: scale(1.05) translateY(-8px);

      @media (max-width: 1024px) {
        transform: translateY(-8px);
      }
    }
  }
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 20px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}

.plan-header {
  margin-bottom: 24px;
}

.plan-name {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.plan-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.plan-price {
  display: flex;
  align-items: baseline;
  margin-bottom: 32px;
}

.currency {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.amount {
  font-size: 56px;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}

.period {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 4px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;

    &:last-child {
      border-bottom: none;
    }

    svg {
      color: #22c55e;
      flex-shrink: 0;
    }
  }
}

.plan-button {
  width: 100%;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &.primary {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border: none;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);

    &:hover {
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
    }
  }
}

.pricing-footer {
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-bottom: 8px;
  }
}

.contact-link {
  color: #818cf8;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #a5b4fc;
    transform: translateX(4px);
  }
}
</style>
