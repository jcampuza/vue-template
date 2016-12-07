// CSS import
import "../node_modules/normalize.css/normalize.css"

// Main JS imports
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';


new Vue({
	el: '#app',
	render: h => h(App)
})

axios.get('http://localhost:3000/api/');
