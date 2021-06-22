<template>
	<v-container class="user">
		<v-container v-if="loading" class="mx-auto py-10 my-5">
			<v-progress-circular indeterminate color="rgb(51,102,187)" />
		</v-container>
		<v-container v-else class="mx-auto py-0 my-0">
			<v-container v-if="!isLoggedIn()">
				<v-icon size="80">mdi-account-circle</v-icon>
				<br>
				<br>
				<v-btn class="login mx-0 py-0 my-0" href="/auth/google" color="primary" elevation="20" small>
					<v-icon>mdi-google</v-icon>
					<v-spacer />
					Bejelentkezés Google fiókkal
				</v-btn>
			</v-container>
			<v-container v-else>
				<v-img :src="$store.state.user.image" width="25%" class="rounded-circle mx-auto" />
				<h3>{{$store.state.user.username}}</h3>
				<br>
				<v-row no-gutters class="mb-0 pb-0">
					<v-col class="mx-0 px-0"> <Statistic /> </v-col>
					<v-col class="mx-0 px-0">
						<v-btn @click="logout()" class="login py-0 my-0" width="80%" elevation="20" color="primary" small>
							Kijelentkezés
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-container>
	</v-container>
</template>

<style scoped>
.user {
	background-color: white;
	border-radius: 5px 5px;
	height: 100%;
	vertical-align: middle;
	width: 380px;
	max-width: 100%;
}
.login {
	margin: 20px;
	width: 340px;
  max-width: 100%;
  height: 70px;
  font-weight: bold;
	text-transform: unset;
}
</style>

<script>

import axios from 'axios';
import Statistic from '@/components/Statistic.vue';

export default {
	name: 'User',
	components: { Statistic },
	data() {
		return {
			loading: true
		}
	},
	created() {
		this.getUser();
	},
	methods: {
		getUser() {
			let host = window.location.protocol + "//" + window.location.host;
			axios.get(`${host}/api/user`)
			.then(res => {
				if(res.data) {
					this.$store.state.user = res.data;
				} else {
					this.$store.state.user = null;
				}
				setTimeout(() => this.loading = false, 1000);
			});
		},
		logout() {
			this.loading = true;
			this.$store.state.user = null;
			let host = window.location.protocol + "//" + window.location.host;
			axios.get(`${host}/auth/google/logout`)
			.then(res => {
				console.log(res.data);
				setTimeout(() => this.loading = false, 1000);
			});
		},
		isLoggedIn() {
			if(this.$store.state.user != null) {
				return true;
			}
			return false;
		}
	}
}
</script>
