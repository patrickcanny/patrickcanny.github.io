const App = {
	data() {
		return {
			message: 'Testing Vue CDN',
		};
	},
};

Vue.createApp(App).mount('#app');
