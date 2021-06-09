<template>
	<v-dialog max-width="400px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn class="py-0 my-0 statisticbtn" width="80%" small slot="activator" elevation="20" v-on="on" @click="loadPlayerStatistic()">
        Statisztika
      </v-btn>
		</template>
		<v-card color="rgba(234, 234, 250)">
			<v-card-title>
				<h4>Statisztika</h4>
			</v-card-title>
			<v-card-text v-html="dialogText">
			</v-card-text>
			<v-card-actions class="justify-center">
				<v-btn class="backbtn" small width="45%" elevation="20" @click="dialog = false">
					Vissza
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<style scoped>
.statisticbtn {
	height: 70px;
  font-weight: bold;
  text-transform: unset;
}
.backbtn {
	font-weight: bold;
	text-transform: unset;
}
</style>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			dialog: false,
			dialogText: ""
		}
	},
	methods: {
		loadPlayerStatistic() {
			let host = window.location.protocol + "//" + window.location.host;
			axios.get(`${host}/api/statistic/${this.$store.state.user._id}`)
			.then(res => {
				if(res.data.playedGames == null) {
					this.dialogText = 'Nincs még mentett statisztikád!'
				} else {
					this.dialogText = 
						`Játszott játékok száma: ${res.data.playedGames}<br>
						- könnyű: ${res.data.playedEasy}<br>
						- közepes: ${res.data.playedMedium}<br>
						- nehéz: ${res.data.playedHard}<br>
						Ebből befejezett: ${res.data.finishedGames}<br>
						- könnyű: ${res.data.finishedEasy}<br>
						- közepes: ${res.data.finishedMedium}<br>
						- nehéz: ${res.data.finishedHard}<br>`;
				}
			});
		}
	}
}
</script>