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
}
</style>

<script>
export default {
	data() {
		return {
			table: [
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[1, 2, 3, 4, 5, 6, 7, 8, 9]
			]
		}
	},
	created() {
	},
	methods: {
	}
}
</script>

