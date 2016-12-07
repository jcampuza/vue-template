<template>
	<div id="app">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'THIS IS YOUR APP'
			}
		}
	}
</script>

<style lang="sass">
	#app {
		background-color:red;
	}
</style>