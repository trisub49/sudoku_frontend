<template>
  <v-app>
    <v-container id="app">
      <h1 id="title">Sudoku Project App</h1>
      <v-divider />
      <v-spacer />
      <v-container v-if="menuStatus == 0">
        <v-btn x-large @click="menuStatus = 1" elevation="12">Új játék</v-btn>
        <v-spacer />
        <v-btn v-if="isGameStateInStorage()" x-large elevation="12">Folytatás</v-btn>
      </v-container>
      <v-container v-if="menuStatus == 1">
        <v-btn x-large color="#00e639" elevation="12" @click="setDifficulty(1)">Könnyű</v-btn>
        <v-spacer />
        <v-btn x-large color="#ffff66" elevation="12" @click="setDifficulty(2)">Közepes</v-btn>
        <v-spacer />
        <v-btn x-large color="#ff5c33" elevation="12" @click="setDifficulty(3)">Nehéz</v-btn>
      </v-container>
      <v-container v-if="menuStatus == 2">
        <v-container class="float-left col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3"><GameInfo /></v-container>
        <v-container class="float-right col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9"><GameBoard :difficulty="difficulty" /></v-container>
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
  font-weight: bold;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(234, 234, 250, 0.6);
  text-align: center;
  vertical-align: middle;
  margin-top: auto;
  margin-bottom: auto;
}
#title {
  text-transform: capitalize;
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

