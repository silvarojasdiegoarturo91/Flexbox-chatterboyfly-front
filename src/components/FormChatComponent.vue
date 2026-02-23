<template>
  <div class="card-footer text-white">
    <form @submit.prevent="sendAsk">
      <div class="form-group">
        <label for="InputQuestion">Type your question here:</label>
        <input
          id="InputQuestion"
          v-model="question"
          class="form-control"
          type="text"
          placeholder="Type your question here…"
        />
        <small class="form-text">{{ answer }}</small>
      </div>
      <button
        :disabled="question.length === 0"
        type="submit"
        class="btn btn-success"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import axios from "axios";

export default defineComponent({
  props: ["session_id", "session_token"],
  setup(props) {
    const answer = ref("I cannot give you an answer until you ask a question!");
    const question = ref("");
    const sessionToken = ref(props.session_token || "");
    const sessionId = ref(props.session_id || "");
    const counter = ref("");
    const emitter = getCurrentInstance()?.appContext.config.globalProperties
      .emitter as
      | {
          emit: (event: string, payload: unknown) => void;
        }
      | undefined;

    const sendAsk = async (e: Event) => {
      e.preventDefault();
      emitter?.emit("messagesent", question.value);
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BACK_URL}/api/conversation`,
          {
            sessionToken: sessionToken.value,
            sessionId: sessionId.value,
            message: question.value,
            counters: counter.value,
          }
        );
        answer.value = "";
        sessionToken.value = response.data.sessionToken;
        sessionId.value = response.data.sessionId;
        counter.value =
          response.data.counters >= 1 ? response.data.counters : "";
        emitter?.emit("messagesSendBot", response.data);
        //vm.answer = _.capitalize(response.data.answer)
      } catch (error) {
        answer.value = "Error! Could not reach the API. " + error;
      }
      answer.value = "writing...";
      question.value = "";
    };

    return {
      answer,
      question,
      sessionToken,
      sessionId,
      counter,
      sendAsk,
    };
  },
});
</script>
