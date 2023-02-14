<template>
  <div class="contact-form">
    <form @submit.prevent="sendForm">
      <fieldset>
        <legend>What is your name?</legend>

        <BaseInput
          v-model="feedback.name"
          label="name"
          type="text"
          error="This is an error"
        />
      </fieldset>

      <fieldset>
        <legend>What is your email?</legend>

        <BaseInput v-model="feedback.email" label="email" type="text" />
      </fieldset>

      <fieldset>
        <legend>your feedback to us:</legend>

        <BaseInput v-model="feedback.input" label="input" type="text" />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      feedback: {
        name: "",
        email: "",
        input: "",
      },
    };
  },

  methods: {
    sendForm() {
      axios
        .post("http://localhost:3000/posts", this.feedback)
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    },
  },
};
</script>
<style>
fieldset {
  border: 0;
  margin: 30px;
  padding: 0;
}

legend {
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
