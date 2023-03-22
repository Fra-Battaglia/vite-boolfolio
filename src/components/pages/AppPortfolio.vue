<script>
	import axios from 'axios';
	import AppMain from '../AppMain.vue';
	export default {

		data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },
	components: {
		AppMain
	},
    mounted() {
        axios.get('http://127.0.0.1:8000/api/projects').then(response => {
            this.projects = response.data.results;
        });
    }
}
</script>

<template>
	<div class="portfolio py-5">
		<div class="container text-white">
			<div class="row">
				<div class="col">
					<h1>Portfolio</h1>
				</div>
			</div>
			<div class="row">
				<div v-for="item in projects" :key="item.id" class="col-3 my-3">
					<div class="card bg-transparent border-white px-0">
						<img :src="baseUrl + 'storage/' + item.cover_image" alt="" class="project-image d-block card-img-top my-ratio-16-9">
						<div class="card-body border-top">
							<h3>{{ item.title }}</h3>
							<p>{{ item.content }}</p>
							<router-link :to="'/portfolio/' + item.slug" class="btn btn-outline-warning mt-3">Vedi progetto</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.my-ratio-16-9 {
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}
</style>