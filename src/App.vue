<template>
  <v-app>
    <v-container id="app">
      <h1>Sudoku Project App</h1>
      <v-divider />
      <v-spacer />
      <v-container v-if="menuStatus == 0">
        <v-btn x-large @click="menuStatus = 1">Új játék</v-btn>
        <v-spacer />
        <v-btn v-if="isGameStateInStorage()" x-large>Folytatás</v-btn>
      </v-container>
      <v-container v-if="menuStatus == 1">
        <v-btn x-large class="success" @click="setDifficulty(1)">Könnyű</v-btn>
        <v-spacer />
        <v-btn x-large class="info" @click="setDifficulty(2)">Közepes</v-btn>
        <v-spacer />
        <v-btn x-large class="error" @click="setDifficulty(3)">Nehéz</v-btn>
      </v-container>
      <v-container v-if="menuStatus == 2">
        <v-container class="float-left col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3"><GameInfo /></v-container>
        <v-container class="float-left col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9"><GameBoard :difficulty="difficulty" /></v-container>
      </v-container>
    </v-container>
  </v-app>
</template>

<style>
div[data-app='true'] {
  background: no-repeat center center fixed !important;
  background-size: cover;
}
.v-app {
  background: rgba(0, 0, 0, 0);
}
.v-btn {
  margin: 20px;
  width: 65%;
  max-width: 400px;
  height: 100px;
  text-transform: none;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  background-color: rgba(234, 234, 250, 0.8);
  border-radius: 20px 20px;
  text-align: center;
}
</style>

<script>
import GameBoard from "./components/GameBoard.vue";
import GameInfo from "./components/GameInfo.vue";

export default {
  name: "App",

  data() {
    return {
      menuStatus: 0,
      difficulty: 0
    }
  },

  components: {
    GameBoard,
    GameInfo
  },
  
  methods: {
    setDifficulty(lvl) {
      this.difficulty = lvl;
      this.menuStatus = 2;
    },
    isGameStateInStorage() {
      if(localStorage.getItem('table') != null && localStorage.getItem('table') != 'null') {
        return true;
      }
      return false;
    }
  }
}
</script>

