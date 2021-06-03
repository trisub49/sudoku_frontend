import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    failCounter: 0,
    filledFields: 81,
    gamePaused: false
  },
  mutations: {},
  actions: {},
  modules: {},
});
