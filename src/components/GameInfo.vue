<template>
	<v-container class="gameinfo">
		<v-container class="gameinfobox">
			<v-container class="d-none d-sm-none d-md-block d-lg-block d-xl-block text-left">
				<table>
					<tr><td class="titles">Eltelt idő:</td><td class="values">{{countString}}</td></tr>
					<tr><td class="titles">Hibapont:</td><td class="values">{{failedTries}}</td></tr>
					<tr><td class="titles">Kitöltött mezők:</td><td class="values">{{filledFields}}/81</td></tr>
				</table>
			</v-container>
			<v-container class="d-inline-block d-sm-inline-block d-md-none justify-center">
				<table>
					<tr>
						<td class="text-xs-center cellsize"><v-icon>mdi-alert-circle-outline</v-icon></td>
						<td class="text-xs-center cellsize"><v-icon>mdi-av-timer</v-icon></td>
						<td class="text-xs-center cellsize"><v-icon>mdi-check</v-icon></td>
					</tr>
					<tr>
						<td class="text-xs-center cellsize">{{failedTries}}</td>
						<td class="text-xs-center cellsize">{{countString}}</td>
						<td class="text-xs-center cellsize">{{filledFields}}/81</td>
					</tr>
				</table>
			</v-container>
		</v-container>
    <v-btn icon elevation="20" color="black"><v-icon>mdi-pause</v-icon></v-btn>
	</v-container>
</template>

<style scoped>
.gameinfo {
	padding-top: 0px;
	margin-top: 0px;
	padding-bottom: 0px;
	margin-bottom: 0px;
}
.gameinfobox {
	font-weight: normal;
	background-color: white;
	border: 0.25px solid grey;
	border-radius: 5px 5px;
}
table {
	width: 100%;
}
.cellsize {
	width: 33.333%;
}
.values {
	color: rgb(51,102,187);
	text-align: right;
	font-weight: bold;
}
</style>

<script>
export default {

	computed: {
		countString() {
			let seconds = this.$store.state.counter;
			let min = 0;
			let sec = 0;
			min = parseInt(seconds / 60);
			sec = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
			return min + ':' + sec;
		},

		failedTries() {
			return this.$store.state.failCounter;
		},

		filledFields() {
			return this.$store.state.filledFields;
		}
	}
}
</script>