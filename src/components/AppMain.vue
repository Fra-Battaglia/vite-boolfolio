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
		<div class="container text-white">
			<div v-for="item in projects" :key="item.id">
				<h3>{{ item.title }}</h3>
				<p>{{ item.content }}</p>
				<img :src="baseUrl + 'storage/' + item.cover_image" alt="" class="project-image">
			</div>
		</div>
	</main>
</template>

<style lang="scss">
	img.project-image {
		width: 300px;
	}
</style>