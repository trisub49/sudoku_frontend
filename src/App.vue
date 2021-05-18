<template>
  <v-container id="app">
    <h1>Sudoku Project App</h1>
    <br><hr><br>
    <GameBoard />
  </v-container>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";

export default {
  name: "App",
  components: {
    GameBoard,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
