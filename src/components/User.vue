<template>
	<v-container class="user">
		<v-icon size="80">mdi-account-circle</v-icon>
		<br>
		<br>
		<v-btn class="mx-0" id="login" href="/auth/google" color="primary" elevation="20" small>
			<v-icon>mdi-google</v-icon>
			<v-spacer />
			Bejelentkezés Google fiókkal
		</v-btn>
	</v-container>
</template>

<style scoped>
.user {
	background-color: white;
	border-radius: 5px 5px;
	height: 100%;
	vertical-align: middle;
}
#login {
	margin: 20px;
	width: 380px;
  max-width: 100%;
  height: 40px;
  font-weight: bold;
	text-transform: unset;
}
</style>
