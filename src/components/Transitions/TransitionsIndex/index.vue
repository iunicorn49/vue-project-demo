<template>
	<div class="index-box">
		<div class="index-item">
			<div class="my-og">
				<button @click="toggle">TOGGLE</button>
				<p class="my-p" style="margin-top: 10px;" ref="target">原生JS实现</p>
			</div>
		</div>
		<div class="index-item">
			<div class="vue-og">
				<button v-on:click="show = !show">Toggle</button>
				<transition name="fade">
					<p style="margin-top: 10px;" v-if="show">transition组件实现</p>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	function tr(e) {
		if (this) {
			this.removeEventListener('transitionend', tr)
			this.parentNode && this.parentNode.removeChild(this)
		}
	}

	function rm(e) {
		if (this) {
			this.classList.remove('ready')
			this.removeEventListener('transitionend', rm)
		}
	}

	export default {

		
		
		name: 'transitions-index',
		data() {
			return {
				show: true,
				myShow: true,
				parent: null
			}
		},
		methods: {
			toggle() {
				this.myShow = !this.myShow
				let target = this.$refs.target
				this.myShow ? this.open(target) : this.close(target)
			},
			open(el) {
				el.removeEventListener('transitionend', rm)
				el.classList.add('out')
				el.classList.add('ready')
				this.parent.appendChild(el)
				this.$nextTick(() => {
					el.classList.remove('out')
					el.addEventListener('transitionend', rm)
				})
			},
			close(el) {
				el.removeEventListener('transitionend', tr)
				this.parent = el.parentNode
				el.classList.add('ready')
				el.classList.add('out')
				el.addEventListener('transitionend', tr)
			}
		}
	}
</script>

<style lang="stylus" scoped>

	.out
		opacity 0
		transform translateY(20px)

	.ready
		transition all 1s

	button
		padding 4px 8px

	.index-box
		display flex
		.index-item
			flex 1
			padding 10px
			.vue-og
				background #f2f2f2
			.my-og
				background #abcdef

	.fade-enter-active // 激活进入
		transition all 1s

	.fade-leave-active // 激活离开
		transition all 1s

	.fade-enter, .fade-leave-to // 准备进来, 离开以后
		opacity 0
		transform translateY(20px)

</style>
