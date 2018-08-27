<template>
	<div>
		<div v-for="n in 20" :key="n">
			<h1>Title {{n}}</h1>
			<p v-for="m in 3" :key="m">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium placeat aperiam a. Esse, magni nulla reiciendis quas cum optio! Earum laudantium amet libero aliquid! Quos, sequi! Ab sit veritatis debitis.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'part-a',
	data() {
		return {
			scroll: 0
		}
	},
	mounted() {
		/**
		 * 由于在外部设置了 keep-alive 才得以保留 this.scroll 的值
		 */
		window.addEventListener('scroll', this._getScroll)
	},
	activated() {
		if(this.scroll > 0){
			window.scrollTo(0, this.scroll)
			window.addEventListener('scroll', this._getScroll)
		}
	},
	deactivated() {
		window.removeEventListener('scroll', this._getScroll)
	},
	methods: {
		_getScroll() {
			this.scroll = document.documentElement.scrollTop
		}
	}
}
</script>

<style lang="stylus" scoped>
h1
	color #585858
p
	line-height 1.8
	color #999
</style>



