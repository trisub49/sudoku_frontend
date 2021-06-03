<template>
	<v-container class="gameinfo">
		<v-container class="d-none d-sm-none d-md-block d-lg-block d-xl-block text-left">
			<table>
				<tr><td class="titles">Eltelt idő:</td><td class="values">{{countString}}</td></tr>
				<tr><td class="titles">Hibapont:</td><td class="values">{{failedTries}}</td></tr>
				<tr><td class="titles">Kitöltött mezők:</td><td class="values">{{filledFields}}/81</td></tr>
			</table>
		</v-container>
		<v-container class="d-block d-sm-block d-md-none justify-center">
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
</template>

<style scoped>

.gameinfo {
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
}
.v-btn {
	margin-bottom: 0px;
}

p {
	line-height: 100%;
}

</style>

<script>
export default {

	computed: {
		countString() {
			let seconds = this.$store.state.counter;
			return seconds;
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