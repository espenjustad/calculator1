<template>
  <div class="contact-form">
    <form>
      <h3>Name</h3>

      <label>Title</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field"
      />

      <label>Email</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
      />

      <h3>Feedback</h3>

      <label>Feedback</label>
      <input
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: contact-form,


  data() {
    return {
      feedback: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
};
</script>
<style>
.contact-form {
  border: 1px solid black;
}
</style>
