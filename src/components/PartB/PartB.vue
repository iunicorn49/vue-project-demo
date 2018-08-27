<template>
	<div>
		<h1>part-B</h1>
		<span @click.stop="back">返回</span>
	</div>
</template>

<script>
export default {
	name: 'part-b',
	methods: {
		back() {
			this.$router.back()
		}
	}	
}
</script>

<style lang="stylus" scoped>
h1
	color #abcdef
span
	color #ff5d5d	
</style>



