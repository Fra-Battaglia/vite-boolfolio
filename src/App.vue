<script>
	import AppHeader from './components/AppHeader.vue';
	import AppJumbotron from './components/AppJumbotron.vue';
	import AppMain from './components/AppMain.vue';
	import AppFooter from './components/AppFooter.vue';
	
	export default {

		data() {
			return {

			}
		},

		components: {
			AppHeader,
			AppJumbotron,
			AppMain,
			AppFooter
		},

		methods: {

		}
	}
</script>

<template>	
	<AppHeader />
	<AppMain />
	<AppFooter />
</template>

<style lang="scss">
	@use './styles/general' as *;
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;

	body {
		background-color: $dark-color;
		color: $light-color;
		font-family: 'Montserrat', sans-serif;
	}
</style>
