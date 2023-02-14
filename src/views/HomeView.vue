<template>
  <div class="home">
    <div>
      <Calculator />
    </div>
    <div>
      <CalculatorLog />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from "@/components/Calculator.vue";
import CalculatorLog from "@/components/CalculatorLog.vue";

export default {
  name: "HomeView",
  components: {
    Calculator,
    CalculatorLog,
  },
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
