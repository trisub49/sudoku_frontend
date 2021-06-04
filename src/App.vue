<template>
  <v-app>
    <v-container id="app">
      <h1 id="title">Sudoku Project App</h1>
      <v-divider />
      <v-spacer />
      <v-container v-if="$store.state.menuStatus == 0">
        <v-btn class="starter" x-large @click="$store.state.menuStatus = 1" elevation="12">Új játék</v-btn>
        <v-spacer />
        <v-btn class="starter" v-if="isGameStateInStorage()" x-large elevation="12">Folytatás</v-btn>
      </v-container>
      <v-container v-if="$store.state.menuStatus == 1">
        <v-btn class="starter" x-large color="#00e639" elevation="12" @click="setDifficulty(1)">Könnyű</v-btn>
        <v-spacer />
        <v-btn class="starter" x-large color="#ffff66" elevation="12" @click="setDifficulty(2)">Közepes</v-btn>
        <v-spacer />
        <v-btn class="starter" x-large color="#ff5c33" elevation="12" @click="setDifficulty(3)">Nehéz</v-btn>
      </v-container>
      <v-container v-if="$store.state.menuStatus == 2">
        <v-container class="float-left col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3"><GameInfo /></v-container>
        <v-container class="float-right col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9"><GameBoard /></v-container>
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
.starter {
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

  components: {
    GameBoard,
    GameInfo
  },

  data() {
    return {
      timer: null,
    }
  },
  
  methods: {
    setDifficulty(lvl) {
      this.$store.state.difficulty = lvl;
      this.$store.state.menuStatus = 2;
      this.initTable();
    },
    isGameStateInStorage() {
      if(localStorage.getItem('table') != null && localStorage.getItem('table') != 'null') {
        return true;
      }
      return false;
    },

    initTable() {

      for(let i = 0; i < 9; i ++) { this.resetRow(i); }
      window.clearTimeout(this.timer);
			let row = 0;
			let col = 0;
			this.$store.state.filledFields = 81;
			this.$store.state.failCounter = 0;
			this.$store.state.counter = 0;
			this.$store.state.gamePaused = false;
			while(row < 9) {
				let rowFailCounter = 0;
				while(col < 9 && rowFailCounter < 5) {
					let possibleNumbers = this.getPossibleNumbers( row, col);
					if(possibleNumbers.length == 0) {
						this.resetRow(row);
						col = 0;
						rowFailCounter ++;
						if(rowFailCounter == 5) {
							row --;
							// ha a sor létrehozása 5 alkalommal nem sikerül, az előző sort újratölti
						}
					} else {
						let random = Math.floor(Math.random() * possibleNumbers.length);
						let number = possibleNumbers[random];
						this.$store.state.table[row][col] = number;
						col ++;
					}
				}
				col = 0;
				row ++;
			}
			this.removeNumbers(58 + this.$store.state.difficulty * 2);
			this.timer = setInterval(() => this.countTime(), 1000);
    },
    removeNumbers(number) {
			let removedCounter = 0;
			let row = 0;
			while(row < 9) {
				for(let col = 0; col < 9; col ++) {
					if(this.$store.state.table[row][col] != '' && removedCounter < number && Math.floor(10 * Math.random(2)) == 1) {
						this.$store.state.table[row][col] = '';
						removedCounter ++;
						this.$store.state.filledFields --;
					}
				}
				row ++;
				if(row == 9 && removedCounter < number) {
					row = 0;
				}
			}
		},
    countTime() {
			if(this.$store.state.filledFields < 81 && this.$store.state.gamePaused == false) {
				this.$store.state.counter ++;
			}
    },
		resetRow(row) {
			for(let col = 0; col < 9; col ++) {
				this.$store.state.table[row][col] = '';
			}
		},
    getPossibleNumbers(row, col) {
			let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			for(let i = 0; i < 9; i ++) {
				if(possibleNumbers.indexOf(this.$store.state.table[row][i]) !== -1 && i != col) {
					possibleNumbers = possibleNumbers.filter(x => x !== this.$store.state.table[row][i]);
				}
				if(possibleNumbers.indexOf(this.$store.state.table[i][col]) !== -1 && i != row) {
					possibleNumbers = possibleNumbers.filter(x => x !== this.$store.state.table[i][col]);
				}
			}
			let fromBlock = this.getNumbersFromBlock(row, col);
			fromBlock.forEach(number => {
				if(possibleNumbers.indexOf(number) !== -1) {
					possibleNumbers = possibleNumbers.filter(x => x !== number);
				}
			});
			return possibleNumbers;
		},
		getNumbersFromBlock(actualRow, actualCol) {
			let blockNumber = this.getBlockNumber(actualRow, actualCol);
			let rowStart = 0;
			let colStart = 0;
			let rowEnd = 0;
			let colEnd = 0;
			let removableNumbers = [];

			switch(blockNumber) {
				case 1: { rowEnd = 3; colEnd = 3; break; }
				case 2: { rowEnd = 3; colStart = 3; colEnd = 6; break; }
				case 3: { rowEnd = 3; colStart = 6; colEnd = 9; break; }

				case 4: { rowStart = 3; rowEnd = 6; colEnd = 3; break; }
				case 5: { rowStart = 3; rowEnd = 6; colStart = 3; colEnd = 6; break; }
				case 6: { rowStart = 3; rowEnd = 6; colStart = 6; colEnd = 9; break; }

				case 7: { rowStart = 6; rowEnd = 9; colEnd = 3; break; }
				case 8: { rowStart = 6; rowEnd = 9; colStart = 3; colEnd = 6; break; }
				case 9: { rowStart = 6; rowEnd = 9; colStart = 6; colEnd = 9; break; }
			}

			for(let row = rowStart; row < rowEnd; row ++) {
				for(let col = colStart; col < colEnd; col ++) {
					if(!removableNumbers.includes(this.$store.state.table[row][col])) {
						removableNumbers.push(this.$store.state.table[row][col]);
					}
				}
			}
			return removableNumbers;
		},
    getBlockNumber(row, col) {
			if(row < 3) {
				if(col < 3) return 1;
				if(col >= 3 && col < 6) return 2;
				if(col >= 6) return 3;
			} else if(row >= 3 && row < 6) {
				if(col < 3) return 4;
				if(col >= 3 && col < 6) return 5;
				if(col >= 6) return 6;
			} else if(row >= 6) {
				if(col < 3) return 7;
				if(col >= 3 && col < 6) return 8;
				if(col >= 6) return 9;
			}
		},
  }
}
</script>

