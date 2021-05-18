<template>
	<v-container class="gameboard">
		<table>
			<tr class="mainrow" v-for="rIndex in 9" :key="rIndex">
				<td class="maincol" v-for="cIndex in 9" :key="cIndex" :id="'row' + rIndex + 'col' + cIndex">
					<input class="mainvalue" type="text" v-model="table[rIndex - 1][cIndex - 1]"/>
				</td>
			</tr>
		</table>
	</v-container>
</template>

<style scoped>
table {
	width: 480px;
	height: 480px;
	border-collapse: collapse;
	border: 2px solid black;
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
	color: grey;
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
			table: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]	
			]
		}
	},
	created() {
	},
	methods: {
		initTable() {
			let addedNumbers = 0;
			for(let i = 0; i < 9; i ++) {
				if((Math.floor(Math.random() * 9) + 1) == 9) {
					do {
						let number = Math.floor(Math.random() * 9) + 1;
					}
					while(this.isNumberAccepted(number, row, col))
				}
			}
		},
		isNumberAccepted(num, row, col) {
			let isAccepted;
			if(this.isRowFree(num, row) && this.isColFree(num, col) && this.isBlockFree(num, row, col)) {
				return true;
			}
			return false;
		},
		isRowFree(num, row) {
			if(this.table[row].includes(num)) {
				return false;
			}
			return true;
		},
		isColFree(num, col) {
			for(let i = 0; i < 9; i ++) {
				if(this.table[i][col] == num) {
					return false;
				}
			}
			return true;
		},
		isBlockFree(num, row, col) {
			let blockNumber = this.getBlockNumber(row, col);
			if(!this.isNumberInBlock(num, blockNumber)) {
				return true;
			}
			return false;
		},
		getBlockNumber(row, col) {
			if(row < 3) {
				if(col < 3) return 1;
				if(col >= 3 && col < 6) return 2;
				if(col >= 6) return 3;
			}
			if(row >= 3 && row < 6) {
				if(col < 3) return 4;
				if(col >= 3 && col < 6) return 5;
				if(col >= 6) return 6;
			}
			if(row >= 6) {
				if(col < 3) return 7;
				if(col >= 3 && col < 6) return 8;
				if(col >= 6) return 9;
			}
		},
		isNumberInBlock(number, blockNumber) {
			let rowStart = 0;
			let colStart = 0;
			let rowEnd = 0;
			let colEnd = 0;
			switch(blockNumber) {
				case 1: rowEnd = 3; colEnd = 3; break;
				case 2: rowEnd = 3; colStart = 3; colEnd = 6; break;
				case 3: rowEnd = 3; colStart = 6; colEnd = 9; break;
				case 4: rowStart = 3; rowEnd = 6; colEnd = 3; break;
				case 5: rowStart = 3; rowEnd = 6; colStart = 3; colEnd = 6; break;
				case 6: rowStart = 3; rowEnd = 6; colStart = 6; colEnd = 7; break;
				case 7: rowStart = 6; rowEnd = 9; colEnd = 3; break;
				case 8: rowStart = 6; rowEnd = 9; colStart = 3; colEnd = 6; break;
				case 9: rowStart = 6; rowEnd = 9; colStart = 6; colEnd = 9; break;
			}
			for(let i = rowStart; i < rowEnd; i ++) {
				for(let j = colStart; j < colEnd; j ++) {
					if(this.table[i][j] == number) {
						return true;
					}
				}
			}
			return false;
		}
	}
}
</script>

