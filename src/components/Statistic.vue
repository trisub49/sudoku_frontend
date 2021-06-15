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
			<v-card-text>
				<v-container v-if="dialogStatus == 0"> 
					<v-progress-circular indeterminate color="rgb(51,102,187)" />
				</v-container>
				<v-container v-if="dialogStatus == 1">
					Neked nincsen még mentett statisztikád.
				</v-container>
				<v-container v-if="dialogStatus == 2" class="font-weight-bold">
					<h3>Játszott játékok száma: {{statistic.playedGames}}</h3><br>
					- könnyű: {{statistic.playedEasy}}<br>
					- közepes: {{statistic.playedMedium}}<br>
					- nehéz: {{statistic.playedHard}}<br><br>
					<h3>Ebből befejezett: {{statistic.finishedGames}}</h3><br>
					- könnyű: {{statistic.finishedEasy}}<br>
					- közepes: {{statistic.finishedMedium}}<br>
					- nehéz: {{statistic.finishedHard}}<br>
				</v-container>
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
			dialogStatus: 0,
			statistic: null
		}
	},
	methods: {
		loadPlayerStatistic() {
			let host = window.location.protocol + "//" + window.location.host;
			axios.get(`${host}/api/statistic/${this.$store.state.user._id}`)
			.then(res => {
				this.statistic = res.data;
				if(this.statistic.playedGames == null) {
					this.dialogStatus = 1;
				} else {
					this.dialogStatus = 2;
				}
			});
		}
	}
}
</script>