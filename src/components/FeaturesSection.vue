<template>
  <section ref="sectionRef" id="features" class="features-section">
    <div class="features-bg">
      <div class="feature-gradient"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Características</span>
        <h2 class="section-title">
          Todo lo que necesitas para
          <span class="highlight">automatizar</span> tu negocio
        </h2>
        <p class="section-subtitle">
          Herramientas potentes diseñadas para hacer tu vida más fácil
        </p>
      </div>

      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="feature-icon" :style="{ background: feature.gradient }">
            <component :is="feature.icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-hover">
            <span>Ver más</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <div class="features-showcase">
        <div class="showcase-content">
          <h3>Integración Perfecta</h3>
          <p>Conecta con tus herramientas favoritas en minutos</p>
          <div class="integrations-list">
            <div
              v-for="(integration, index) in integrations"
              :key="index"
              class="integration-item"
            >
              <span class="integration-icon">{{ integration.icon }}</span>
              <span class="integration-name">{{ integration.name }}</span>
            </div>
          </div>
        </div>
        <div class="showcase-visual">
          <div class="code-block">
            <div class="code-header">
              <span class="code-dot red"></span>
              <span class="code-dot yellow"></span>
              <span class="code-dot green"></span>
            </div>
            <pre><code><span class="code-keyword">import</span> { ChatterBotFly } <span class="code-keyword">from</span> <span class="code-string">'@chatterbotfly/sdk'</span>

<span class="code-keyword">const</span> bot = <span class="code-keyword">new</span> <span class="code-function">ChatterBotFly</span>({
  apiKey: <span class="code-string">'your-api-key'</span>,
  model: <span class="code-string">'gpt-4'</span>,
  <span class="code-comment">// Configura tu chatbot</span>
  systemMessage: <span class="code-string">'Eres un asistente...'</span>
})

<span class="code-comment">// ¡Listo para usar!</span>
<span class="code-keyword">await</span> bot.<span class="code-function">start</span>()</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, h } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);
let ctx: ReturnType<typeof gsap.context>;

const MessageIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [
      h("path", {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      }),
    ]
  );

const BrainIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [
      h("path", {
        d: "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-1-.99-.6-.34-1-1.73a2 2 0 0 1 2-2z",
      }),
      h("circle", { cx: 8, cy: 14, r: 1 }),
      h("circle", { cx: 16, cy: 14, r: 1 }),
    ]
  );

const ZapIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [h("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })]
  );

const ShieldIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [h("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })]
  );

const ChartIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [
      h("line", { x1: 18, y1: 20, x2: 18, y2: 10 }),
      h("line", { x1: 12, y1: 20, x2: 12, y2: 4 }),
      h("line", { x1: 6, y1: 20, x2: 6, y2: 14 }),
    ]
  );

const GlobeIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [
      h("circle", { cx: 12, cy: 12, r: 10 }),
      h("line", { x1: 2, y1: 12, x2: 22, y2: 12 }),
      h("path", {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
      }),
    ]
  );

const features = [
  {
    icon: MessageIcon,
    title: "Conversaciones Naturales",
    description:
      "IA avanzada que entiende el contexto y responde de manera natural como un humano.",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    icon: BrainIcon,
    title: "Aprendizaje Continuo",
    description:
      "El chatbot aprende de cada interacción para mejorar continuamente sus respuestas.",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
  },
  {
    icon: ZapIcon,
    title: "Respuestas Instantáneas",
    description:
      "Disponible 24/7 para atender a tus clientes al instante, sin esperas.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    icon: ShieldIcon,
    title: "Seguridad Avanzada",
    description: "Tus datos protegidos con encriptación de nivel empresarial.",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
  },
  {
    icon: ChartIcon,
    title: "Analíticas en Tiempo Real",
    description:
      "Métricas detalladas sobre conversaciones, ventas y satisfacción del cliente.",
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
  },
  {
    icon: GlobeIcon,
    title: "Multiidioma",
    description:
      "Soporta más de 50 idiomas para atender clientes de todo el mundo.",
    gradient: "linear-gradient(135deg, #8b5cf6, #d946ef)",
  },
];

const integrations = [
  { icon: "📧", name: "Email" },
  { icon: "💬", name: "WhatsApp" },
  { icon: "📱", name: "Telegram" },
  { icon: "🌐", name: "Web" },
  { icon: "📞", name: "Slack" },
  { icon: "💼", name: "CRM" },
];

onMounted(() => {
  ctx = gsap.context(() => {
    const ease = "power3.out";

    gsap.from(".section-header", {
      scrollTrigger: { trigger: ".section-header", start: "top 85%" },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease,
    });

    gsap.from(".feature-card", {
      scrollTrigger: { trigger: ".features-grid", start: "top 85%" },
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.75,
      ease,
    });

    gsap.from(".features-showcase", {
      scrollTrigger: { trigger: ".features-showcase", start: "top 85%" },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease,
    });
  }, sectionRef);
});

onUnmounted(() => ctx?.revert());
</script>

<style lang="scss" scoped>
.features-section {
  padding: 120px 0;
  position: relative;
}

.features-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.feature-gradient {
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.15) 0%,
    transparent 70%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  color: #818cf8;
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
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.highlight {
  color: #818cf8;
}

.section-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }

    .feature-hover {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  svg {
    color: #fff;
  }
}

.feature-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.feature-description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 20px;
}

.feature-hover {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #818cf8;
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.features-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  padding: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.showcase-content {
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 32px;
  }
}

.integrations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
}

.integration-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }
}

.integration-icon {
  font-size: 20px;
}

.integration-name {
  color: #fff;
  font-weight: 500;
}

.showcase-visual {
  @media (max-width: 1024px) {
    order: -1;
  }
}

.code-block {
  background: #0f0f1a;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
  display: flex;
  gap: 8px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &.red {
    background: #ef4444;
  }
  &.yellow {
    background: #eab308;
  }
  &.green {
    background: #22c55e;
  }
}

.code-block pre {
  padding: 24px;
  margin: 0;
  overflow-x: auto;
}

.code-block code {
  font-family: "Fira Code", monospace;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.code-keyword {
  color: #c084fc;
}
.code-string {
  color: #86efac;
}
.code-function {
  color: #60a5fa;
}
.code-comment {
  color: #6b7280;
}
</style>
