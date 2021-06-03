<template>
	<v-container class="gameinfo">
		<v-container class="d-none d-sm-none d-md-block d-lg-block d-xl-block text-left">
			<p>Eltelt idő: <span class="values">{{countString}}</span> mp</p>
			<p>Hibapont: <span class="values">({{failedTries}})</span></p>
			<p>Kitöltött mezők: <span class="values">({{filledFields}}/81)</span></p>
		</v-container>
		<v-container class="d-block d-sm-block d-md-none justify-center">
			<p><span class="values" id="counter">{{countString}}</span></p>
			<p>Hibapont: <span class="values">({{failedTries}})</span> -
			Kitöltött mezők: <span class="values">({{filledFields}}/81)</span></p>
		</v-container>
	</v-container>
</template>

<style scoped>

.gameinfo {
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