<template>
	<v-container class="gameinfo">
		<v-container class="d-none d-md-block">
			<p>Eltelt idő: <span class="values">{{countString()}}</span></p>
			<p>Hibapont: <span class="values">{{failedTries()}}</span></p>
			<p>Kitöltött mezők száma: <span class="values">{{filledFields()}}</span></p>
		</v-container>
		<v-container class="d-block d-md-none">
			<p id="counter"><span class="values">{{countString()}}</span></p>
			<p>
				Hibapont: <span class="values">{{failedTries()}}</span>
				Kitöltött mezők száma: <span class="values">{{filledFields()}}</span>
			</p>
		</v-container>
	</v-container>
</template>

<style scoped>

.gameinfo {
	text-align: left;
	font-weight: normal;
}
.values {
	color: blue;
}
#counter {
	text-align: center;
	font-size: large;
	font-weight: bold;
}

</style>

<script>
export default {

	methods: {
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