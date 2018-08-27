<template>
	<div>
		<button @click="send">click me</button>
	</div>
</template>

<script>

const url = 'http://127.0.0.1:1337'

export default {
	methods: {
		send () {
			this.$http.get(url).then(info => {
				console.log(info)
			}).catch(err => console.error(err))
		}
	}
}
</script>