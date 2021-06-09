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
					<v-divider />
					<br>
					Biztosan új táblát szeretnél?
					<v-spacer />
					A jelenlegi eredményed el fog veszni.
					<v-spacer />
				</b>
			</v-card-text>
			<v-card-actions>
				<v-btn large width="40%" color="rgb(51,102,187)" @click="finishGame()" elevation="20">
					Igen
					<v-spacer />
					<v-icon>mdi-check</v-icon>
				</v-btn>
				<v-spacer />
				<v-btn large width="40%" @click="dialog = false" elevation="20">
					Nem
					<v-spacer />
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<style scoped>
.v-btn {
	font-weight: bold;
}
</style>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			dialog: false
		}
	},
	methods: {
		finishGame() {
			let host = window.location.protocol + "//" + window.location.host;
			axios.post(`${host}/api/statistic`, {
				playerId: this.$store.state.user._id,
				level: this.$store.state.difficulty,
				time: this.$store.state.counter,
				failCounter: this.$store.state.failCounter,
				isFinished: false
			})
			.then(res => {
				console.log(res);
				this.$store.state.menuStatus = 1;
			});
		}
	}
}
</script>
