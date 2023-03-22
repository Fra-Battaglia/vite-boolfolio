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
	<AppJumbotron />
	<div class="container">
		<div class="row">
			<div class="col py-5">
				<h1>HOMEPAGE</h1>
			</div>
		</div>
	</div>	
</template>

<style lang="scss" scoped>
	@use '../../styles/partials/variables' as *;
	@use '../../styles/partials/mixins' as *;

	header {
		position: absolute;
		top: 0;
		background-color: transparent;
	}
</style>
