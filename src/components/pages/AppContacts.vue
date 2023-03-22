<script>
	import AppHeader from '../AppHeader.vue';
	import AppJumbotron from '../AppJumbotron.vue';
	import AppMain from '../AppMain.vue';
	import AppFooter from '../AppFooter.vue';
	import axios from 'axios';
	
	export default {

		data() {
			return {
				baseUrl: 'http://127.0.0.1:8000',
				success: false,
				name: '',
				email: '',
				message: '',
				errors: {},
			}
		},

		components: {
			AppHeader,
			AppJumbotron,
			AppMain,
			AppFooter
		},

		methods: {
			sendContact() {
				const data = {
					name: this.name,
					email: this.email,
					message: this.message,
				}

				axios.post(`${this.baseUrl}/api/contacts`, data).then(response => {
					if(!response.data.success) {
						this.errors = response.data.errors;
					} else {
						this.success = true;
						this.name = '';
						this.email = '';
						this.message = '';
					}
				});

        	}
		}
	}
</script>

<template>
	<div class="container">
		<div class="row">
			<div class="col-6 py-5">
				<form @submit.prevent="sendContact" method="post">
					<div class="mb-3">
						<label for="name" class="form-label">Name</label>
						<input type="text" class="form-control bg-dark text-white" name="name" v-model="name" id="name" placeholder="Fra Battaglia">
						<div  v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
							{{error}}
                        </div>
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<input type="email" class="form-control bg-dark text-white" v-model="email" id="email" placeholder="name@example.com">
						<div  v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
							{{error}}
                        </div>
					</div>
					<div class="mb-3">
						<label for="message" class="form-label">Message</label>
						<textarea class="form-control bg-dark text-white" name="message" v-model="message" id="message" rows="4" placeholder="Insert your message"></textarea>
						<div  v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger">
							{{error}}
                        </div>
					</div>
					<div class="mb-3">
						<button type="submit" class="btn btn-warning">Send</button>
						<!-- <input type="submit" value="Send" class="btn btn-warning"> -->
					</div>
				</form>
			</div>
			<div class="col-6 d-flex justify-content-center align-items-center">
				<img src="https://media.pokemoncentral.it/wiki/6/6c/Sprnbm0067.gif" alt="machoke" class="w-50">
			</div>
		</div>
	</div>	
</template>

<style lang="scss">
	@use '../../styles/partials/variables' as *;
	@use '../../styles/partials/mixins' as *;
</style>