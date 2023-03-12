<script>
	import axios from 'axios';
	export default {

		data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/projects').then(response => {
            this.projects = response.data.results;
        });
    }
}
</script>

<template>
	<main>
		<RouterView />
	</main>
</template>

<style lang="scss">
	img.project-image {
		width: 300px;
	}
</style>