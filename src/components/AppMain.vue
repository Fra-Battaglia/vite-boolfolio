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
		<div v-for="item in projects" :key="project.id">
			<h3>{{ item.title }}</h3>
		</div>
	</main>
</template>

<style lang="scss" scoped>

</style>