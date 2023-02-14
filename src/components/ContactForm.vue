<template>
  <div class="contact-form">
    <form @submit.prevent="onSubmit" @submit="submit">
      <fieldset>
        <legend>What is your name?</legend>

        <BaseInput v-model="name" label="name" type="text" :error="nameError" />
      </fieldset>

      <fieldset>
        <legend>What is your email?</legend>

        <BaseInput
          label="email"
          type="text"
          v-model="email"
          :error="emailError"
        />
      </fieldset>

      <fieldset>
        <legend>your feedback to us:</legend>

        <BaseInput
          v-model="input"
          label="input"
          type="text"
          :error="inputError"
        />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useField, useForm } from "vee-validate";
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

  setup() {
    function onSubmit() {
      alert("Submitted");
    }

    const validations = {
      name: (value) => {
        const requiredMessage = "This field is required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;

        return true;
      },
      email: (value) => {
        if (!value) return "This field is required";

        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(value).toLowerCase())) {
          return "Please enter a valid email address";
        }
        return true;
      },
      input: (value) => {
        const requiredMessage = "This field is required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;

        return true;
      },
    };

    const { handleSubmit } = useForm({
      validationSchema: validations,
    });

    const { value: name, errorMessage: nameError } = useField("name");
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: input, errorMessage: inputError } = useField("input");

    const submit = handleSubmit((values) => {
      axios
        .post("http://localhost:3000/posts", values)
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    });

    return {
      onSubmit,
      name: name,
      email: email,
      input: input,
      nameError: nameError,
      emailError: emailError,
      inputError: inputError,
      submit,
    };
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
