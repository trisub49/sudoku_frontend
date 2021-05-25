<template>
	<v-container class="gameboard">
		<v-container>
			<table>
				<tr class="mainrow" v-for="rIndex in 9" :key="rIndex">
					<td class="maincol" v-for="cIndex in 9" :key="cIndex" :id="'row' + rIndex + 'col' + cIndex">
						<input 
						class="mainvalue" 
					 	@click="clearCell(rIndex-1, cIndex-1)" @change="numberInspection(rIndex-1, cIndex-1)" v-model="table[rIndex - 1][cIndex - 1]" :id="'input_row' + rIndex + 'col' + cIndex"/>
					</td>
				</tr>
			</table>
			<v-text-field @change="showNumbers()" v-model="numberChecked" />
		</v-container>
	</v-container>
</template>

<style scoped>
table {
	width: 480px;
	height: 480px;
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
	font-size: xx-large;
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
</style>

<script>
export default {
	props: ['difficulty'],
	data() {
		return {
			numberChecked: 0,
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
			]
		}
	},
	created() {
		this.initTable();
	},
	methods: {
		getPossibleNumbers(row, col) {
			let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			for(let i = 0; i < 9; i ++) {
				// sor ellenőrzés
				if(possibleNumbers.indexOf(this.table[row][i]) !== -1 && i != col) {
					possibleNumbers = possibleNumbers.filter(x => x !== this.table[row][i]);
				}
				// oszlop ellenőrzés
				if(possibleNumbers.indexOf(this.table[i][col]) !== -1 && i != row) {
					possibleNumbers = possibleNumbers.filter(x => x !== this.table[i][col]);
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
		getNumbersFromBlock(row, col) {
			let blockNumber = this.getBlockNumber(row, col);
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
			for(let i = rowStart; i < rowEnd; i ++) {
				for(let j = colStart; j < colEnd; j ++) {
					if(!removableNumbers.includes(this.table[i][j])) {
						removableNumbers.push(this.table[i][j]);
					}
				}
			}
			return removableNumbers;
		},
		initTable() {
			let row = 0;
			let col = 0;
			var preLoad = performance.now();

			while(row < 9) {
				let rowFailCounter = 0;
				while(col < 9 && rowFailCounter < 5) {
					let possibleNumbers = this.getPossibleNumbers(row, col);
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
						this.table[row][col] = number;
						col ++;
					}
				}
				col = 0;
				row ++;
			}
			console.log(`A véletlenszerű tábla betöltés ${(performance.now() - preLoad) / 100} másodpercet vett igénybe.`);

			this.removeNumbers(this.difficulty);
			setTimeout(() => this.initCellStyles(), 1);
		},
		removeNumbers(difficulty) {
			let removableNumbers = 17 + (difficulty * 3);
			let removedCounter = 0;
			for(let row = 0; row < 9; row ++) {
				for(let col = 0; col < 9; col ++) {
					let random = Math.floor(Math.random() * (81 / removableNumbers));
					if(random == 1 && removedCounter != removableNumbers) {
						this.table[row][col] = '';
						removableNumbers ++;
					}
				}
			}
		},
		resetRow(row) {
			for(let i = 0; i < 9; i ++) {
				this.table[row][i] = '';
			}
		},
		initCellStyles() {
			for(let i = 0; i < 9; i ++) {
				for(let k = 0; k < 9; k ++) {
					let number = parseInt(this.table[i][k])
					if(number > 0) {
						let cell = document.getElementById(`input_row${i+1}col${k+1}`);
						cell.disabled = true;
					}				
				}
			}
		},
		clearCell(row, col) {
			this.table[row][col] = '';
			let cell = document.getElementById(`input_row${row+1}col${col+1}`);
			cell.value = '';
			cell.style.color = 'black';
		},
		numberInspection(row, col) {
			let num = this.table[row][col];
			if(parseInt(num) > 0) {
				if(parseInt(num) > 9) {
					this.clearCell(row, col);
				} else {
					let cell = document.getElementById(`input_row${row+1}col${col+1}`);
					if(!this.isNumberAccepted(num, row, col)) {
						cell.style.color = 'red';
					} else {
						cell.style.color = 'blue';
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
		isRowFree(num, row, col) {
			for(let i = 0; i < 9; i ++) {
				if(this.table[row][i] == num && i != col) {
					return false;
				}
			}
			return true;
		},
		isColFree(num, row, col) {
			for(let i = 0; i < 9; i ++) {
				if(this.table[i][col] == num && i != row) {
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
		isNumberInBlock(number, row, col) {
			let blockNumber = this.getBlockNumber(row, col);
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
			for(let i = rowStart; i < rowEnd; i ++) {
				for(let j = colStart; j < colEnd; j ++) {
					if(this.table[i][j] == number && i != row && j != col) {
						return true;
					}
				}
			}
			return false;
		},
		showNumbers() {
			for(let i = 0; i < 9; i ++) {
				for(let j = 0; j < 9; j ++) {
					let cell = document.getElementById(`input_row${i+1}col${j+1}`);
					if(this.table[i][j] == this.numberChecked) {
						cell.style.color = 'red';
					} else {
						cell.style.color = 'black';
					}
				}
			}
		}
	}
}
</script>

