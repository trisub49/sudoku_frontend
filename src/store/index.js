import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuStatus: 0,
    difficulty: 0,
    table: [
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    counter: 0,
    failCounter: 0,
    filledFields: 81,
    gamePaused: false,
    user: null
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  },
  modules: {

  },
});
