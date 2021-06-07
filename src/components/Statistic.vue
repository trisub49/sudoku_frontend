<template>
	<v-dialog max-width="400px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn class="py-0 my-0 statisticbtn" width="80%" small slot="activator" elevation="20" v-on="on">
        Statisztika
      </v-btn>
		</template>
		<v-card color="rgba(234, 234, 250)">
			<v-card-title>
				<h4>Statisztika</h4>
			</v-card-title>
			<v-card-text>
				<b>
					Ide jönnek a statisztika adatai!
				</b>
			</v-card-text>
			<v-card-actions class="justify-center">
				<v-btn small width="45%" elevation="20" @click="dialog = false">
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
</style>