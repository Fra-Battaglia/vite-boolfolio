<script>
	import axios from 'axios';
	import AppMain from '../AppMain.vue';
	export default {

	data() {
        return {
			name: App,
            baseUrl: 'http://127.0.0.1:8000/',
			loading: true,
			project: null
        }
    },

	props: {
		title: String,
		content: String,
		cover_image: String,
		type: String,
		technology: Array,
	},

	components: {
		AppMain
	},
    mounted() {
		this.loading = true;
        axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then(response => {
			if(response.data.success) {
				this.project = response.data.results;
				this.loading = false;
				console.log(this.project);
			} else {
				alert('chiamata axios fallita, FALLITO')
			}
        });
    }
}
</script>

<template>
	<div v-if="project">
		  <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="card-img-top">
		  <h2>{{ project.title }}</h2>
		  <p>{{ project.content }}</p>
		  <p>{{ project.type.name }}</p>
		  <span v-for="technology in project.technologies" :key="technology.id">
			{{technology.name}}
		  </span>
	 </div>
	<div v-else>
		  <p>Loading...</p>
	</div>
</template>

<style lang="scss">
</style>