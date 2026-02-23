import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renderiza el headline comercial del home", () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain("Vende 24/7 con chatbots");
    expect(wrapper.text()).toContain("Escala al ritmo de tu equipo comercial");
  });
});
