<template>
  <div class="site-shell">
    <div class="scroll-meter" aria-hidden="true">
      <span :style="meterStyle"></span>
    </div>

    <div
      class="aurora aurora--one"
      :style="parallaxXY(-0.02, 0.07, 0, -240)"
      aria-hidden="true"
    ></div>
    <div
      class="aurora aurora--two"
      :style="parallaxY(0.04, -120)"
      aria-hidden="true"
    ></div>
    <div
      class="aurora aurora--three"
      :style="parallaxXY(0.02, -0.03, 120, 0)"
      aria-hidden="true"
    ></div>
    <div class="grid-overlay" aria-hidden="true"></div>

    <header class="topbar">
      <a href="#hero" class="brand">FluxBot Studio</a>
      <nav class="topbar__actions">
        <a href="#proceso">Proceso</a>
        <a href="#planes">Planes</a>
        <a href="#cta" class="btn btn--solid">Quiero una demo</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="hero">
        <div class="hero__copy reveal">
          <p class="kicker">Chatbots para ventas y soporte en modo 24/7</p>
          <h1>Vende incluso cuando tu equipo duerme.</h1>
          <p>
            Diseñamos chatbots con IA para captar leads, calificar oportunidades
            y responder objeciones en tiempo real por WhatsApp, web e Instagram.
          </p>
          <div class="hero__cta">
            <a href="#cta" class="btn btn--solid">Agendar estrategia</a>
            <a href="#planes" class="btn btn--ghost">Ver planes</a>
          </div>
          <div class="hero__tags">
            <span>Integración con CRM</span>
            <span>Respuestas entrenadas</span>
            <span>Analítica en vivo</span>
          </div>
        </div>

        <div class="hero__visual">
          <article
            class="chat-board reveal reveal--parallax"
            :style="[{ ...parallaxY(-0.03, 20) }, { '--delay': '120ms' }]"
          >
            <header>
              <strong>Asistente de Ventas</strong>
              <small>Activo ahora</small>
            </header>
            <div class="bubble bubble--bot">
              Hola, ¿qué problema quieres resolver hoy?
            </div>
            <div class="bubble bubble--user">
              Necesito generar más demos esta semana.
            </div>
            <div class="bubble bubble--bot">
              Perfecto. Ya califiqué 17 leads y agendé 6 reuniones.
            </div>
          </article>

          <article
            class="floating-card reveal reveal--parallax"
            :style="[{ ...parallaxY(-0.015, -44) }, { '--delay': '220ms' }]"
          >
            <p>Conversión semanal</p>
            <strong>+38%</strong>
            <span>respecto al embudo manual</span>
          </article>

          <article
            class="floating-card floating-card--accent reveal reveal--parallax"
            :style="[
              { ...parallaxXY(0.015, -0.02, 110, -25) },
              { '--delay': '280ms' },
            ]"
          >
            <p>Costo por lead</p>
            <strong>-27%</strong>
            <span>automatizando primer contacto</span>
          </article>
        </div>
      </section>

      <section class="metrics" aria-label="Resultados">
        <article
          v-for="(metric, index) in metrics"
          :key="metric.value"
          class="metric reveal"
          :style="delayStyle(index)"
        >
          <h2>{{ getAnimatedValue(index, metric) }}</h2>
          <p>{{ metric.label }}</p>
          <small>{{ metric.detail }}</small>
        </article>
      </section>

      <section class="pain-points">
        <div class="section-head reveal">
          <p class="kicker">Problema real</p>
          <h2>Tu negocio pierde ventas en los silencios.</h2>
        </div>

        <div class="pain-grid">
          <article
            v-for="(item, index) in painPoints"
            :key="item.title"
            class="pain-card reveal"
            :style="delayStyle(index, 120)"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section id="proceso" class="process">
        <div class="section-head reveal">
          <p class="kicker">Implementación sin fricción</p>
          <h2>En dos semanas tienes un chatbot vendiendo.</h2>
        </div>

        <div class="process-grid">
          <article
            v-for="(step, index) in steps"
            :key="step.title"
            class="step-card reveal"
            :style="delayStyle(index, 110)"
          >
            <span>{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </section>

      <section class="use-cases">
        <div class="section-head reveal">
          <p class="kicker">Casos de uso</p>
          <h2>Chatbots entrenados para cada industria.</h2>
        </div>

        <div class="use-cases__wrapper">
          <article
            v-for="(industry, index) in industries"
            :key="industry.name"
            class="industry-card reveal"
            :style="delayStyle(index, 90)"
          >
            <h3>{{ industry.name }}</h3>
            <p>{{ industry.copy }}</p>
            <small>{{ industry.kpi }}</small>
          </article>
        </div>
      </section>

      <section id="planes" class="plans">
        <div class="section-head reveal">
          <p class="kicker">Planes</p>
          <h2>Escala según tu ritmo comercial.</h2>
        </div>

        <div class="plans-grid">
          <article
            v-for="(plan, index) in plans"
            :key="plan.name"
            class="plan-card reveal"
            :class="{ 'plan-card--featured': plan.featured }"
            :style="delayStyle(index, 120)"
          >
            <div class="plan-card__head">
              <h3>{{ plan.name }}</h3>
              <p>{{ plan.price }}</p>
            </div>
            <span>{{ plan.description }}</span>
            <ul>
              <li v-for="feature in plan.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <a
              href="#cta"
              class="btn"
              :class="plan.featured ? 'btn--solid' : 'btn--ghost'"
              >Solicitar</a
            >
          </article>
        </div>
      </section>

      <section id="cta" class="cta reveal">
        <p class="kicker">Siguiente paso</p>
        <h2>Lanza tu chatbot y empieza a convertir más esta misma semana.</h2>
        <p>
          Cuéntanos tu objetivo y te preparamos una demo enfocada en tu negocio.
        </p>
        <a href="mailto:hola@fluxbot.studio" class="btn btn--solid"
          >Quiero mi demo personalizada</a
        >
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

interface Metric {
  value: string;
  numericValue: number;
  suffix?: string;
  label: string;
  detail: string;
}

interface ContentCard {
  title: string;
  description: string;
}

interface Industry {
  name: string;
  copy: string;
  kpi: string;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
}

const metrics: Metric[] = [
  {
    value: "24/7",
    numericValue: 24,
    suffix: "/7",
    label: "Atención sin pausas",
    detail: "El bot responde en menos de 2 segundos todo el día.",
  },
  {
    value: "+38%",
    numericValue: 38,
    suffix: "%",
    label: "Más oportunidades calificadas",
    detail: "Priorización automática de leads listos para cierre.",
  },
  {
    value: "-42%",
    numericValue: 42,
    suffix: "%",
    label: "Menos carga operativa",
    detail: "El equipo humano se enfoca solo en negociaciones clave.",
  },
];

const painPoints: ContentCard[] = [
  {
    title: "Leads sin respuesta",
    description:
      "Cuando tardas en contestar, el cliente ya está hablando con tu competencia.",
  },
  {
    title: "Equipos saturados",
    description:
      "Ventas y soporte pierden horas en preguntas repetitivas que no generan cierre.",
  },
  {
    title: "Embudo sin datos",
    description:
      "Sin trazabilidad del chat, no sabes qué objeciones frenan tus conversiones.",
  },
];

const steps: ContentCard[] = [
  {
    title: "Descubrimiento",
    description:
      "Mapeamos tu embudo, preguntas frecuentes y objetivos de conversión.",
  },
  {
    title: "Entrenamiento",
    description:
      "Construimos flujos, tono de marca y respuestas con IA conectadas a tu negocio.",
  },
  {
    title: "Integración",
    description:
      "Conectamos CRM, calendario y canales para que el bot haga trabajo real.",
  },
  {
    title: "Optimización",
    description:
      "Analizamos conversaciones y mejoramos prompts semanalmente para vender más.",
  },
];

const industries: Industry[] = [
  {
    name: "Ecommerce",
    copy: "Recupera carritos y recomienda productos según intención en tiempo real.",
    kpi: "Ticket promedio +19%",
  },
  {
    name: "Educación",
    copy: "Filtra interesados y agenda entrevistas de admisión automáticamente.",
    kpi: "Tiempo de respuesta -71%",
  },
  {
    name: "Real Estate",
    copy: "Califica prospectos por presupuesto, zona y urgencia antes de asignarlos.",
    kpi: "Citas calificadas +34%",
  },
  {
    name: "SaaS",
    copy: "Convierte pruebas en demos comerciales con seguimiento contextual.",
    kpi: "Activación +26%",
  },
];

const plans: Plan[] = [
  {
    name: "Launch",
    price: "USD 690/mes",
    description: "Para validar un canal de captación.",
    features: [
      "1 canal",
      "Flujos base",
      "Reportes quincenales",
      "Hasta 2,500 conversaciones",
    ],
    featured: false,
  },
  {
    name: "Scale",
    price: "USD 1,490/mes",
    description: "Para equipos comerciales con metas agresivas.",
    features: [
      "3 canales",
      "IA entrenada con tu data",
      "Integración CRM",
      "Optimización semanal",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Arquitectura para operación compleja.",
    features: [
      "Canales ilimitados",
      "SLA dedicado",
      "Workflows avanzados",
      "Gobernanza y seguridad",
    ],
    featured: false,
  },
];

export default defineComponent({
  name: "App",
  setup() {
    const scrollY = ref(0);
    const scrollProgress = ref(0);
    const metricsAnimated = ref<number[]>([]);
    const hasAnimatedMetrics = ref(false);
    let observer: IntersectionObserver | null = null;
    let rafId: number | null = null;
    let isTicking = false;
    let latestScrollY = 0;

    const animateMetric = (
      index: number,
      target: number,
      suffix: string | undefined,
      duration = 1500
    ) => {
      const startTime = performance.now();
      const startValue = 0;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(
          startValue + (target - startValue) * easeOut
        );

        const newMetrics = [...metricsAnimated.value];
        newMetrics[index] = currentValue;
        metricsAnimated.value = newMetrics;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const startMetricsAnimation = () => {
      if (hasAnimatedMetrics.value) return;
      hasAnimatedMetrics.value = true;

      metrics.forEach((metric, index) => {
        setTimeout(() => {
          animateMetric(index, metric.numericValue, metric.suffix);
        }, index * 200);
      });
    };

    const updateScrollState = (y: number) => {
      const maxScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollY.value = y;
      scrollProgress.value =
        maxScrollable > 0 ? Math.min(100, (y / maxScrollable) * 100) : 0;
    };

    const onScroll = () => {
      latestScrollY = window.scrollY || window.pageYOffset;

      if (isTicking) {
        return;
      }

      isTicking = true;
      rafId = window.requestAnimationFrame(() => {
        updateScrollState(latestScrollY);
        isTicking = false;
        rafId = null;
      });
    };

    const meterStyle = computed(() => ({
      transform: `scaleX(${scrollProgress.value / 100})`,
    }));

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const parallaxY = (speed: number, offset = 0): Record<string, string> => ({
      transform: `translate3d(0, ${
        offset + clamp(scrollY.value * speed, -72, 72)
      }px, 0)`,
    });

    const parallaxXY = (
      speedX: number,
      speedY: number,
      offsetX = 0,
      offsetY = 0
    ): Record<string, string> => ({
      transform: `translate3d(${
        offsetX + clamp(scrollY.value * speedX, -80, 80)
      }px, ${offsetY + clamp(scrollY.value * speedY, -72, 72)}px, 0)`,
    });

    const delayStyle = (index: number, step = 100): Record<string, string> => ({
      "--delay": `${index * step}ms`,
    });

    const getAnimatedValue = (index: number, metric: Metric): string => {
      const animatedValue = metricsAnimated.value[index];
      if (animatedValue === undefined) return "0";

      if (metric.suffix === "/7") {
        return `${animatedValue}/7`;
      }

      const prefix =
        metric.value.startsWith("+") || metric.value.startsWith("-")
          ? metric.value.charAt(0)
          : "";

      return prefix + animatedValue + (metric.suffix || "");
    };

    onMounted(() => {
      latestScrollY = window.scrollY || window.pageYOffset;
      updateScrollState(latestScrollY);
      window.addEventListener("scroll", onScroll, { passive: true });

      const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.2,
            rootMargin: "0px 0px -8% 0px",
          }
        );

        revealItems.forEach((item) => observer?.observe(item));

        const metricsSection = document.querySelector<HTMLElement>(".metrics");
        if (metricsSection) {
          const metricsObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  startMetricsAnimation();
                  metricsObserver.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.3 }
          );
          metricsObserver.observe(metricsSection);
        }
      } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      observer?.disconnect();
    });

    return {
      meterStyle,
      metrics,
      metricsAnimated,
      hasAnimatedMetrics,
      getAnimatedValue,
      painPoints,
      steps,
      industries,
      plans,
      parallaxY,
      parallaxXY,
      delayStyle,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap");

:root {
  --bg-cream: #fffaf1;
  --bg-sand: #f8ecd5;
  --bg-mint: #c4f1e3;
  --ink: #1e2b38;
  --ink-soft: #435365;
  --accent: #ff6f3c;
  --accent-dark: #d4552c;
  --accent-alt: #00a8a8;
  --card: rgba(255, 255, 255, 0.82);
  --line: rgba(30, 43, 56, 0.12);
  --shadow: 0 20px 45px rgba(30, 43, 56, 0.14);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Space Grotesk", sans-serif;
  color: var(--ink);
  background: radial-gradient(
      circle at 8% 12%,
      rgba(0, 168, 168, 0.2),
      transparent 32%
    ),
    radial-gradient(
      circle at 88% 10%,
      rgba(255, 111, 60, 0.22),
      transparent 34%
    ),
    linear-gradient(180deg, var(--bg-cream), var(--bg-sand));
}

a {
  color: inherit;
  text-decoration: none;
}

.site-shell {
  position: relative;
  overflow-x: clip;
  padding-bottom: 5rem;
}

.scroll-meter {
  position: fixed;
  inset: 0 0 auto 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  z-index: 60;

  span {
    display: block;
    height: 100%;
    width: 100%;
    transform-origin: left center;
    background: linear-gradient(
      90deg,
      var(--accent),
      #ff9a3c,
      var(--accent-alt)
    );
    box-shadow: 0 0 18px rgba(255, 111, 60, 0.45);
  }
}

.grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  opacity: 0.28;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at center, black 38%, transparent 82%);
}

.aurora {
  position: fixed;
  border-radius: 999px;
  pointer-events: none;
  z-index: -2;
  filter: blur(3px);
  will-change: transform;
}

.aurora--one {
  width: 340px;
  height: 340px;
  left: -140px;
  top: 70px;
  background: radial-gradient(circle, rgba(0, 168, 168, 0.34), transparent 70%);
}

.aurora--two {
  width: 360px;
  height: 360px;
  right: -130px;
  top: 100px;
  background: radial-gradient(
    circle,
    rgba(255, 111, 60, 0.35),
    transparent 72%
  );
}

.aurora--three {
  width: 280px;
  height: 280px;
  left: 45%;
  top: 35%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.46),
    transparent 72%
  );
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: min(1160px, calc(100% - 2.8rem));
  margin: 1.2rem auto 0;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 24px rgba(30, 43, 56, 0.08);
}

.brand {
  font-family: "Sora", sans-serif;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.topbar__actions {
  display: flex;
  gap: 0.9rem;
  align-items: center;

  a:not(.btn) {
    color: var(--ink-soft);
    font-weight: 500;
  }
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  padding: 0.7rem 1.25rem;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 0.92rem;
  transition: transform 0.24s ease, box-shadow 0.24s ease,
    border-color 0.24s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--solid {
  color: white;
  background: linear-gradient(130deg, var(--accent), #ff9a3c);
  box-shadow: 0 10px 24px rgba(255, 111, 60, 0.28);
}

.btn--solid:hover {
  box-shadow: 0 14px 28px rgba(255, 111, 60, 0.35);
}

.btn--ghost {
  color: var(--ink);
  border-color: var(--line);
  background: rgba(255, 255, 255, 0.7);
}

main {
  width: min(1160px, calc(100% - 2.8rem));
  margin: 0 auto;
}

section {
  margin-top: 3rem;
}

.hero {
  margin-top: 0;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2.4rem;
  min-height: 70vh;
  align-items: center;
}

.hero__copy {
  h1 {
    margin: 0;
    font-family: "Sora", sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  p {
    color: var(--ink-soft);
    font-size: clamp(1rem, 1.8vw, 1.16rem);
    margin: 1.15rem 0 0;
    max-width: 58ch;
  }
}

.kicker {
  margin: 0 0 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--accent-alt);
}

.hero__cta {
  margin-top: 1.6rem;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.hero__tags {
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;

  span {
    background: rgba(255, 255, 255, 0.68);
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 999px;
    padding: 0.3rem 0.7rem;
    font-size: 0.82rem;
    color: var(--ink-soft);
  }
}

.hero__visual {
  position: relative;
  min-height: 500px;
}

.chat-board,
.floating-card {
  position: absolute;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: var(--card);
  box-shadow: var(--shadow);
}

.chat-board {
  inset: 40px 26px 70px 10px;
  padding: 1.2rem;

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    strong {
      font-family: "Sora", sans-serif;
      font-size: 1.02rem;
    }

    small {
      color: var(--accent-alt);
      font-weight: 600;
    }
  }
}

.bubble {
  margin-top: 0.85rem;
  border-radius: 14px;
  padding: 0.8rem;
  line-height: 1.4;
  font-size: 0.92rem;
}

.bubble--bot {
  background: rgba(0, 168, 168, 0.12);
}

.bubble--user {
  background: rgba(255, 111, 60, 0.14);
  margin-left: 2rem;
}

.floating-card {
  width: 210px;
  padding: 0.9rem;
  right: -8px;
  top: 6px;

  p {
    margin: 0;
    color: var(--ink-soft);
    font-size: 0.8rem;
  }

  strong {
    display: block;
    margin-top: 0.3rem;
    font-family: "Sora", sans-serif;
    font-size: 1.5rem;
  }

  span {
    display: block;
    margin-top: 0.2rem;
    color: var(--ink-soft);
    font-size: 0.78rem;
  }
}

.floating-card--accent {
  top: auto;
  bottom: 4px;
  right: 36px;
  background: rgba(255, 240, 234, 0.88);
}

.metrics {
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.metric {
  padding: 1.4rem 1.1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: 0 10px 22px rgba(30, 43, 56, 0.08);

  h2 {
    margin: 0;
    font-family: "Sora", sans-serif;
    font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  }

  p {
    margin: 0.35rem 0 0;
    font-weight: 600;
  }

  small {
    display: block;
    margin-top: 0.35rem;
    color: var(--ink-soft);
    font-size: 0.82rem;
  }
}

.section-head {
  max-width: 700px;

  h2 {
    margin: 0;
    font-family: "Sora", sans-serif;
    font-size: clamp(1.8rem, 3.6vw, 3rem);
    line-height: 1.1;
  }
}

.pain-grid,
.process-grid,
.use-cases__wrapper,
.plans-grid {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}

.pain-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.pain-card,
.step-card,
.industry-card,
.plan-card,
.cta {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
}

.pain-card {
  padding: 1.25rem;

  h3 {
    margin: 0;
    font-family: "Sora", sans-serif;
  }

  p {
    margin: 0.65rem 0 0;
    color: var(--ink-soft);
    line-height: 1.55;
  }
}

.process-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.step-card {
  padding: 1.25rem;

  span {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: white;
    background: linear-gradient(130deg, var(--accent-alt), #22cbb6);
  }

  h3 {
    margin: 0.9rem 0 0;
    font-family: "Sora", sans-serif;
  }

  p {
    margin: 0.55rem 0 0;
    line-height: 1.5;
    color: var(--ink-soft);
  }
}

.use-cases__wrapper {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.industry-card {
  padding: 1.2rem;

  h3 {
    margin: 0;
    font-family: "Sora", sans-serif;
  }

  p {
    margin: 0.6rem 0 0;
    color: var(--ink-soft);
    line-height: 1.5;
  }

  small {
    display: inline-flex;
    margin-top: 0.8rem;
    border-radius: 999px;
    padding: 0.3rem 0.65rem;
    background: rgba(0, 168, 168, 0.14);
    font-weight: 700;
    color: #0f5f5f;
  }
}

.plans-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.plan-card {
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  ul {
    margin: 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.45rem;
    color: var(--ink-soft);
    flex: 1;
  }
}

.plan-card__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;

  h3 {
    margin: 0;
    font-family: "Sora", sans-serif;
  }

  p {
    margin: 0;
    font-weight: 700;
  }
}

.plan-card--featured {
  border-color: rgba(255, 111, 60, 0.45);
  background: rgba(255, 247, 240, 0.92);
  transform: translateY(-8px);
}

.cta {
  margin-top: 7rem;
  text-align: center;
  padding: 2.4rem 1.2rem;

  h2 {
    margin: 0;
    font-family: "Sora", sans-serif;
    font-size: clamp(1.8rem, 3.6vw, 3rem);
  }

  p {
    margin: 0.7rem auto 0;
    max-width: 650px;
    color: var(--ink-soft);
  }

  .btn {
    margin-top: 1.2rem;
  }
}

.reveal {
  opacity: 0;
  transform: translate3d(0, 40px, 0) scale(0.985);
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease;
  transition-delay: var(--delay, 0ms);
}

.reveal--parallax {
  transition: opacity 0.8s ease;
  will-change: transform, opacity;
}

.reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

@media (max-width: 1080px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero__visual {
    min-height: 420px;
  }

  .process-grid,
  .use-cases__wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  main,
  .topbar {
    width: calc(100% - 1.4rem);
  }

  .topbar {
    margin-top: 0.7rem;
    border-radius: 14px;
    gap: 0.6rem;
    flex-direction: column;
  }

  .topbar__actions {
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;

    a:not(.btn) {
      font-size: 0.9rem;
    }
  }

  section {
    margin-top: 5rem;
  }

  .hero__visual {
    min-height: 380px;
  }

  .chat-board {
    inset: 20px 0 95px;
  }

  .floating-card {
    width: 190px;
    right: -2px;
  }

  .floating-card--accent {
    right: 16px;
  }

  .metrics,
  .pain-grid,
  .plans-grid,
  .process-grid,
  .use-cases__wrapper {
    grid-template-columns: 1fr;
  }

  .plan-card--featured {
    transform: none;
  }
}
</style>
