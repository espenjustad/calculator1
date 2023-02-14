<template>
  <div class="Calculator-log">
    <div class="Header">
      <h1>Calculator Log</h1>
    </div>
    <div class="mainLog">
      <p v-for="instance in store.history" :key="instance">{{ instance }}</p>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/index.js";

export default {
  name: "CalculatorLog",
  //props: {
  //msg: String,
  //},

  data() {
    return {
      store,
    };
  },
};
</script>

<style>
.Calculator-log {
  width: 40vw;
  height: 70vh;
  background-color: #4c4d4d;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr;
  border-radius: 8px;
}

.Calculator-log div {
  text-align: center;
  border-radius: 8px;
}

.Header {
  border: 1px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: #39a7a7;
}

.mainLog {
  color: white;
}
</style>
