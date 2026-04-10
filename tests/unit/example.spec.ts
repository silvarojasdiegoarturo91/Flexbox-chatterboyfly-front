import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App landing", () => {
  beforeAll(() => {
    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      value: class {
        observe() {
          return undefined;
        }
        unobserve() {
          return undefined;
        }
        disconnect() {
          return undefined;
        }
      },
    });
  });

  it("renders the new chatbot sales hero", () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain("Vende incluso cuando tu equipo duerme.");
    expect(wrapper.text()).toContain(
      "Chatbots para ventas y soporte en modo 24/7"
    );
  });
});
