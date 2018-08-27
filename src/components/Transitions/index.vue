<template>
	<div>
		<transition appear name="fade">
			<sub-bar :navList="navList"></sub-bar>
		</transition>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
	import SubBar from '@/common/SubBar'

	export default {
		name: 'transitions-index',
		data() {
			return {
				navList: [
					{ title: '原生JS实现transitions', path: 'index' },
				]
			}
		},
		components: {
			SubBar
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		padding 15px

	.fade-enter-active, .fade-leave-active
		transition all .5s

	.fade-enter, .fade-leave-to
		transform translateY(-100%)
		opacity 0
</style>
