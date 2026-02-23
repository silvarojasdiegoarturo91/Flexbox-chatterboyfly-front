<template>
  <section id="demo" class="demo-section">
    <div class="demo-container">
      <div class="demo-header">
        <span class="demo-badge">Prueba Gratis</span>
        <h2 class="demo-title">
          Chatea con nuestro
          <span class="gradient-text">Asistente IA</span>
        </h2>
        <p class="demo-subtitle">
          Experimenta la potencia de ChatterBoyFly en acción
        </p>
      </div>

      <div class="demo-wrapper">
        <div class="chat-interface" ref="chatRef">
          <div class="chat-header">
            <div class="chat-header-left">
              <div class="bot-avatar">
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
              <div class="bot-info">
                <span class="bot-name">ChatterBoyFly AI</span>
                <span class="bot-status">
                  <span class="status-dot"></span>
                  En línea
                </span>
              </div>
            </div>
            <div class="chat-header-right">
              <button class="chat-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div class="chat-messages" ref="messagesRef">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="message-wrapper"
              :class="{ 'from-user': message.from === 'user' }"
            >
              <div v-if="message.from === 'bot'" class="message-avatar">
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
              <div class="message-bubble">
                {{ message.text }}
              </div>
            </div>
            <div v-if="isTyping" class="typing-wrapper">
              <div class="message-avatar">
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
              <div class="typing-bubble">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>

          <div class="chat-input">
            <input
              v-model="userInput"
              @keyup.enter="sendMessage"
              type="text"
              placeholder="Escribe tu mensaje..."
              class="input-field"
            />
            <button
              @click="sendMessage"
              class="send-btn"
              :disabled="!userInput.trim()"
            >
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
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

        <div class="demo-features">
          <div class="demo-feature">
            <div class="demo-feature-icon">⚡</div>
            <div class="demo-feature-text">
              <h4>Respuestas instantáneas</h4>
              <p>Menos de 1 segundo de respuesta</p>
            </div>
          </div>
          <div class="demo-feature">
            <div class="demo-feature-icon">🎯</div>
            <div class="demo-feature-text">
              <h4>Personalizable</h4>
              <p>Configura el tono y comportamiento</p>
            </div>
          </div>
          <div class="demo-feature">
            <div class="demo-feature-icon">🧠</div>
            <div class="demo-feature-text">
              <h4>Contexto avanzado</h4>
              <p>Recuerda conversaciones previas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chatRef = ref<HTMLElement | null>(null);
const messagesRef = ref<HTMLElement | null>(null);
const userInput = ref("");
const isTyping = ref(false);

const messages = ref([
  {
    from: "bot",
    text: "¡Hola! 👋 Soy ChatterBoyFly, tu asistente de IA. Estoy aquí para ayudarte con cualquier pregunta sobre nuestros chatbots. ¿En qué puedo asistirte hoy?",
  },
]);

const botResponses: Record<string, string> = {
  precio:
    "¡Excelente pregunta! Tenemos planes desde $29/mes. El plan básico incluye chatbot básico, mientras que el plan profesional incluye IA avanzada, analíticas y soporte prioritario. ¿Te gustaría más detalles?",
  planes:
    "Ofrecemos 3 planes: Básico ($29/mes), Profesional ($79/mes) y Enterprise (personalizado). Todos incluyen chatbot IA, integración web y soporte por email. ¿Cuál te interesa?",
  demo: "¡Estás en la demo ahora mismo! 😄 Puedes probar conversar conmigo. ¿Sobre qué tema te gustaría hablar?",
  hola: "¡Hola! 👋 ¿En qué puedo ayudarte hoy? Puedo darte información sobre precios, planes, características o hacer una demostración.",
  gracias:
    "¡De nada! 😊 Si tienes más preguntas, no dudes en preguntar. Estoy aquí para ayudarte.",
  default:
    "Interesante pregunta. Nuestro chatbot puede ayudarte con atención al cliente, ventas, soporte técnico y más. ¿Te gustaría saber más sobre alguna funcionalidad específica?",
};

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  for (const [key, response] of Object.entries(botResponses)) {
    if (lowerInput.includes(key)) {
      return response;
    }
  }

  return botResponses["default"];
};

const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  const userMessage = userInput.value.trim();
  messages.value.push({ from: "user", text: userMessage });
  userInput.value = "";

  isTyping.value = true;

  await nextTick();
  scrollToBottom();

  setTimeout(() => {
    isTyping.value = false;
    const response = getBotResponse(userMessage);
    messages.value.push({ from: "bot", text: response });

    nextTick();
    scrollToBottom();
  }, 1500);
};

const scrollToBottom = () => {
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
  }
};

onMounted(() => {
  gsap.from(".demo-header", {
    scrollTrigger: {
      trigger: ".demo-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  gsap.from(".chat-interface", {
    scrollTrigger: {
      trigger: ".demo-section",
      start: "top 70%",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.3,
  });

  gsap.from(".demo-features", {
    scrollTrigger: {
      trigger: ".demo-section",
      start: "top 70%",
    },
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.5,
  });
});
</script>

<style lang="scss" scoped>
.demo-section {
  padding: 120px 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(99, 102, 241, 0.05) 100%
  );
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.demo-header {
  text-align: center;
  margin-bottom: 60px;
}

.demo-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.2),
    rgba(6, 182, 212, 0.2)
  );
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #34d399;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.demo-title {
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #34d399, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
}

.demo-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.chat-interface {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.chat-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bot-avatar {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }
}

.bot-info {
  display: flex;
  flex-direction: column;
}

.bot-name {
  color: #fff;
  font-weight: 600;
  font-size: 15px;
}

.bot-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.chat-btn {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.chat-messages {
  height: 400px;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
}

.message-wrapper {
  display: flex;
  gap: 12px;
  align-items: flex-start;

  &.from-user {
    flex-direction: row-reverse;

    .message-bubble {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 20px 20px 4px 20px;
    }
  }
}

.message-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
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

.message-bubble {
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px 20px 20px 4px;
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
  max-width: 80%;
}

.typing-wrapper {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.typing-bubble {
  display: flex;
  gap: 4px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px 20px 20px 4px;

  .dot {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
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
    opacity: 0.4;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

.chat-input {
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.input-field {
  flex: 1;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: rgba(99, 102, 241, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
}

.send-btn {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    color: #fff;
  }

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.demo-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.demo-feature {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(99, 102, 241, 0.2);
    transform: translateX(8px);
  }
}

.demo-feature-icon {
  font-size: 32px;
}

.demo-feature-text {
  h4 {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }
}
</style>
