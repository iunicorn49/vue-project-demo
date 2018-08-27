<template>
	<div class="wrapper">
		<div class="item">
			<router-link to="/transitions">transitions</router-link>
		</div>
		<div class="item">
			<router-link to="/demo">自己实现滚动条</router-link>
		</div>
		<div class="item">
			<router-link to="/upload_test">上传测试</router-link>
		</div>
		<div class="item">
			<router-link to="/gauge_chart">gauge-chart</router-link>
		</div>
		<div class="item">
			<router-link to="/pie_chart">pie-chart</router-link>
		</div>
		<div class="item">
			<router-link to="/part_A">保留滚动条</router-link>
		</div>
		<div class="item">
			<router-link to="/part_B">part B</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'nav-bar'
}
</script>

<style lang="stylus" scoped>
.wrapper
	width 100%
	height 60px
	background #fff
	box-shadow 0 2px 6px rgba(0,0,0,.1)
	overflow hidden
.item 
	float left
	height 100%
	margin-left 50px
	a
		line-height 60px
		text-decoration none
		font-weight 700
		color #999
		&.router-link-active, &:hover
			color #333
</style>

