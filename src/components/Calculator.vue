<template>
  <div class="calculator-build">
    <!--display event data-->
    <div class="Screen">
      <h1 class="screenText">{{ equation }}</h1>
    </div>
    <div class="Buttons">
      <div><button class="TextButton" @click="clearScreen">C</button></div>
      <div><button class="TextButton" @click="ansOnScreen">ANS</button></div>
      <div><button class="TextButton" @click="deleteAll">DEL</button></div>
      <div><button class="number" @click="mathButton('+')">+</button></div>
      <div><button class="number" @click="append(7)">7</button></div>
      <div><button class="number" @click="append(8)">8</button></div>
      <div><button class="number" @click="append(9)">9</button></div>
      <div><button class="number" @click="mathButton('-')">-</button></div>
      <div><button class="number" @click="append(4)">4</button></div>
      <div><button class="number" @click="append(5)">5</button></div>
      <div><button class="number" @click="append(6)">6</button></div>
      <div><button class="number" @click="mathButton('*')">*</button></div>
      <div><button class="number" @click="append(1)">1</button></div>
      <div><button class="number" @click="append(2)">2</button></div>
      <div><button class="number" @click="append(3)">3</button></div>
      <div><button class="number" @click="mathButton('/')">/</button></div>
      <div><button class="number" @click="append(0)">0</button></div>
      <div><button class="number" @click="addComma">.</button></div>
      <div><button class="number"></button></div>
      <div><button class="number" @click="equalsButton">=</button></div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/index.js";
export default {
  name: "Calculator-build",
  //props: {
  //msg: String,
  //},

  data() {
    return {
      store,
      screenNumber: "",
      currentNumber: "",
      prevNumber: "",
      mathSymbol: "",
      ans: 0,
    };
  },
  methods: {
    updateScreen() {
      this.screenNumber =
        this.prevNumber + this.mathSymbol + this.currentNumber;
    },

    append(number) {
      this.currentNumber += number;
      this.updateScreen();
    },

    clearScreen() {
      this.ans = this.currentNumber;
      this.screenNumber = "";
      this.currentNumber = "";
      this.prevNumber = "";
      this.mathSymbol = "";
    },

    mathButton(symbol) {
      this.prevNumber = this.currentNumber;
      this.currentNumber = "";
      this.mathSymbol = symbol;
      this.updateScreen();
    },

    equalsButton() {
      this.ans = eval(this.prevNumber + this.mathSymbol + this.currentNumber);
      this.ans = Math.round(this.ans * 10000) / 10000;
      store.history.push(
        this.prevNumber + this.mathSymbol + this.currentNumber + "=" + this.ans
      );

      this.currentNumber = this.ans;
      this.prevNumber = "";
      this.mathSymbol = "";
      this.updateScreen();
    },

    ansOnScreen() {
      this.currentNumber = this.ans;
      this.updateScreen();
    },

    addComma() {
      if (
        !this.currentNumber.includes(".") &&
        !this.currentNumber.length == 0
      ) {
        this.currentNumber += ".";
      }
      this.updateScreen();
    },

    deleteAll() {
      this.ans = "";
      this.screenNumber = "";
      this.currentNumber = "";
      this.prevNumber = "";
      this.mathSymbol = "";
      store.history = [];
    },
  },

  computed: {
    equation() {
      if (this.screenNumber.length < 1) {
        return "";
      } else {
        return this.screenNumber;
      }
    },
  },
};
</script>

<style scoped>
.calculator-build {
  width: 40vw;
  height: 70vh;
  background-color: #4c4d4d;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr;
  border-radius: 8px;
}

.calculator-build div {
  text-align: center;
  text-align: justify;
}

.Screen {
  display: grid;
  grid-template-rows: 1, 5fr;
  border: 1px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: #39a7a7;
  font-size: 10px;
  overflow: hidden;
  border-radius: 8px;
}

.screenText {
  display: inline-block;
  align-self: flex-end;
  margin-left: 5px;
}

.Buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
  gap: 9px 6px;
  font-size: 20px;
}

.Buttons div {
  text-align: center;
  margin: 2px;
}

.TextButton {
  background-color: #f77d1f;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.number {
  background-color: #38312b;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  color: white;
}
</style>
