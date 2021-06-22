<template>
	<v-container class="gameboard mx-0 px-0">
		<v-row v-show="$store.state.gamePaused == true" id="pause" align="center" justify="center">
			<h1>A játék szünetel. </h1><br>
			Ilyenkor a tábla nem látszik. <br>
			Folytatáshoz kattints a Play ikonra!
		</v-row>
		<table v-show="$store.state.gamePaused == false" id="sudokutable" class="mx-auto px-0">
			<tr class="mainrow" v-for="rIndex in 9" :key="rIndex">
				<td class="maincol" v-for="cIndex in 9" :key="cIndex" :id="'row' + rIndex + 'col' + cIndex">
					<input 
						class="mainvalue" 
						@click="clearCell(rIndex - 1, cIndex - 1)" 
						@change="numberInspection(rIndex - 1, cIndex - 1)" 
						v-model="$store.state.table[rIndex - 1][cIndex - 1]" 
						:id="'input_row' + rIndex + 'col' + cIndex"
					/>
				</td>
			</tr>
		</table>
	</v-container>
</template>

<style scoped>
.gameboard {
	padding-top: 0px;
	margin-top: 0px;
}
table {
	width: 100%;
	max-width: 380px;
	height: 380px;
	border-collapse: collapse;
	border: 2px solid black;
	background-color: rgb(234, 234, 250);
}
.maincol {
	border: 0.25px solid grey;
	text-align: center;
	vertical-align: middle;
}
.mainvalue {
	border: none;
	width: 20px;
	font-size: x-large;
	font-weight: bold;
	color: black;
	text-align: center
}
td[id^="row3"], td[id^="row6"] {
	border-bottom: 2px solid black;
}
td[id$="col3"], td[id$="col6"] {
	border-right: 2px solid black;
}
.mainvalue :active, .mainvalue :focus {
	border: none;
	outline: none;
}
#pause {
	margin-left: auto;
	margin-right: auto;
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: x-large;
	font-weight: bold;
	border: 2px solid black;
	height: 380px;
	width: 380px;
	background-color: rgb(234, 234, 250);
}
</style>

<script>
import axios from 'axios';

export default {
	methods: {
		getPossibleNumbers(row, col) {
			let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			for(let i = 0; i < 9; i ++) {
				// sor ellenőrzés
				if(possibleNumbers.indexOf(this.$store.state.table[row][i]) !== -1 && i != col) {
					possibleNumbers = possibleNumbers.filter(x => x !== this.$store.state.table[row][i]);
				}
				// oszlop ellenőrzés
				if(possibleNumbers.indexOf(this.$store.state.table[i][col]) !== -1 && i != row) {
					possibleNumbers = possibleNumbers.filter(x => x !== this.$store.state.table[i][col]);
				}
			}
			// blokk ellenőrzés
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
		resetRow(row) {
			for(let col = 0; col < 9; col ++) {
				this.$store.state.table[row][col] = '';
			}
		},
		// játék indítás utáni metódusok
		numberInspection(row, col) {
			let num = this.$store.state.table[row][col];
			if(parseInt(num) > 0) {
				if(parseInt(num) > 9) {
					this.clearCell(row, col);
				} else {
					let cell = document.getElementById(`input_row${row + 1}col${col + 1}`);

					if(!this.isNumberAccepted(num, row, col)) {
						cell.style.color = 'red';
						this.$store.state.failCounter ++;
						this.$store.state.filledFields ++;
					} else {
						cell.style.color = 'blue';
						this.$store.state.filledFields ++;
						if(this.$store.state.filledFields == 81) {
							this.finishGame();
						}
					}
				}
			}
		},
		isNumberAccepted(num, row, col) {
			if(this.isBlockFree(num, row, col) && this.isRowFree(num, row, col) && this.isColFree(num, row, col)) {
				return true;
			}
			return false;
		},
		isRowFree(num, row, actualCol) {
			for(let col = 0; col < 9; col ++) {
				if(this.$store.state.table[row][col] == num && col != actualCol) {
					return false;
				}
			}
			return true;
		},
		isColFree(num, actualRow, actualCol) {
			for(let row = 0; row < 9; row ++) {
				if(this.$store.state.table[row][actualCol] == num && row != actualRow) {
					return false;
				}
			}
			return true;
		},
		isBlockFree(num, row, col) {
			if(this.isNumberInBlock(num, row, col)) {
				return false;
			}
			return true;
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
		isNumberInBlock(number, actualRow, actualCol) {
			let blockNumber = this.getBlockNumber(actualRow, actualCol);
			let rowStart = 0;
			let colStart = 0;
			let rowEnd = 0;
			let colEnd = 0;
			switch(blockNumber) {
				case 1: { rowEnd = 3; colEnd = 3; break; }
				case 2: { rowEnd = 3; colStart = 3; colEnd = 6; break; }
				case 3: { rowEnd = 3; colStart = 6; colEnd = 9; break; }

				case 4: { rowStart = 3; rowEnd = 6; colEnd = 3; break; }
				case 5: { rowStart = 3; rowEnd = 6; colStart = 3; colEnd = 6; break; }
				case 6: { rowStart = 3; rowEnd = 6; colStart = 6; colEnd = 7; break; }

				case 7: { rowStart = 6; rowEnd = 9; colEnd = 3; break; }
				case 8: { rowStart = 6; rowEnd = 9; colStart = 3; colEnd = 6; break; }
				case 9: { rowStart = 6; rowEnd = 9; colStart = 6; colEnd = 9; break; }
			}
			for(let row = rowStart; row < rowEnd; row ++) {
				for(let col = colStart; col < colEnd; col ++) {
					if(this.$store.state.table[row][col] == number && row != actualRow && col != actualCol) {
						return true;
					}
				}
			}
			return false;
		},
		clearCell(row, col) {
			let cell = document.getElementById(`input_row${row + 1}col${col + 1}`);
			if(this.$store.state.table[row][col] != '') {
				this.$store.state.filledFields --;
			}
			this.$store.state.table[row][col] = '';
			cell.value = '';
			cell.style.color = 'black';
		},
    finishGame() {
			let host = window.location.protocol + "//" + window.location.host;
			axios.post(`${host}/api/statistic`, {
				playerId: this.$store.state.user._id,
				level: this.$store.state.difficulty,
				time: this.$store.state.counter,
				failCounter: this.$store.state.failCounter,
				isFinished: true
			})
			.then(res => {
				console.log(res);
				this.$store.state.menuStatus = 0;
			});
		}
	}
}
</script>

