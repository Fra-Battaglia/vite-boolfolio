<script>
	import AppHeader from '../AppHeader.vue';
	import AppJumbotron from '../AppJumbotron.vue';
	import AppMain from '../AppMain.vue';
	import AppFooter from '../AppFooter.vue';
	
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
	<div class="container">
		<div class="row">
			<div class="col">
				<h1>HOMEPAGE</h1>
			</div>
		</div>
	</div>	
</template>

<style lang="scss">
	@use '../../styles/partials/variables' as *;
	@use '../../styles/partials/mixins' as *;

	body {
		background-color: $dark-color;
		font-family: 'Montserrat', sans-serif;
	}
</style>
