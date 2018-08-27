<template>
	<div class="sub-nav">
		<transition-group name="list-complete">
			<div class="item" v-if="show" v-for="(nav, index) in navList" :key="index">
				<router-link :to="nav.path">{{nav.title}}</router-link>
			</div>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: 'sub-bar',
		props: {
			navList: {type: Array, default: () => []}
		},
		data() {
			return {
				show: false
			}
		},
		mounted() {
			setTimeout(() => {
				this.show = true
			}, 500)
		}
	}
</script>

<style lang="stylus" scoped>
	.sub-nav
		width 100%
		height 40px
		background #fff
		box-shadow 0 2px 2px rgba(0,0,0,.1)
		overflow hidden
	.item 
		float left
		height 100%
		margin-left 50px
		transition: all 1s
		a
			line-height 40px
			text-decoration none
			font-weight 700
			color #999
			&.router-link-active, &:hover
				color #666

	.list-complete-enter, .list-complete-leave-to
		opacity 0
		transform translateX(-100%)
	
</style>
