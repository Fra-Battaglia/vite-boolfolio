<script>

	export default {

		data() {
			return {

			}
		},

		components: {
			
		},

		methods: {

		}
	}
</script>

<template>
	<header class="d-flex align-items-center w-100">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col d-flex gap-3">
					<router-link to="/">Home</router-link>
    				<router-link to="/portfolio">Portfolio</router-link>
    				<router-link to="/contacts">Contacts</router-link>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>

	@use '../styles/partials/variables' as *;
	@use '../styles/partials/mixins' as *;

	header {
		height: 80px;
		background-color: $dark-color;

		a {
			color: $light-color;
			text-decoration: none;
		}
	}
</style>