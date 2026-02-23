<template>
  <main ref="pageRef" class="site">
    <div class="bg-grid" aria-hidden="true"></div>

    <header class="topbar">
      <a class="brand" href="#inicio">
        <span class="brand__dot"></span>
        FluxBot
      </a>
      <nav class="topbar__nav">
        <a href="#beneficios">Beneficios</a>
        <a href="#proceso">Proceso</a>
        <a href="#planes">Planes</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="btn btn--small" href="#planes">Prueba gratis</a>
    </header>

    <section id="inicio" class="hero section">
      <div data-reveal class="hero__content" style="--delay: 0.05s">
        <p class="badge">Chatbots de nueva generacion para ventas y soporte</p>
        <h1>
          Vende 24/7 con chatbots que responden, califican leads y cierran por
          ti.
        </h1>
        <p class="hero__copy">
          Construye flujos inteligentes en minutos. Integra WhatsApp, web y CRM
          desde un solo panel con analitica en tiempo real.
        </p>
        <div class="hero__actions">
          <a class="btn" href="#planes">Comenzar hoy</a>
          <a class="btn btn--ghost" href="#demo">Ver demo en vivo</a>
        </div>
        <ul class="hero__metrics">
          <li>
            <strong>+38%</strong>
            <span>conversion media</span>
          </li>
          <li>
            <strong>-62%</strong>
            <span>tiempo de respuesta</span>
          </li>
          <li>
            <strong>4.9/5</strong>
            <span>satisfaccion de clientes</span>
          </li>
        </ul>
      </div>

      <div id="demo" data-reveal class="hero__visual" style="--delay: 0.2s">
        <div class="orb orb--one"></div>
        <div class="orb orb--two"></div>

        <article class="chat-shell" aria-label="Vista previa de chatbot">
          <header class="chat-shell__head">
            <p>Asistente de conversion</p>
            <span class="pulse">Activo</span>
          </header>

          <div class="chat-shell__body">
            <div class="bubble bubble--bot">
              Hola, soy el bot de preventa. Que plan te interesa?
            </div>
            <div class="bubble bubble--user">
              Quiero aumentar demos para mi equipo comercial.
            </div>
            <div class="bubble bubble--bot">
              Perfecto. Con el plan Growth puedes automatizar captura de leads y
              agenda de reuniones.
            </div>
          </div>

          <footer class="chat-shell__foot">
            <span>"Necesito una propuesta para 15 agentes"</span>
            <button type="button">Enviar</button>
          </footer>
        </article>
      </div>
    </section>

    <section class="trust-band" aria-label="Marcas y resultados">
      <div class="trust-band__track">
        <span>+500 equipos comerciales activos</span>
        <span>Integraciones con HubSpot y Salesforce</span>
        <span>99.95% uptime</span>
        <span>Deploy en menos de 7 dias</span>
        <span>Soporte en espanol e ingles</span>
      </div>
    </section>

    <section id="beneficios" class="section section--tight">
      <div data-reveal class="section__head" style="--delay: 0.05s">
        <p class="section__label">Beneficios clave</p>
        <h2>
          Una plataforma pensada para crecer ventas, no solo conversaciones.
        </h2>
      </div>

      <div class="feature-grid">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          data-reveal
          class="feature-card"
          :style="{ '--delay': `${0.08 + index * 0.06}s` }"
        >
          <p class="feature-card__tag">{{ feature.tag }}</p>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </article>
      </div>
    </section>

    <section id="proceso" class="section process">
      <div data-reveal class="section__head" style="--delay: 0.05s">
        <p class="section__label">Implementacion</p>
        <h2>De cero a chatbot vendiendo en menos de una semana.</h2>
      </div>

      <div class="process-grid">
        <article
          v-for="(step, index) in processSteps"
          :key="step.title"
          data-reveal
          class="process-step"
          :style="{ '--delay': `${0.1 + index * 0.08}s` }"
        >
          <span class="process-step__index">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <strong>{{ step.metric }}</strong>
        </article>
      </div>
    </section>

    <section class="section section--parallax">
      <article data-reveal class="parallax-panel" style="--delay: 0.1s">
        <div>
          <p class="section__label">Datos en movimiento</p>
          <h2>Panel de control con alertas y prediccion de oportunidad.</h2>
          <p>
            Detecta intencion de compra, asigna prioridad a cada lead y ejecuta
            acciones automaticas para no perder ninguna oportunidad.
          </p>
        </div>
        <ul>
          <li>Ruteo automatico por etapa del funnel</li>
          <li>Resumen inteligente de conversaciones</li>
          <li>Forecast de conversion en tiempo real</li>
        </ul>
      </article>
    </section>

    <section id="planes" class="section">
      <div data-reveal class="pricing-head" style="--delay: 0.05s">
        <div>
          <p class="section__label">Planes</p>
          <h2>Escala al ritmo de tu equipo comercial.</h2>
        </div>
        <div class="billing-toggle" role="tablist" aria-label="Tipo de pago">
          <button
            :class="{ 'is-active': billingCycle === 'annual' }"
            type="button"
            @click="setBillingCycle('annual')"
          >
            Anual
          </button>
          <button
            :class="{ 'is-active': billingCycle === 'monthly' }"
            type="button"
            @click="setBillingCycle('monthly')"
          >
            Mensual
          </button>
        </div>
      </div>

      <p class="pricing-note">{{ savingsCopy }}</p>

      <div class="pricing-grid">
        <article
          v-for="(plan, index) in pricingPlans"
          :key="plan.name"
          data-reveal
          class="price-card"
          :class="{ 'is-featured': plan.featured }"
          :style="{ '--delay': `${0.08 + index * 0.08}s` }"
        >
          <h3>{{ plan.name }}</h3>
          <p class="price-card__description">{{ plan.description }}</p>
          <p class="price-card__value">
            <span
              >$
              {{ billingCycle === "annual" ? plan.annual : plan.monthly }}</span
            >
            <small>/ mes</small>
          </p>
          <ul>
            <li v-for="bullet in plan.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
          <a
            class="btn"
            :class="{ 'btn--ghost': !plan.featured }"
            href="#inicio"
          >
            {{ plan.cta }}
          </a>
        </article>
      </div>
    </section>

    <section id="faq" class="section section--tight">
      <div data-reveal class="section__head" style="--delay: 0.05s">
        <p class="section__label">FAQ</p>
        <h2>Respuestas rapidas para decidir hoy.</h2>
      </div>
      <div class="faq-list">
        <details data-reveal style="--delay: 0.08s" open>
          <summary>Cuanto tarda la implementacion?</summary>
          <p>
            Normalmente entre 3 y 7 dias, dependiendo de integraciones y nivel
            de personalizacion.
          </p>
        </details>
        <details data-reveal style="--delay: 0.14s">
          <summary>Puedo conectarlo con mi CRM actual?</summary>
          <p>
            Si. Incluye conectores para HubSpot, Salesforce y APIs para flujos
            custom.
          </p>
        </details>
        <details data-reveal style="--delay: 0.2s">
          <summary>Necesito equipo tecnico para usarlo?</summary>
          <p>
            No. El editor visual permite crear y ajustar flujos sin codigo, con
            soporte experto incluido.
          </p>
        </details>
      </div>
    </section>

    <section class="section cta">
      <article data-reveal class="cta-card" style="--delay: 0.1s">
        <p class="section__label">Lanzamiento</p>
        <h2>
          Activa tu chatbot en 7 dias y empieza a vender mas desde esta semana.
        </h2>
        <p>
          Agenda una demo, recibe una arquitectura recomendada y lanza tu primer
          flujo listo para conversion.
        </p>
        <a class="btn" href="#inicio">Quiero mi demo</a>
      </article>
    </section>

    <footer class="site-footer">
      <p>FluxBot 2026. Automatizacion comercial para equipos ambiciosos.</p>
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

type BillingCycle = "monthly" | "annual";

type Feature = {
  tag: string;
  title: string;
  text: string;
};

type ProcessStep = {
  title: string;
  text: string;
  metric: string;
};

type PricingPlan = {
  name: string;
  description: string;
  monthly: string;
  annual: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
};

export default defineComponent({
  name: "App",
  setup() {
    const pageRef = ref<HTMLElement | null>(null);
    const billingCycle = ref<BillingCycle>("annual");

    const features: Feature[] = [
      {
        tag: "Captura",
        title: "Leads calificados automaticamente",
        text: "El bot detecta intencion, filtra contactos de bajo valor y envia solo oportunidades reales a tu equipo.",
      },
      {
        tag: "Orquestacion",
        title: "Playbooks de venta multicanal",
        text: "Responde igual de bien en web, WhatsApp e Instagram con un solo flujo centralizado.",
      },
      {
        tag: "Inteligencia",
        title: "Respuestas contextuales en segundos",
        text: "Modelos ajustados a tu negocio para mantener tono de marca y resolver dudas sin friccion.",
      },
      {
        tag: "Accion",
        title: "Disparadores por comportamiento",
        text: "Activa descuentos, recordatorios o agendas automaticas segun la etapa del prospecto.",
      },
      {
        tag: "Control",
        title: "Analitica de embudo en tiempo real",
        text: "Visualiza conversion por canal, segmento y agente para optimizar decisiones cada dia.",
      },
      {
        tag: "Escala",
        title: "Arquitectura lista para crecer",
        text: "Desde startups hasta enterprise, con seguridad, versionado y monitoreo de punta a punta.",
      },
    ];

    const processSteps: ProcessStep[] = [
      {
        title: "Mapeo de objetivos",
        text: "Definimos que conversaciones deben terminar en lead, demo o venta para disenar el flujo ideal.",
        metric: "Sesion inicial de 45 min",
      },
      {
        title: "Entrenamiento y contenido",
        text: "Cargamos tu catalogo, FAQs y argumentos de venta para lograr respuestas utiles desde el dia uno.",
        metric: "Primer prototipo en 48h",
      },
      {
        title: "Integraciones y automatizaciones",
        text: "Conectamos CRM, calendario y herramientas de marketing para activar un circuito comercial completo.",
        metric: "Deploy promedio en 7 dias",
      },
      {
        title: "Optimizacion continua",
        text: "Medimos conversaciones, detectamos cuellos de botella y ajustamos prompts y flujos cada semana.",
        metric: "Sprints quincenales de mejora",
      },
    ];

    const pricingPlans: PricingPlan[] = [
      {
        name: "Starter",
        description:
          "Para equipos que estan validando su primer embudo conversacional.",
        monthly: "79",
        annual: "63",
        bullets: [
          "Hasta 2,000 conversaciones/mes",
          "1 canal y 1 workspace",
          "Reportes esenciales",
          "Soporte en horario laboral",
        ],
        cta: "Empezar prueba",
      },
      {
        name: "Growth",
        description:
          "Para escalar captacion y acelerar cierres con automatizacion total.",
        monthly: "189",
        annual: "149",
        bullets: [
          "Hasta 20,000 conversaciones/mes",
          "Web + WhatsApp + Instagram",
          "Integraciones CRM nativas",
          "Analitica avanzada y alertas",
        ],
        cta: "Solicitar demo",
        featured: true,
      },
      {
        name: "Scale",
        description:
          "Para operacion enterprise con cumplimiento, seguridad y customizacion.",
        monthly: "Custom",
        annual: "Custom",
        bullets: [
          "Conversaciones ilimitadas",
          "SLA dedicado y SSO",
          "Onboarding tecnico premium",
          "Customer success estrategico",
        ],
        cta: "Hablar con ventas",
      },
    ];

    const savingsCopy = ref("Pago anual activo: recibes 2 meses gratis.");

    let observer: IntersectionObserver | null = null;
    let frameId = 0;

    const setBillingCycle = (cycle: BillingCycle) => {
      billingCycle.value = cycle;
      savingsCopy.value =
        cycle === "annual"
          ? "Pago anual activo: recibes 2 meses gratis."
          : "Cambia a anual para ahorrar 20% sobre el valor mensual.";
    };

    const updateParallax = () => {
      if (!pageRef.value) {
        return;
      }

      const y = window.scrollY || window.pageYOffset;
      pageRef.value.style.setProperty(
        "--hero-offset",
        `${Math.min(y * 0.24, 240)}px`
      );
      pageRef.value.style.setProperty(
        "--orb-offset",
        `${Math.min(y * 0.14, 160)}px`
      );
      pageRef.value.style.setProperty(
        "--ui-tilt",
        `${Math.min(y * 0.02, 8)}deg`
      );
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateParallax();
        frameId = 0;
      });
    };

    onMounted(() => {
      updateParallax();
      window.addEventListener("scroll", handleScroll, { passive: true });

      const revealElements =
        pageRef.value?.querySelectorAll<HTMLElement>("[data-reveal]") || [];

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
            rootMargin: "0px 0px -12% 0px",
          }
        );

        revealElements.forEach((element) => observer?.observe(element));
      } else {
        revealElements.forEach((element) =>
          element.classList.add("is-visible")
        );
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      observer?.disconnect();
    });

    return {
      pageRef,
      billingCycle,
      savingsCopy,
      features,
      processSteps,
      pricingPlans,
      setBillingCycle,
    };
  },
});
</script>

<style lang="scss">
@import "./assets/scss/global.scss";
</style>
