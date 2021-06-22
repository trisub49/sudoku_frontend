import Vue from "vue";
import GameEngine from "./GameEngine.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(GameEngine),
}).$mount("#gameengine");
