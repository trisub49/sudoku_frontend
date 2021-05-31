<template>
	<v-container class="gameinfo">
		<v-container class="d-none d-md-block">
			<p>Eltelt idő: <span class="values">1:35</span></p>
			<p>Hibapont: <span class="values">10</span></p>
			<p>Kitöltött mezők száma: <span class="values">5</span></p>
		</v-container>
		<v-container class="d-block d-md-none">
			<p id="counter"><span class="values">1:35</span></p>
			<p>
				Hibapont: <span class="values">10</span>
				Kitöltött mezők száma: <span class="values">5</span>
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
	
}
</script>