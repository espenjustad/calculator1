import { createStore } from "vuex";
import { reactive } from "vue";

export const store = reactive({
  history: [],
});

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
