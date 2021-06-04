<template>
	<v-dialog max-width="400px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn slot="activator" icon elevation="20" color="black" v-on="on"><v-icon>mdi-refresh</v-icon></v-btn>
		</template>
		<v-card color="rgba(234, 234, 250)">
			<v-card-title>
				<h4>Megerősítés</h4>
			</v-card-title>
			<v-card-text>
				<b>
					<v-spacer />
					Biztosan új táblát szeretnél?
					<v-spacer />
					A jelenlegi eredményed el fog veszni.
				</b>
			</v-card-text>
			<v-card-actions>
				<v-btn width="33%" @click="$store.state.menuStatus = 1">Igen</v-btn>
				<v-spacer />
				<v-btn width="33%" @click="dialog = false">Nem</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<style scoped>
.v-btn {
	text-transform: unset;
}
</style>

<script>
export default {
	data() {
		return {
			dialog: false
		}
	}
}
</script>
