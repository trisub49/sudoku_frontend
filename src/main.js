import Vue from "vue";
import GameEngine from "./GameEngine.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(GameEngine),
}).$mount("#gameengine");
